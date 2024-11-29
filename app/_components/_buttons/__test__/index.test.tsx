import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IconButton } from '@/app/_components/_buttons'
import { ColorE, RadiusE } from '@/app/_definitions/enums/_general'
import { MdFavorite } from "react-icons/md";

describe('Buttons', () => {
  describe('IconButton', () => {
    beforeEach(() => {
      render(
        <IconButton
          buttonText="Test Button"
          onClick={() => {}}
          buttonIcon={MdFavorite}
          iconSize={24}
          color={ColorE.BACK}
          radius={RadiusE.FULL}
          testId="test-icon-button"
          startIcon
        />
      )
    })
    it('renders the button text', () => {
      const button = screen.getByTestId('test-icon-button')
      expect(button.textContent).toBe('Test Button')
      expect(button).toBeInTheDocument()
    })
  })
})