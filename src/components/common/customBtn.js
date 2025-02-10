import { Button, Typography } from "@mui/material";

const CustomBtn = ({ title, variant = "", txtVariant = "h6", color = "tertiary", sx, onClick, onMouseEnter = undefined, onMouseLeave = undefined, onMouseOver }) => {
    return (
        <Button variant={variant} onMouseOver={onMouseOver} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={{ borderRadius: 1.5, textTransform: "none", height: 45, cursor: "pointer", ...sx }} onClick={onClick}>
            <Typography variant={txtVariant} color={color}>{title}</Typography>
        </Button>
    );
};

export default CustomBtn;