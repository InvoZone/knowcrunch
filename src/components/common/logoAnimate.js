"use client";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import * as styles from "./logoAnimate.module.scss";
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
            sx={{ padding: 0 }}
            className={styles.mainconatiner}
        >
            <Box
                className={styles.LogoAnimate}
                sx={{
                    padding: "4px 48px",
                    display: "flex",
                    background: "white",
                    alignItems: "center",
                    justifyContent: "start",
                    border: `1px solid ${neutral.neutral9}`,
                    borderRadius: "48px",
                }}
            >
                <Typography variant="body1" sx={{ width: "90px", color: base1.dark4 }}>
                    Trusted by
                </Typography>
                <Marquee 
                    play={play} 
                    speed={130} 
                    direction={direction} 
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
                        <Box key={index} sx={{ padding: "0 24px" }}>
                            <Image width={50} height={50} loading="lazy" src={item} alt={`logo-${index}`} />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Container>
    );
};

export default LogoAnimate;
