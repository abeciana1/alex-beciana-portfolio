'use server';
import TwoColumnHero from '@/app/_components/_sections/_heros/TwoColumnHero';
import { TiSocialLinkedin } from 'react-icons/ti';
import { AiOutlineGithub, AiOutlineBehance } from 'react-icons/ai';
import ExpandBtnLink from './_components/_links/ExpandBtn';
import { ColorE } from './_definitions/enums/_general';

export default async function Home() {
  return (
    <>
      <TwoColumnHero
        headingLevel={1}
        headingText="Hi I'm Alex"
        bodyText="Full stack software engineer with over three years of experience with an entrepreneurial spirit. Previous experience with five years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
        gradientBlur
        image={{
          src: '/profile-callout-edited.webp',
          alt: 'Animated illustration of me - Alex Beciana',
          width: 400,
          height: 414,
          className: '',
        }}
      >
        <div className="flex pb-8 space-x-4 md:space-y-0 pt-5 flex-row relative items-center">
          <ExpandBtnLink
            buttonIcon={<TiSocialLinkedin strokeWidth='1' className='h-7 w-7 mx-auto fill-background' />}
            linkText='LinkedIn'
            href="https://www.linkedin.com/in/alexbeciana"
            ariaLabel="Link to Alex Beciana LinkedIn profile"
            addClass="hover:w-32"
            color={ColorE.FORE}
          />
          <ExpandBtnLink
            buttonIcon={<AiOutlineGithub strokeWidth='1' className='h-7 w-7 fill-background' />}
            linkText='GitHub'
            href="https://github.com/abeciana1"
            ariaLabel="Link to Alex Beciana GitHub profile"
            addClass="hover:w-32"
            color={ColorE.FORE}
          />
          <ExpandBtnLink
            buttonIcon={<AiOutlineBehance strokeWidth='1' className='h-7 w-7 mx-auto fill-background' />}
            linkText='Behance'
            href="https://www.behance.net/alexbeciana"
            ariaLabel="Link to Alex Beciana Behance profile"
            addClass="hover:w-32"
            color={ColorE.FORE}
          />
        </div>
      </TwoColumnHero>
    </>
  );
}
