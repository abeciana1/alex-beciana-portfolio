import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavLink from '@/app/_components/_navigation/NavLink';

describe('NavLink', () => {
  beforeEach(() => {
    render(<NavLink linkText="Test" href="/test" />);
  });
  it('should render under a list item role', () => {
    const navLink = screen.getByRole('listitem');
    expect(navLink).toBeInTheDocument();
  });
  it('should render a link', () => {
    const navLink = screen.getByRole('link');
    expect(navLink).toHaveTextContent('Test');
    expect(navLink).toHaveAttribute('href', '/test');
    expect(navLink).toBeInTheDocument();
  });
});
