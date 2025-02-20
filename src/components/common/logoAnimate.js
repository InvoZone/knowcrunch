"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import Marquee
import * as styles from "./logoAnimate.module.scss"; // Import CSS for styling
import { Box, Typography, useTheme, Container } from "@mui/material";

const LogoAnimate = () => {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;

    return (
        <Container
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
                <Typography
                    variant="body"
                    sx={{ width: "150px", color: base1.dark4 }}
                >
                    Trusted by
                </Typography>
                <Marquee>
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
                        <Box key={item?.id || index} sx={{ padding: "0 24px" }}>
                            <Image
                                width={50}
                                height={50}
                                loading="lazy"
                                src={item}
                                alt={"item"}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Container>
    );
};

export default LogoAnimate;
