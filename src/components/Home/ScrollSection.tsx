import { Box, Container, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import ScrollBtn from "./ScrollBtns";
import CustomBtn from "../Common/CustomBtn";

interface ArrowPositionTypes {
    left?: { [key: string]: number | string } | string | number,
    top?: string | number,
    right?: { [key: string]: number | string } | string | number,
    bottom?: string | number
}

interface ScrollSectionProps {
    scrolAmount?: number | null;
    children: React.ReactNode;
    width?: { [key: string]: string };
    leftArrowPosition?: ArrowPositionTypes;
    rightArrowPosition?: ArrowPositionTypes;
    heading: string;
    px?: { [key: string]: number };
    py?: { [key: string]: number } | number;
    linkProps?: { title: string; pt?: number; pb?: number };
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
    scrolAmount = null,
    children,
    width,
    leftArrowPosition = { top: "44%", left: 10 },
    rightArrowPosition = { top: "44%", right: 10 },
    heading,
    px = { xs: 0, sm: 0, md: 3, lg: 3 },
    py = { xs: 4, md: 6 },
    linkProps = { title: "", pt: 2 },
}) => {
    const scrollRef = useRef<HTMLElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = (direction: string) => {
        const scrollAmount = scrolAmount ?? 644; // Adjust based on card width
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

            return () =>
                scrollContainer.removeEventListener("scroll", updateArrows);
        }
    }, []);

    return (
        <Box component='section' px={px} py={py}>
            <Container maxWidth="lg">
                <Typography
                    color="primary.main"
                    pb={3}
                    variant={"h2"}
                    component="h2"
                >
                    {heading}
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        maxWidth: "1360px !important",
                    }}
                >
                    {showLeftArrow && (
                        <ScrollBtn
                            onClick={() => handleScroll("left")}
                            src={"/icons/home/leftArrow.svg"}
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
                            width: width || {
                                xs: "calc(100% - 60px)",
                                md: "calc(100% - 150px)",
                                lg: "calc(100% - 40px)",
                            },
                        }}
                    >
                        {children}
                    </Box>

                    {showRightArrow && (
                        <ScrollBtn
                            onClick={() => handleScroll("right")}
                            src={"/icons/home/rightArrow.svg"}
                            alt={"right scroll button"}
                            rightArrowPosition={rightArrowPosition}
                        />
                    )}
                </Box>
                <Box
                    pt={linkProps?.pt}
                    pb={linkProps?.pb}
                    sx={{
                        display: linkProps?.title ? "flex" : "none",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                    }}
                >
                    <CustomBtn
                        color="link.main"
                        title={linkProps?.title}
                        txtVariant="h6"
                        sx={{ px: "20px" }}
                        variant="text"
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default ScrollSection;
