"use client";
import React, { useState, useRef } from "react";
import * as styles from "./selectableLinks.module.scss"; // Import CSS for styling
import { Box, Typography } from "@mui/material";
import ScrollBtn from "./scrollBtn";

const marketingOptions = [
    { id: "content-marketing", name: "Content marketing" },
    { id: "social-media-marketing", name: "Social media marketing" },
    { id: "social-engine-optimization", name: "Social engine optimization" },
    { id: "influencer-marketing", name: "Influencer marketing" },
    { id: "performance-marketing", name: "Performance marketing" },
    { id: "email-mobile-marketing", name: "Email & mobile marketing" },
    { id: "social-engine-optimization-2", name: "Social engine optimization" },
    { id: "marketing", name: "Markeeting" },
];

const SelectableLinks = () => {
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
                <ScrollBtn leftArrowPosition={{ top: "3px", left: { xs: "-15px", md: "-15px", lg: "-25px" } }} onClick={() => scrollToStart()} src={"/icons/leftArrow.svg"} alt={"left scroll button"} />
            )}

            <Box
                ref={scrollRef}
                display="flex"
                flexDirection="row"
                overflow="hidden"
                sx={{ gap: "8px" }}
            >
                {marketingOptions.map((item, index) => (
                    <Box
                        sx={{
                            color:
                                index === selected
                                    ? "base2.light6"
                                    : "neutral.neutral1",
                            border: "1px solid",
                            borderColor: "neutral.neutral1",
                            display: "flex"
                        }}
                        key={item?.id}
                        className={`${styles.logoItem} ${index === selected ? styles.selected : ""}`}
                        onClick={() => handleSelect(index)}
                        aria-label={`Select ${item?.name}`}
                    >
                        <Typography variant="titleSmall" sx={{ width: "max-content" }}>
                            {item?.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {isAtStart && (
                <ScrollBtn rightArrowPosition={{ top: "3px", right: { xs: "-15px", md: "-15px", lg: "-25px" } }} onClick={() => scrollToEnd()} src={"/icons/rightArrow.svg"} alt={"right scroll button"} isRight={true} />
            )}
        </Box>
    );
};

export default SelectableLinks;
