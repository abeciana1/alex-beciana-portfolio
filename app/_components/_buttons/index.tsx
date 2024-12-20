import { Button } from '@nextui-org/react';
import { ButtonIconI } from '@/app/_definitions/interfaces/_buttons';
import cx from 'classnames'
import { ColorE } from '@/app/_definitions/enums/_general'
import { useTheme } from 'next-themes';
import Colors from '@/app/_utils/color-lookup';

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
  textColor = ColorE.FORE,
  variant = "solid"
}: ButtonIconI) => {
  const { resolvedTheme } = useTheme();
  console.log({resolvedTheme})
  const Icon = buttonIcon;
  const iconStyle = {
    fill: Colors[resolvedTheme === 'light' ? 'light' : 'dark'][textColor]
  }
  // todo create utils object for color name lookup to get hex code
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
          endContent={<Icon size={iconSize} className={`text-${textColor}`} />}
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
