'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import * as THREE from 'three';

// 3D Shape Component
function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      
      // Scale on hover
      meshRef.current.scale.lerp(
        new Vector3(hovered ? 1.2 : 1, hovered ? 1.2 : 1, hovered ? 1.2 : 1),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Camera Controller
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // Parallax effect based on mouse position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7C4DFF" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#00E0A1" />
      
      <FloatingShape position={[-2, 0, 0]} color="#7C4DFF" />
      <FloatingShape position={[2, 1, -1]} color="#00E0A1" />
      <FloatingShape position={[0, -1, 1]} color="#E6EEF3" />
      
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4}
      />
      
      <CameraController />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="night" />
    </>
  );
}

// Fallback Component
// function Fallback() {
//   return (
//     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
//       <div className="text-center space-y-4">
//         <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
//           <span className="text-white font-bold text-xl">AR</span>
//         </div>
//         <p className="text-text-secondary">Loading 3D Experience...</p>
//       </div>
//     </div>
//   );
// }

// Main Canvas Component
export default function HeroCanvas() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIsWebGLSupported(!!gl);
  }, []);

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-accent rounded-full flex items-center justify-center animate-float">
            <span className="text-white font-bold text-2xl">AR</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-text-primary">
              Abdul Rafay
            </h2>
            <p className="text-text-secondary">
              AI Automation Expert & Website Developer
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}