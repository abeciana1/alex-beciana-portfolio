import { Button } from '@nextui-org/react';
import { ButtonIconI } from '@/app/_definitions/interfaces/_buttons';
import cx from 'classnames'
import { ColorE } from '@/app/_definitions/enums/_general'

export const IconButton = ({
  buttonText = '',
  onClick,
  buttonIcon,
  iconOnly = false,
  radius,
  color,
  startIcon = false,
  endIcon = false,
  iconSize,
  testId = '',
  textColor,
  variant = "solid"
}: ButtonIconI) => {
  const Icon = buttonIcon;
  const iconStyle = {
    color: textColor
  }
  // todo remove color attr -> use classnames
  // todo add border class name styles
  // todo work on 
  return (
    <>
      {buttonIcon && startIcon && endIcon === false && (
        <Button
          variant={variant}
          data-testid={testId}
          onClick={onClick}
          isIconOnly={iconOnly}
          radius={radius}
          startContent={<Icon style={iconStyle} size={iconSize} />}
          className={cx({
            ['bg-background']: color === ColorE.BACK,
            ['bg-foreground']: color === ColorE.FORE,
            ['bg-primary']: color === ColorE.PRIMARY,
            ['bg-secondary']: color === ColorE.SECONDARY,
            ['bg-danger']: color === ColorE.DANGER,
            ['bg-warning']: color === ColorE.WARNING,
            ['bg-success']: color === ColorE.SUCCESS
          })}
        >
          {buttonText && !iconOnly && buttonText}
        </Button>
      )}
      {buttonIcon && endIcon && startIcon === false && (
        <Button
          variant={variant}
          data-testid={testId}
          onClick={onClick}
          isIconOnly={iconOnly}
          radius={radius}
          endContent={<Icon size={iconSize} />}
          className={cx({
            ['bg-background']: color === ColorE.BACK,
            ['bg-foreground']: color === ColorE.FORE,
            ['bg-primary']: color === ColorE.PRIMARY,
            ['bg-secondary']: color === ColorE.SECONDARY,
            ['bg-danger']: color === ColorE.DANGER,
            ['bg-warning']: color === ColorE.WARNING,
            ['bg-success']: color === ColorE.SUCCESS
          })}
        >
          {buttonText && !iconOnly && buttonText}
        </Button>
      )}
    </>
  );
};
