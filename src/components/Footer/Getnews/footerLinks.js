import React from "react";
import { Typography, Grid2 } from "@mui/material";

const FooterLinks = ({ title, links }) => {
    return (
        <Grid2
            item="true"
            lg={4}
            sx={{ display: "flex", flexDirection: "column", gap: "7px" }}
        >
            <Typography variant="titleLg" sx={{ mb: 1.5 }}>
                {title}
            </Typography>
            {links.map((link, index) => (
                <Typography key={link?.id || index} variant="titleMd">
                    {link}
                </Typography>
            ))}
        </Grid2>
    );
};

export default FooterLinks;
