import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ExpandBtnLink from '@/app/_components/_links/ExpandBtn'
import { ColorE } from '@/app/_definitions/enums/_general';
import { TiSocialLinkedin } from 'react-icons/ti';

describe('ExpandBtnLink', () => {
  beforeEach(() => {
    render(
      <ExpandBtnLink
        buttonIcon={<TiSocialLinkedin strokeWidth='1' className='h-7 w-7 mx-auto fill-background' />}
        linkText='LinkedIn'
        href="https://www.linkedin.com/in/alexbeciana"
        ariaLabel="Link to Alex Beciana LinkedIn profile"
        addClass="hover:w-32"
        color={ColorE.FORE}
      />
    )
  })
  it('should render link text on user hover', async () => {
    const user = userEvent.setup()
    const link = screen.getByRole('link')
    expect(link.textContent).toBe("")
    await user.hover(link)
    expect(link.textContent).toBe("LinkedIn")
  })
  it('should have a href attribute', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', "https://www.linkedin.com/in/alexbeciana")
  })
  it('should have an aria label', () => {
    const link = screen.getByLabelText("Link to Alex Beciana LinkedIn profile")
    expect(link).toBeInTheDocument()
  })
})