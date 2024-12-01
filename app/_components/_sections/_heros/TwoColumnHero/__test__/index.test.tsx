import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TwoColumnHero from '@/app/_components/_sections/_heros/TwoColumnHero';
import { ColorE, RadiusE } from '@/app/_definitions/enums/_general';
import { MdFavorite } from 'react-icons/md';
import IconButton from '@/app/_components/_buttons/IconButton';

describe('TwoColumnHero', () => {
  beforeEach(() => {
    render(
      <TwoColumnHero
        headingLevel={1}
        headingText="My Profile"
        subheadingText="A Brief Overview"
        bodyText="I'm Alex Beciana, a passionate software engineer with a background in user experience design. I've recently launched my first web application called 'Project Kanban', which aims to help you manage your projects efficiently."
        gradientBlur={false}
        image={{
          src: '/profile-callout-edited.webp',
          alt: 'test image',
          className: 'test-image',
          width: 500,
          height: 400,
        }}
        reverseOrder={false}
      >
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
      </TwoColumnHero>
    );
  });
  it('should render the heading', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('My Profile');
  });
  it('should render the subheading', () => {
    const subHeading = screen.getByText('A Brief Overview');
    expect(subHeading).toBeInTheDocument();
  });
  it('should render the body text', () => {
    const bodyText = screen.getByText(
      "I'm Alex Beciana, a passionate software engineer with a background in user experience design. I've recently launched my first web application called 'Project Kanban', which aims to help you manage your projects efficiently."
    );
    expect(bodyText).toBeInTheDocument();
  });
  it('should render image', () => {
    const image = screen.getByAltText('test image');
    expect(image).toBeInTheDocument();
  });
  it('should render the children', () => {
    const button = screen.getByTestId('test-icon-button');
    expect(button).toBeInTheDocument();
  });
});
