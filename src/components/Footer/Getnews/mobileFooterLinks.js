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
                sx={{
                    backgroundColor: "#0D1B2A",
                    border: "none",
                    boxShadow: "none",
                    borderBottom: "1px solid #3E3E3E",
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="h6"
                        sx={{ color: "white", fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#0D1B2A" }}>
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
