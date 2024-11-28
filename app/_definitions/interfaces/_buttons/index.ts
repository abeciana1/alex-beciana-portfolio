import { OnPress, VariantT } from '@/app/_definitions/types/_buttons';
import { RadiusE, ColorE } from '@/app/_definitions/enums/_general';
import { ElementType } from 'react';
// import { ColorT } from '@/app/_definitions/types/_general'

export interface ButtonI {
  buttonText?: string;
  onClick: OnPress;
  testId?: string;
  textColor?: ColorE;
  color: ColorE;
  variant?: VariantT
}

export interface ButtonIconI extends ButtonI {
  buttonIcon: ElementType;
  iconOnly?: boolean;
  radius: RadiusE;
  startIcon?: boolean;
  endIcon?: boolean;
  iconSize: number;
}
