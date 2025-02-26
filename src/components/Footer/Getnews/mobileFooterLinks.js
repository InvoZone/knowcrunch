// src/components/layout/FooterAccordion.js
import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid2,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    aria-label={`Expand ${title}`}
                    sx={{
                        borderBottom: "1px solid #244891",
                        padding: 0,
                        backgroundColor: "transparent",
                    }}
                    >
                    <Typography
                        variant="h6"
                        sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        }}
                    >
                        {title}
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    aria-label={`Details for ${title}`}
                    sx={{
                        backgroundColor: "transparent",
                        padding: "8px 0",
                        border: "1px solid #yourBorderColor",
                        "& div": {
                        fontSize: "16px",
                        fontWeight: 800,
                        padding: "4px",
                        lineHeight: "20px",
                        },
                    }}
                    >
                    {links.map((link, index) => (
                        <div key={link?.id || index} style={{ color: "white" }}>
                            {link}
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Grid2>
    );
};

export default FooterAccordion;
