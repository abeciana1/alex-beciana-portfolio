import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LinkButton from '@/app/_components/_links/LinkButton'
import { ColorE } from '@/app/_definitions/enums/_general';

describe('LinkButton', () => {
  beforeEach(() => {
    render(
      <LinkButton
        linkText='test link'
        href='/about'
        testId='test-link'
        color={ColorE.SECONDARY}
        externalLink
        ariaLabel='link to test page'
        arrow={false}
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