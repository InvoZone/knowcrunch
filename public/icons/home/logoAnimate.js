"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Box, Typography, Container } from "@mui/material";

const logos = [
    { id: "skoda", src: "/icons/skodalogo.svg" },
    { id: "emirate", src: "/icons/emiratelogo.svg" },
    { id: "audi", src: "/icons/audilogo.svg" },
    { id: "ingroup", src: "/icons/ingrouplogo.svg" },
    { id: "volk", src: "/icons/volklogo.svg" },
    { id: "dd", src: "/icons/ddlogo.svg" },
    { id: "knowcrunch", src: "/icons/knowcrunchlogo.svg" },
    { id: "pepsi", src: "/icons/pepsilogo.svg" },
    { id: "sarantis", src: "/icons/sarantislogo.svg" },
    { id: "trained", src: "/icons/trainedlogo.svg" },
    { id: "volk2", src: "/icons/volklogo.svg" },
    { id: "dd2", src: "/icons/ddlogo.svg" },
];

const LogoAnimate = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{ padding: "0 !important", position: "relative", maxWidth: "1360px !important" }}
            aria-label="Logo animation container"
        >
            <Box
                sx={{
                    width: "82px",
                    height: "50px",
                    background:
                        "linear-gradient(90deg, rgb(255 255 255) 87%, rgba(255, 255, 255, 0.563484768907563) 100%)",
                    position: "absolute",
                    left: {
                        xs: "30px",
                        sm: "48px",
                        md: "50px",
                        lg: "60px",
                    },
                    top: "4px",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="titleMd"
                    sx={{ width: "90px", color: "base1.dark4", lineHeight: "20px" }}
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
                    backgroundColor: "secondary.main",
                    alignItems: "center",
                    justifyContent: "start",
                    border: "1px solid",
                    borderColor: "neutral.neutral9",
                    borderRadius: "48px",
                    height: "58px",
                }}
            >
                <Marquee
                    play={true}
                    speed={100}
                    direction={"left"}
                    loop={0}
                    style={{ paddingLeft: "40px", marginLeft: "40px", marginRight: "10px" }}
                    // onCycleComplete={onCycleComplete}
                >
                    {logos?.map((item) => (
                        <Box
                            key={item?.id}
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
                                src={item?.src}
                                alt={`logo-${item?.name}`}
                                aria-label={`Logo for ${item?.name}`}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Container>
    );
};

export default LogoAnimate;
