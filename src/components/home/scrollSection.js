import { Box } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import ScrollBtn from "./scrollBtn";

const ScrollSection = ({scrolAmount = null ,children, width, leftArrowPosition = { top: "44%", left: 10 }, rightArrowPosition = { top: "44%", right: 10 } }) => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = (direction) => {
        const scrollAmount = scrolAmount ? (scrolAmount) : 644; // Adjust based on card width
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
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center", maxWidth: "1360px !important" }}>
            {showLeftArrow && (
                <ScrollBtn
                    onClick={() => handleScroll("left")}
                    src={"/icons/leftArrow.svg"}
                    alt={"left scroll button"}
                    leftArrowPosition={leftArrowPosition}
                />
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
                    width: width || { xs: "calc(100% - 60px)", md: "calc(100% - 150px)", lg: "calc(100% - 40px)" },
                }}
            >
                {children}
            </Box>

            {showRightArrow && (
                <ScrollBtn
                    onClick={() => handleScroll("right")}
                    src={"/icons/rightArrow.svg"}
                    alt={"right scroll button"}
                    rightArrowPosition={rightArrowPosition}
                    isRight={true}
                />
            )}
        </Box>
    );
};

export default ScrollSection;
