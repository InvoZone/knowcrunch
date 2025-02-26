"use client";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Box, Typography, useTheme, Container } from "@mui/material";

const LogoAnimate = () => {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;

    const [play, setPlay] = useState(false);
    const [direction, setDirection] = useState("");

    const handleMouseEnter = () => {
            if(direction === "" || direction === "right"){
                setDirection("left");
                setPlay(true);
            }
    };

    const onCycleComplete = () => {
        if(direction === "left"){
            setDirection("right");
            setPlay(true);
        }
        else{
            setDirection("");
            setPlay(false);
        }

    };

    return (
        <Container
            onMouseEnter={handleMouseEnter}
            maxWidth="lg"
            sx={{ padding: "0 !important", position: "relative", maxWidth:"1360px !important" }}
            aria-label="Logo animation container"
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
                    variant="titleMd"
                    sx={{ width: "90px", color: base1.dark4, lineHeight:"20px" }}
                >
                    Trusted by
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: {
                        xs: "4px 8px 4px 16px",
                        sm: "4px 48px",
                        md: "4px 48px 4px 60px",
                        lg: "4px 48px 4px 60px",
                        xl: "4px 48px 4px 75px",
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
                    style={{ paddingLeft: "40px", marginLeft: "40px", marginRight:"10px" }}
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
                        "/icons/volklogo.svg",
                        "/icons/ddlogo.svg",
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: {
                                    xs: "0 6px",
                                    sm: "0 16px",
                                    md: "0 20px",
                                    lg: "0 24px",
                                },
                            }}
                        >
                            <Image
                                width={50}
                                height={50}
                                loading="lazy"
                                src={item}
                                alt={`logo-${index}`}
                                aria-label={`Logo for ${item}`}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Container>
    );
};

export default LogoAnimate;
