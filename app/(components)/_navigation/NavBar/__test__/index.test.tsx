import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '@/app/(components)/_navigation/NavBar'

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />)
  })
  it('should have role of navigation', () => {
    const navBar = screen.getByRole('navigation')
    expect(navBar).toBeInTheDocument()
  })
})
