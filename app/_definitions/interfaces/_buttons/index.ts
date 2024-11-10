import { ReactNode } from "react";
import { MouseEventFuncT, OnClickNoReturnFuncT } from '@/app/_definitions/types/_buttons'
import { RadiusE, ColorE } from '@/app/_definitions/enums/_general'

export interface ButtonI {
  buttonText?: string;
  onClick: MouseEventFuncT | OnClickNoReturnFuncT;

}

export interface ButtonIconI extends ButtonI {
  buttonIcon: ReactNode;
  iconOnly: boolean;
  radius: RadiusE;
  color: ColorE;
}