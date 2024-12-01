import { HeadingI } from '@/app/_definitions/interfaces/_styled/_headings';
import { ColorE } from '@/app/_definitions/enums/_general';
import cx from 'classnames';

export const Heading1 = ({ text, color, underline = false }: HeadingI) => {
  return (
    <h1
      className={cx('text-5xl leading-relaxed font-tiltNeon font-bold', {
        ['text-background']: color === ColorE.BACK,
        ['text-foreground']: color === ColorE.FORE,
        ['text-primary']: color === ColorE.PRIMARY,
        ['text-secondary']: color === ColorE.SECONDARY,
        ['text-danger']: color === ColorE.DANGER,
        ['text-warning']: color === ColorE.WARNING,
        ['text-success']: color === ColorE.SUCCESS,
        ['underline']: underline,
      })}
    >
      {text}
    </h1>
  );
};
