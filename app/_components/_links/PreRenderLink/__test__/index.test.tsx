import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PreRenderLink from '@/app/_components/_links/PreRenderLink'
import { RiExternalLinkFill } from "react-icons/ri";

describe('PreRenderLink', () => {
  beforeEach(() => {
    render(
      <PreRenderLink
        linkText='test link'
        href='/about'
        testId='test-link'
        ariaLabel='link to test page'
        externalLink
        underline={false} 
      />
    )
  })
  it('should render link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  })
  it('should render external link icon if external link', () => {
    const link = screen.getByTestId('test-link');
    expect(link).toBeInTheDocument();
  })
  it('should render link with href attribute', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  })
})