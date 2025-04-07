import type { FC, ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

interface CustomDialogProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  shouldCloseOutside?: boolean;
  width?: { xs: number; sm: number; lg: number };
  pt?: number;
  pb?: number;
  px?: number;
}

const CustomDialog: FC<CustomDialogProps> = ({
  open,
  handleClose,
  children,
  shouldCloseOutside = true,
  width = { xs: 360, sm: 480, lg: 480 },
  pt,
  pb,
  px
}) => {
  return (
    <Dialog
      open={open}
      onClose={shouldCloseOutside ? handleClose : undefined}
      closeAfterTransition={false}
      maxWidth={'xl'}
      disableScrollLock
      sx={{
        'zIndex': 1500,
        '& .MuiDialog-paper': {
          borderRadius: 2,
          margin: '0px',
          width
        }
      }}
    >
      <Box
        position={'relative'}
        sx={{
          pt: pt ?? 4,
          pb: pb ?? 3,
          px: px ?? { xs: 3, lg: 4 }
        }}
      >
        <IconButton onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseOutlined
            sx={{
              color: 'neutral.neutral1',
              height: 32,
              width: 31,
            }}

          />
        </IconButton>

        {children}
      </Box>
    </Dialog>
  );
};

export default CustomDialog;
