import { Button } from "@nextui-org/react";
import { ButtonIconI } from '@/app/_definitions/interfaces/_buttons'

const IconButton = ({
  buttonText,
  onClick,
  buttonIcon,
  iconOnly = false,
  radius,
  color,
  startIcon = false,
  endIcon = false,
  iconSize,
  testId = '',
}: ButtonIconI) => {
  const Icon = buttonIcon
  return (
    <>
      {(buttonIcon && startIcon && (endIcon === false)) &&
        <Button data-testid={testId} onClick={onClick} isIconOnly={iconOnly} color={color} radius={radius} startContent={<Icon size={iconSize} />}>
          {(buttonText && !iconOnly) && buttonText}
        </Button>
      }
      {(buttonIcon && endIcon && (startIcon === false)) &&
        <Button data-testid={testId} onClick={onClick} isIconOnly={iconOnly} color={color} radius={radius} endContent={<Icon size={iconSize} />}>
          {(buttonText && !iconOnly) && buttonText}
        </Button>
      }
    </>
  )
}

export default IconButton