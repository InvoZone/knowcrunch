// Import necessary dependencies from React and Material-UI
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

/**
 * CustomDialog component provides a reusable dialog/modal with consistent styling
 * @param {Object} props - Component props
 * @param {boolean} props.open - Controls dialog open/closed state
 * @param {Function} props.handleClose - Function to handle dialog close
 * @param {React.ReactNode} props.children - Content to render inside dialog
 * @param {boolean} props.shouldCloseOutside - Whether clicking outside closes dialog
 */
export default function CustomDialog({
    open,
    handleClose,
    children,
    shouldCloseOutside = true,
}) {
    return (
        <Dialog
            open={open}
            onClose={shouldCloseOutside && handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: 2,
                    width: { xs: 360, lg: 480 }, // Responsive width based on screen size
                },
            }}
        >
            {/* Dialog content wrapper */}
            <Box
                component="div"
                position={"relative"}
                sx={{
                    pt: 3,
                    pb: 3,
                    px: { xs: 3, lg: 4 }, // Responsive padding
                }}
            >
                {/* Close button */}
                <CloseOutlined
                    sx={{
                        color: "neutral.neutral1",
                        height: 18,
                        width: 18,
                        position: "absolute",
                        right: 16,
                        top: 16,
                        cursor: "pointer",
                    }}
                    onClick={handleClose}
                />

                {/* Render passed children content */}
                {children}
            </Box>
        </Dialog>
    );
}
