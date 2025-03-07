import React from "react";
import { Typography, Grid2 } from "@mui/material";
import "../footer.scss";

const FooterLinks = ({ title, links }) => {
    return (
        <Grid2
            item="true"
            className="footerLinkSection"
            size={4}
            sx={{ display: "flex", flexDirection: "column", gap: "7px" }}
            aria-label="Footer links section"
            component={"ul"}
        >
            <Typography
                variant="titleLg"
                sx={{ mb: 1.5, listStyleType: "none" }}
                aria-label="Section title"
                component={"li"}
            >
                {title}
            </Typography>
            {links.map((link, index) => (
                <Typography
                    key={link?.id || index}
                    sx={{ listStyleType: "none" }}
                    variant="titleMd"
                    aria-label={`Link to ${link}`}
                    component={"li"}
                >
                    {link}
                </Typography>
            ))}
        </Grid2>
    );
};

export default FooterLinks;
