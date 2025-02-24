"use client";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Box, Typography, useTheme, Container } from "@mui/material";

const LogoAnimate = () => {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;

    const [play, setPlay] = useState(false);
    const [direction, setDirection] = useState("left");

    const handleMouseEnter = () => {
        setDirection("left");
        setPlay(true);
    };

    const handleMouseLeave = () => {
        setDirection("right");
        setPlay(true);
    };

    const onCycleComplete = () => {
        setPlay(false);
    };

    return (
        <Container
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            maxWidth="lg"
            sx={{ padding: "0 !important", position: "relative" }}
        >
            <Box
                sx={{
                    width: "82px",
                    height: "36px",
                    background:
                        "linear-gradient(90deg, rgb(255 255 255) 87%, rgba(255, 255, 255, 0.563484768907563) 100%)",
                    position: "absolute",
                    left: {
                        xs: "30px",
                        sm: "48px",
                        md: "50px",
                        lg: "60px",
                    },
                    top: "12px",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="body"
                    sx={{ width: "90px", color: base1.dark4 }}
                >
                    Trusted by
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: {
                        xs: "4px 8px 4px 48px",
                        sm: "4px 24px",
                        md: "4px 48px",
                        lg: "4px 48px",
                    },
                    display: "flex",
                    background: "white",
                    alignItems: "center",
                    justifyContent: "start",
                    border: `1px solid ${neutral.neutral9}`,
                    borderRadius: "48px",
                }}
            >
                <Marquee
                    play={play}
                    speed={130}
                    direction={direction}
                    style={{ paddingLeft: "24px", marginLeft: "40px" }}
                    onCycleComplete={onCycleComplete}
                    // loop={1} // Stop after reaching the end
                >
                    {[
                        "/icons/skodalogo.svg",
                        "/icons/emiratelogo.svg",
                        "/icons/audilogo.svg",
                        "/icons/ingrouplogo.svg",
                        "/icons/volklogo.svg",
                        "/icons/ddlogo.svg",
                        "/icons/knowcrunchlogo.svg",
                        "/icons/pepsilogo.svg",
                        "/icons/sarantislogo.svg",
                        "/icons/trainedlogo.svg",
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: {
                                    xs: "0 4px",
                                    sm: "0 8px",
                                    md: "0 16px",
                                    lg: "0 16px",
                                },
                                ml: 2,
                            }}
                        >
                            <Image
                                width={50}
                                height={50}
                                loading="lazy"
                                src={item}
                                alt={`logo-${index}`}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Container>
    );
};

export default LogoAnimate;
