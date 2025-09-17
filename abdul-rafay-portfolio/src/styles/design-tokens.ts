export const designTokens = {
  colors: {
    background: '#0B0F15',
    surface: '#0F1720',
    text: {
      primary: '#E6EEF3',
      secondary: '#9AA6B2',
      muted: '#6B7280',
    },
    accent: {
      primary: '#7C4DFF',
      secondary: '#00E0A1',
      gradient: 'linear-gradient(135deg, #7C4DFF 0%, #00E0A1 100%)',
    },
    border: '#1F2937',
    hover: '#374151',
  },
  fonts: {
    primary: 'Inter, system-ui, sans-serif',
    display: 'Poppins, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
} as const;

export type DesignTokens = typeof designTokens;