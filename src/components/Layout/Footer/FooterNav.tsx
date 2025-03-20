import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import "./Footer.css";

// Define the props for the FooterLinks component
interface FooterLinksProps {
    title: string; // Title of the footer links section
    links: string[]; // Array of links to be displayed in the footer
}

// FooterLinks component
const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
    return (
        <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1, width: 160 }}
            aria-label="Footer links section"
            component={"ul"}
        >
            <Typography
                variant="titleLg"
                sx={{
                    mb: 1.5,
                    listStyleType: "none",
                }}
                aria-label="Section title"
                component={"li"}
            >
                {title}
            </Typography>
            {links.map((link) => (
                <Typography
                    key={link}
                    sx={{
                        listStyleType: "none",
                    }}
                    variant="titleMd"
                    aria-label={`Link to ${link}`}
                    component={"li"}
                >
                    <Link
                        href="/"
                        style={{
                            position: "relative",
                            textDecoration: "none",
                            color: "white",
                            paddingBottom: "2px",
                        }}
                        className="hover-underline"
                    >
                        {link}
                    </Link>
                </Typography>
            ))}
        </Box>
    );
};

export default FooterLinks;
