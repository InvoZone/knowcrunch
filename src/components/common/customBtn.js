import { Button, Typography } from "@mui/material";

const CustomBtn = ({ title, variant = "", txtVariant = "h6", color = "tertiary", sx, onClick, onMouseEnter = undefined }) => {
    return (
        <Button onMouseEnter={onMouseEnter} variant={variant} sx={{ borderRadius: 1.5, textTransform: "none", height: 45, ...sx }} onClick={onClick}>
            <Typography variant={txtVariant} color={color}>{title}</Typography>
        </Button>
    );
};

export default CustomBtn;