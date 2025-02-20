import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function About() {
    const [showMore, setShowMore] = useState(false); // State for showing more text

    const handleShowMore = () => {
        setShowMore(!showMore); // Toggle the state
    };
    return (
        <Box sx={{ marginTop: "32px", mb: 3 }}>
            <Typography variant="h4" sx={{ color: "base1.dark4", mb: 2 }}>
                About
            </Typography>
            <Typography sx={{ color: "neutral.neutral1" }} variant="body">
                An advanced training program that offers a comprehensive and
                thorough approach to the discovery, evaluation, booking, and
                monitoring of influencers. This program is designed to equip you
                with all the necessary strategies, tools, and practices required
                to excel in this
                {showMore && " Here is the additional text that is revealed."}
            </Typography>
            <Typography
                variant="h6"
                sx={{ cursor: "pointer", mt: 2, color: "base1.default" }}
                onClick={handleShowMore}
            >
                {showMore ? "Show less" : "Show more"}
            </Typography>
        </Box>
    );
}

export default About;
