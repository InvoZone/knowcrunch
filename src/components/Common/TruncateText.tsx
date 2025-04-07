import type { ElementType, FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import truncate from 'lodash/truncate';

interface TruncateTextProps {
  text: string;
  length?: number;
  variant?:
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
  sx?: object;
  component?: ElementType;
}

const TruncateText: FC<TruncateTextProps> = ({
  text,
  length = 20,
  variant = 'body',
  color = 'secondary.dark',
  sx = {},
  component = 'p'
}) => {
  const isTruncated = text.length > length;
  const truncatedText = truncate(text, { length, omission: '...' });

  return (
    <Tooltip title={isTruncated ? text : ''} arrow>
      <Typography
        variant={variant}
        color={color}
        sx={{
          cursor: isTruncated ? 'pointer' : 'default',
          whiteSpace: 'normal',
          ...sx
        }}
        aria-label={text}
        component={component}
      >
        {truncatedText}
      </Typography>
    </Tooltip>
  );
};

export default TruncateText;
