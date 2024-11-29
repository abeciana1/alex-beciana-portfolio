import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Heading1 } from '@/app/_components/_styled/_headings'
import { ColorE } from "@/app/_definitions/enums/_general";

describe('Headings', () => {
  describe('Heading1', () => {
    beforeEach(() => {
      render(<Heading1 text='Testing' color={ColorE.FORE} />)
    })
    it('should render the heading', () => {
      const heading = screen.getByRole('heading', {
        level: 1
      });
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Testing')
    })
  })
})