import { ColorE } from '@/app/_definitions/enums/_general';

export interface LinkI {
  linkText: string;
  href: string;
  testId?: string;
  textColor?: ColorE;
}

export interface IExpandLinkProps extends LinkI {
  buttonIcon: React.ReactNode;
  addClass?: string;
  ariaLabel: string;
  color: ColorE;
}

export interface PreRenderLinkI extends LinkI {
  icon?: React.ReactNode;
  ariaLabel: string;
  externalLink?: boolean;
  underline?: boolean;
}
