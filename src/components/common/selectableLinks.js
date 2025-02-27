"use client";
import React, { useState, useRef } from "react";
import * as styles from "./selectableLinks.module.scss"; // Import CSS for styling
import { Box, Typography } from "@mui/material";
import ScrollBtn from "../home/scrollBtn";

const links = () => {
    const [selected, setSelected] = useState(0);
    const scrollRef = useRef(null); // Reference for scrolling
    const [isAtStart, setIsAtStart] = useState(true);

    const handleSelect = (index) => {
        setSelected(index);
    };

    const scrollToEnd = () => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: scrollWidth * 2, behavior: "smooth" }); // Scroll to the end faster
            setIsAtStart(false);
        }
    };

    const scrollToStart = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Scroll back to the start position
            setIsAtStart(true);
        }
    };

    return (
        <Box position="relative">
            {!isAtStart && (
                <ScrollBtn isCustomTop={2} isCustomLeft={-15} onClick={() => scrollToStart()} src={"/icons/leftArrow.svg"} alt={"left scroll button"} />
            )}

            <Box
                ref={scrollRef}
                display="flex"
                flexDirection="row"
                overflow="hidden"
                sx={{ gap: "8px" }}
            >
                {[
                    "Content marketing",
                    "Social media marketing",
                    "Social engine optimization",
                    "Influencer marketing",
                    "Performance marketing",
                    "Email & mobile marketing",
                    "Social engine optimization",
                    "Markeeting",
                ].map((item, index) => (
                    <Box
                        sx={{
                            color:
                                index === selected
                                    ? "base2.light6"
                                    : "neutral.neutral1",
                            border: "1px solid",
                            borderColor:"neutral.neutral1",
                            display:"flex"
                        }}
                        key={index}
                        className={`${styles.logoItem} ${index === selected ? styles.selected : ""}`}
                        onClick={() => handleSelect(index)}
                        aria-label={`Select ${item}`}
                    >
                        <Typography variant="titleSmall" sx={{ width: "max-content" }}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {isAtStart && (
                <ScrollBtn isCustomTop={2} isCustomRight={-15} onClick={() => scrollToEnd()} src={"/icons/rightArrow.svg"} alt={"right scroll button"} isRight={true} />
            )}
        </Box>
    );
};

export default links;
