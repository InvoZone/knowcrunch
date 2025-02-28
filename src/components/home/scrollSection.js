import { Box, Container } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import ScrollBtn from "./scrollBtn";

const ScrollSection = ({ children }) => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = (direction) => {
        const scrollAmount = 644; // Adjust based on card width
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
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
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
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center", maxWidth:"1360px !important" }}>
            {showLeftArrow && (
                <ScrollBtn onClick={() => handleScroll("left")} src={"/icons/leftArrow.svg"} alt={"left scroll button"} />
            )}

            <Box
                ref={scrollRef}
                sx={{
                    overflowX: "auto",
                    display: "flex",
                    gap: 3,
                    scrollBehavior: "smooth", // Enables smooth scrolling
                    whiteSpace: "nowrap",
                    "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
                    width: { xs: "calc(100% - 60px)", md: "calc(100% - 150px)", lg: "calc(100% - 40px)" },
                }}
            >
                {children}
            </Box>

            {showRightArrow && (
                <ScrollBtn onClick={() => handleScroll("right")} src={"/icons/rightArrow.svg"} alt={"right scroll button"} isRight={true} />
            )}
        </Box>
    );
};

export default ScrollSection;
