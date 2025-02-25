import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function About() {
    const [showMore, setShowMore] = useState(false); // State for showing more text

    const skills = [
        "Marketing strategy",
        "Social Media Management",
        "Data Analysis",
        "Photography",
        "Data Analysis",
        "Marketing strategy",
    ];

    const handleShowMore = () => {
        setShowMore(!showMore); // Toggle the state
    };
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ color: "base1.dark4", mb: 2 }}>
            Skills you’ll gain
            </Typography>
            <Box>
            <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                sx={{  gap: {xs: "8px", sm: "8px", md: "8px", lg :"16px"} }}
            >
                {skills.slice(0, showMore ? skills.length : 4).map((item, index) => (
                    <Box
                        sx={{
                            border: "1px solid",
                            borderColor:"base1.dark4",
                            padding: "4px 16px",
                            width: "auto",
                            height:"30px",
                            backgroundColor: "transparent",
                            borderRadius: "24px",
                        }}
                        key={index}
                    >
                        <Typography variant="titleMd" sx={{ width: "max-content", color:"base1.dark4" }}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Box>
            </Box>
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
