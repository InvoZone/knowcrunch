import { Box, Typography } from "@mui/material";

const ScrollAbleSection = ({
    title,
    children,
    variant = "h4",
    color = "base1.dark4"
}) => {
    return (
        <>
            <Typography variant={variant} color={color} pb={3}>{title}</Typography>
            <Box sx={{ overflowX: "auto", justifyContent: { md: "flex-start", lg: "center", scrollbarWidth: "none" }, display: "flex" }}>
                <Box component='div' width={1152} display={"flex"} gap={3}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default ScrollAbleSection;