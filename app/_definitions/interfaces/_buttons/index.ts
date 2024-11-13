import { OnPress } from '@/app/_definitions/types/_buttons'
import { RadiusE, ColorE } from '@/app/_definitions/enums/_general'
import { ElementType } from "react";

export interface ButtonI {
  buttonText?: string;
  onClick: OnPress;
  testId?: string;
}

export interface ButtonIconI extends ButtonI {
  buttonIcon: ElementType;
  iconOnly?: boolean;
  radius: RadiusE;
  color: ColorE;
  startIcon?: boolean;
  endIcon?: boolean;
  iconSize: number;
}