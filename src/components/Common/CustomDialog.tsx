import type { FC, ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
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
          width // Responsive width based on screen size
        }
      }}
    >
      {/* Dialog content wrapper */}
      <Box
        position={'relative'}
        sx={{
          pt: pt ?? 4,
          pb: pb ?? 3,
          px: px ?? { xs: 3, lg: 4 } // Responsive padding
        }}
      >
        {/* Close button */}
        <CloseOutlined
          sx={{
            color: 'neutral.neutral1',
            height: 32,
            width: 31,
            position: 'absolute',
            right: 16,
            top: 16,
            cursor: 'pointer'
          }}
          onClick={handleClose}
        />

        {/* Render passed children content */}
        {children}
      </Box>
    </Dialog>
  );
};

export default CustomDialog;
