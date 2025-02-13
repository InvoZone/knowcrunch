import { Button, Typography } from "@mui/material";
import CircleLoader from "./circleLoader";

const CustomBtn = ({
    title,
    variant = "",
    txtVariant = "h6",
    color = "tertiary",
    sx,
    onClick,
    onMouseEnter = undefined,
    onMouseLeave = undefined,
    onMouseOver,
    startIcon = "",
    endIcon = "",
    type = "button",
    fontWeight = "",
    name = "",
    disabled = false,
    btnColor = "",
    loading = false
}) => {
    return (
        <Button
            type={type}
            variant={variant}
            onMouseOver={onMouseOver}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            color={btnColor}
            autoComplete="off"
            loadingPosition="start"
            sx={{
                borderRadius: 1.5,
                textTransform: "none",
                height: 45,
                cursor: "pointer",
                ...sx
            }}
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
            name={name}
        >
            <Typography variant={txtVariant} color={color} fontWeight={fontWeight} display={"flex"} alignItems="center" gap={0.5}>
                {loading && <CircleLoader />} {loading ? "Please wait..." : title}
            </Typography>
        </Button>
    );
};

export default CustomBtn;
