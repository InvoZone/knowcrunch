// src/components/layout/FooterAccordion.js
import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid2,
} from "@mui/material";
import Image from "next/image";
import "../footer.scss";

const FooterAccordion = ({ title, links }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid2
            item="true"
            lg={12}
            sx={{ display: "flex", flexDirection: "column", gap: "7px" }}
            className="accordLinks"
        >
            <Accordion
                expanded={expanded}
                onChange={handleChange}
                aria-label={`Accordion for ${title}`}
                sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
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
                <AccordionSummary
                    expandIcon={<Image loading="lazy" src={"/icons/expandmore.svg"} width={24} height={24} alt={"expandmore"} sx={{ color: "secondary.main" }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    aria-label={`Expand ${title}`}
                    sx={{
                        borderBottom: "1px solid",
                        borderColor:"base1.dark2",
                        padding: 0,
                        backgroundColor: "transparent",
                        minHeight:"40px !important"
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "secondary.main",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                        }}
                        component={"p"}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    aria-label={`Details for ${title}`}
                    sx={{
                        backgroundColor: "transparent",
                        padding: "8px 0",
                    }}
                >
                    {links.map((link, index) => (
                        <Typography key={link?.id || index} variant="titleMd" color="secondary.main" component={"p"} pb={1}>
                            {link}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Grid2>
    );
};

export default FooterAccordion;
