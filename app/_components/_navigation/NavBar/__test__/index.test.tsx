import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '@/app/_components/_navigation/NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should have role of navigation', () => {
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });
  it('should have an unordered list of links', () => {
    const linksList = screen.getByTestId('linkList')
    expect(linksList).toBeInTheDocument();
  });
  it('should have my name', () => {
    const myName = screen.getByTestId('my-name');
    expect(myName.innerHTML).toBe('Alex Beciana');
    expect(myName).toBeInTheDocument();
  });
});
