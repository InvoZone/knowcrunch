"use client";
import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import ScrollBtn from "./ScrollBtns";

interface MarketingOption {
    id: string;
    name: string;
}

const marketingOptions: MarketingOption[] = [
    { id: "content-marketing", name: "Content marketing" },
    { id: "social-media-marketing", name: "Social media marketing" },
    { id: "social-engine-optimization", name: "Social engine optimization" },
    { id: "influencer-marketing", name: "Influencer marketing" },
    { id: "performance-marketing", name: "Performance marketing" },
    { id: "email-mobile-marketing", name: "Email & mobile marketing" },
    { id: "social-engine-optimization-2", name: "Social engine optimization" },
    { id: "marketing", name: "Markeeting" },
];

const SelectableLinks: React.FC = () => {
    const scrollRef = useRef<HTMLElement>(null); // Reference for scrolling
    const [selected, setSelected] = useState<number>(0);
    const [isAtStart, setIsAtStart] = useState<boolean>(true);

    const handleSelect = (index: number) => {
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
                <ScrollBtn
                    leftArrowPosition={{
                        top: "3px",
                        left: { xs: "-15px", md: "-15px", lg: "-25px" },
                    }}
                    onClick={() => scrollToStart()}
                    src={"/icons/home/leftArrow.svg"}
                    alt={"left scroll button"}
                />
            )}

            <Box
                ref={scrollRef}
                display="flex"
                flexDirection="row"
                sx={{
                    "gap": "8px",
                    "overflowX": "auto",
                    "scrollBehavior": "smooth", // Enables smooth scrolling
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {marketingOptions.map((item, index) => (
                    <Box
                        sx={{
                            color: index === selected ? "base2.light6" : "neutral.neutral1",
                            border: "1px solid",
                            borderColor: "neutral.neutral1",
                            display: "flex",
                            padding: "10px 16px",
                            cursor: "pointer",
                            borderRadius: 8,
                            width: "auto",
                            height: "45px",
                            backgroundColor:
                                index === selected ? "neutral.neutral1" : "transparent",
                        }}
                        key={item?.id}
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
                <ScrollBtn
                    rightArrowPosition={{
                        top: "3px",
                        right: { xs: "-15px", md: "-15px", lg: "-25px" },
                    }}
                    onClick={() => scrollToEnd()}
                    src={"/icons/home/rightArrow.svg"}
                    alt={"right scroll button"}
                />
            )}
        </Box>
    );
};

export default SelectableLinks;
