import Link from 'next/link';
import { LinkButtonI } from '@/app/_definitions/interfaces/_links'
import cx from 'classnames'
import { RiExternalLinkFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { ColorE } from '@/app/_definitions/enums/_general';

const LinkButton = ({
  linkText,
  href,
  testId,
  arrow,
  externalLink,
  color,
  ariaLabel,
}: LinkButtonI) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      data-testid={testId}
      className={cx('flex items-center max-w-fit px-2 py-1 font-medium rounded-md text-lg', {
        ['bg-primary text-white']: color === ColorE.PRIMARY,
        ['bg-danger text-white']: color === ColorE.DANGER,
        ['bg-success text-black']: color === ColorE.SUCCESS,
        ['bg-secondary text-black']: color === ColorE.SECONDARY,
        ['bg-warning text-black']: color === ColorE.WARNING
      })}
    >
      {linkText}
      {externalLink &&
        <RiExternalLinkFill
          size={20}
          strokeWidth={1}
          data-testid='external-link'
          className='ml-2'
        />
      }
      {(arrow && !externalLink) &&
        <FaArrowRight size={20} className='ml-2' />
      }
    </Link>
  )
}

export default LinkButton