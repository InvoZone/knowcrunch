import type { ButtonProps } from '@mui/material/Button';
import { Button, Typography } from '@mui/material';
import CircleLoader from './CircleLoader';
import type { MouseEventHandler, ReactNode, ElementType, FC } from 'react';

type CustomBtnProps = {
  title: string | undefined;
  variant?: ButtonProps['variant'];
  txtVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'titleSmall'
    | 'titleMd'
    | 'titleLg'
    | 'titleSm'
    | 'subtitleLg'
    | 'subtitleSm'
    | 'body';
  color?: string;
  sx?: ButtonProps['sx'];
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | 'link';
  fontWeight?: number | string;
  name?: string;
  disabled?: boolean;
  btnColor?: ButtonProps['color'];
  loading?: boolean;
  component?: ElementType;
};

const CustomBtn: FC<CustomBtnProps> = ({
  title,
  variant = 'text',
  txtVariant = 'h6',
  color = 'tertiary',
  sx,
  onClick,
  onMouseEnter,
  onMouseLeave,
  startIcon,
  endIcon,
  type = 'button',
  fontWeight,
  name,
  disabled = false,
  btnColor,
  loading = false,
  component = 'button'
}) => {
  return (
    <Button
      component={component}
      type={type}
      variant={variant}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      color={btnColor}
      disableRipple={type === 'link'}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        height: 45,
        cursor: 'pointer',
        ...sx
      }}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      name={name}
      aria-label={title}
    >
      <Typography
        variant={txtVariant}
        color={color}
        fontWeight={fontWeight}
        display="flex"
        alignItems="center"
        gap={0.5}
        component="a"
      >
        {loading && <CircleLoader />} {loading ? 'Please wait...' : title}
      </Typography>
    </Button>
  );
};

export default CustomBtn;
