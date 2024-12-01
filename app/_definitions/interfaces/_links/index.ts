import { ColorE } from '@/app/_definitions/enums/_general';
import { ElementType } from 'react';

export interface LinkI {
  linkText: string;
  href: string;
  testId?: string;
  textColor?: ColorE;
  color: ColorE;
}

export interface IExpandLinkProps extends LinkI {
  icon: React.ReactNode;
  addClass?: string;
  ariaLabel: string;
}
