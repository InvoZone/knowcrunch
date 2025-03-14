import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import Image from "next/image";

// Define the props for the FooterAccordion component
interface FooterAccordionProps {
    title: string; // Title of the accordion section
    links: string[]; // List of links to be displayed inside the accordion
}

// FooterAccordion component
const FooterAccordion: React.FC<FooterAccordionProps> = ({ title, links }) => {
    // State to track whether the accordion is expanded or collapsed
    const [expanded, setExpanded] = useState<boolean>(false);

    // Toggle the expanded state when the accordion header is clicked
    const handleChange = (): void => {
        setExpanded((prev) => !prev);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 1 }}>
            {/* Accordion Component */}
            <Accordion
                expanded={expanded}
                onChange={handleChange}
                aria-label={`Accordion for ${title}`}
                sx={{
                    "backgroundColor": "transparent",
                    "border": "none",
                    "boxShadow": "none",
                    "&:last-of-type": {
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                    "&.Mui-expanded:last-of-type": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                {/* Accordion Header */}
                <AccordionSummary
                    expandIcon={
                        <Image
                            loading="lazy"
                            src="/icons/expandmore.svg"
                            width={24}
                            height={24}
                            alt="Expand More"
                            title="Expand More"
                        />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    aria-label={`Expand ${title}`}
                    sx={{
                        "borderBottom": "1px solid",
                        "borderColor": "base1.dark2",
                        "padding": 0,
                        "backgroundColor": "transparent",
                        "minHeight": "40px !important",
                        "& .MuiAccordionSummary-content": {
                            margin: "8px 0 !important",
                        },
                    }}
                >
                    {/* Accordion Title */}
                    <Typography
                        variant="titleLg"
                        component="li"
                        sx={{
                            color: "secondary.main",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            listStyleType: "none",
                        }}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>

                {/* Accordion Content */}
                <AccordionDetails
                    aria-label={`Details for ${title}`}
                    sx={{
                        backgroundColor: "transparent",
                        padding: "8px 0",
                    }}
                >
                    {/* List of links inside the accordion */}
                    <Box component="ul">
                        {links.map((link) => (
                            <Typography
                                key={link}
                                component="li"
                                variant="titleMd"
                                color="secondary.main"
                                sx={{ listStyleType: "none" }}
                                pb={1}
                            >
                                {link}
                            </Typography>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FooterAccordion;
