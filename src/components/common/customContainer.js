import React from "react";
import { Container } from "@mui/material";

const CustomContainer = () => {
    return (
        <Container
            sx={{
                padding: {
                    xs: 2, // for small screens
                    sm: 2, // for medium screens
                    lg: 6, // for large screens
                },
                width: "100%",
                maxWidth: "1360px"
            }}
        >
            Responsive content here
        </Container>
    );
};

export default CustomContainer;
