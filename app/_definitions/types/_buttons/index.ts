import { MouseEvent, TouchEvent } from 'react';

export type PressEvent = (
  event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
) => void;

export type MouseEventFuncT = (event: MouseEvent) => void;

export type OnClickNoReturnFuncT = () => void;

export type OnPress = PressEvent | OnClickNoReturnFuncT;

export type VariantT =
  | 'solid'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'faded'
  | 'shadow'
  | 'ghost';
