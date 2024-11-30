import { HeadingLevelT } from '@/app/_definitions/types/_general'
import { ImageI } from '@/app/_definitions/interfaces/_general'

export interface TwoColumnHeroI {
  headingLevel: HeadingLevelT;
  headingText: string;
  subheadingText?: string;
  bodyText: string;
  gradientBlur?: boolean;
  reverseOrder?: boolean;
  children: React.ReactNode;
  image: ImageI;
}