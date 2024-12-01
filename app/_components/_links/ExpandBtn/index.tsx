'use client'
import { useState } from 'react';
import cx from 'classnames';
import { IExpandLinkProps } from '@/app/_definitions/interfaces/_links';
import { ColorE } from '@/app/_definitions/enums/_general';
import Link from 'next/link';

const ExpandBtnLink = ({
  linkText,
  icon,
  textColor,
  color,
  addClass = '',
  href,
  ariaLabel,
}: IExpandLinkProps) => {
  const [open, setClose] = useState(false);

  const expandHandler = () => {
    if (open) {
      setClose(false);
    } else {
      setClose(true);
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        'py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center',
        {
          ['bg-background dark:text-danger']: color === ColorE.BACK,
          ['bg-foreground text-background']: color === ColorE.FORE,
          ['bg-primary']: color === ColorE.PRIMARY,
          ['bg-secondary']: color === ColorE.SECONDARY,
          ['bg-danger']: color === ColorE.DANGER,
          ['bg-warning']: color === ColorE.WARNING,
          ['bg-success']: color === ColorE.SUCCESS,
          [addClass]: addClass,
        }
      )}
      onMouseEnter={expandHandler}
      onMouseLeave={expandHandler}
      aria-label={ariaLabel}
    >
    {icon}
      {open && (
        <div
          className={cx('font-medium ml-2 whitespace-nowrap', {
            // ['text-white']: textColor === 'white',
            // ['text-altBlue']: textColor === 'altBlue',
            // ['text-coolGray']: textColor === 'coolGray',
          })}
        >
          {linkText}
        </div>
      )}
    </Link>
  );
};

export default ExpandBtnLink;
