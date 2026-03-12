import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Sidebar from '@/components/Sidebar'

// Mock de next/navigation para que usePathname no falle
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

describe('Sidebar Component', () => {
  it('should render the brand name', () => {
    render(<Sidebar />)
    expect(screen.getByText('ByteBite')).toBeInTheDocument()
  })

  it('should have a link to the recipes page', () => {
    render(<Sidebar />)
    const recipeLink = screen.getByRole('link', { name: /my recipes/i })
    expect(recipeLink).toHaveAttribute('href', '/recipes')
  })

  it('should show the logout button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})