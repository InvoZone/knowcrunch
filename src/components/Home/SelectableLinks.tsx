"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    { id: "marketing", name: "Marketing" },
];

const SelectableLinks: React.FC = () => {
    const theme = useTheme();
    const scrollRef = useRef<HTMLElement>(null); // Reference for scrolling
    const [selected, setSelected] = useState<number>(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const isMed = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const xlg = useMediaQuery(theme.breakpoints.up("xl"));

    const handleSelect = (index: number) => {
        setSelected(index);
    };

    const handleScroll = (direction: string) => {
        const scrollAmount = xlg ? 400 : isMed ? 330 : 150; // Adjust based on card width
        if (scrollRef.current) {
            if (direction === "left") {
                scrollRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    const updateArrows = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);

            setShowRightArrow((scrollLeft + 1) < (scrollWidth - clientWidth));
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", updateArrows);
            updateArrows(); // Initial check

            return () => scrollContainer.removeEventListener("scroll", updateArrows);
        }
    }, []);

    return (
        <Box position="relative">
            {showLeftArrow && (
                <ScrollBtn
                    leftArrowPosition={{
                        top: "3px",
                        left: { xs: "-15px", md: "-15px", lg: "-25px" },
                    }}
                    onClick={() => handleScroll("left")}
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
                            width: "235px !important",
                            height: "45px",
                            backgroundColor:
                                index === selected ? "neutral.neutral1" : "transparent",
                        }}
                        key={item?.id}
                        onClick={() => handleSelect(index)}
                        aria-label={`Select ${item?.name}`}
                    >
                        <Typography variant="titleSmall" component={"h3"} sx={{ width: "max-content" }}>
                            {item?.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {showRightArrow && (
                <ScrollBtn
                    rightArrowPosition={{
                        top: "3px",
                        right: { xs: "-15px", md: "-15px", lg: "-25px" },
                    }}
                    onClick={() => handleScroll("right")}
                    src={"/icons/home/rightArrow.svg"}
                    alt={"right scroll button"}
                />
            )}
        </Box>
    );
};

export default SelectableLinks;
