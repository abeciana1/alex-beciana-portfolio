import Link from 'next/link'
import { PreRenderLinkI } from '@/app/_definitions/interfaces/_links'
import { RiExternalLinkFill } from "react-icons/ri";
import cx from 'classnames'
import { ColorE } from '@/app/_definitions/enums/_general';

const PreRenderLink = ({
  linkText,
  href,
  testId,
  textColor,
  icon,
  ariaLabel,
  externalLink = false,
  underline = false
}: PreRenderLinkI) => {
  return (
    <Link
      href={href}
      data-testid={testId}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={cx('flex items-center', {
        ['text-primary']: !textColor,
        ['text-secondary']: textColor === ColorE.SECONDARY,
        ['text-success']: textColor === ColorE.SUCCESS,
        ['text-warning']: textColor === ColorE.WARNING,
        ['text-danger']: textColor === ColorE.DANGER,
        ['text-foreground']: textColor === ColorE.FORE,
        ['underline']: underline
      })}
    >
      {linkText}
      {icon && icon}
      {externalLink &&
        <RiExternalLinkFill data-testid='external-link' fill={textColor} />
      }
    </Link>
  )
}

export default PreRenderLink