import React from "react";
import { Box, Toolbar } from "@mui/material";

const PageContainer = ({ children }) => {
    return (
        <>
            <Toolbar />
            <Box
                mt={{ xs: 3, sm: 2, md: 2, lg: 2 }}
                py={{ xs: 4, sm: 4, md: 4, lg: 6 }}
                px={{ xs: 0, sm: 0, md: 3, lg: 3 }}
            >

                {children}
            </Box>
        </>
    );
};

export default PageContainer;
