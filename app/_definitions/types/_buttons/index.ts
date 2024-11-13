import { MouseEvent, TouchEvent } from 'react';

export type PressEvent = MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>;

export type MouseEventFuncT = (event: MouseEvent) => void;

export type OnClickNoReturnFuncT = () => void;

export type OnPress = (event: PressEvent) => void;