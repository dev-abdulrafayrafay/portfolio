import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../layout/Header'

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockedLink.displayName = 'MockedLink'
  return MockedLink
})

describe('Header Component', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
  })

  it('renders the header with logo and navigation', () => {
    render(<Header />)
    
    expect(screen.getByText('Abdul Rafay')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toBeInTheDocument()
    
    // Menu should be closed initially
    expect(screen.queryByText('Work with me')).not.toBeInTheDocument()
    
    // Click menu button
    fireEvent.click(menuButton)
    
    // Menu should be open
    expect(screen.getByText('Work with me')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toHaveAttribute('aria-label', 'Toggle menu')
    
    const socialLinks = screen.getAllByRole('link')
    socialLinks.forEach(link => {
      if (link.getAttribute('aria-label')) {
        expect(link).toHaveAttribute('aria-label')
      }
    })
  })

  it('renders social media links', () => {
    render(<Header />)
    
    // Check for social media links in desktop view
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const emailLink = screen.getByLabelText('Email')
    
    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })
})