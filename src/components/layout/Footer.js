"use client";
import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import "./footer.scss";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import CrunchCard from "../Footer/downloadCrunch/downloadcruch";
import FooterLinks from "../Footer/Getnews/footerLinks";
import FooterLinksMobile from "../Footer/Getnews/mobileFooterLinks";

const socialIcons = [
    { src: "/icons/Facebook.svg", alt: "Facebook" },
    { src: "/icons/Instagram.svg", alt: "Instagram" },
    { src: "/icons/Linkedin.svg", alt: "Linkedin" },
    { src: "/icons/Youtube.svg", alt: "Youtube" },
    { src: "/icons/TikTok.svg", alt: "TikTok" },
    { src: "/icons/Medium.svg", alt: "Medium" },
    { src: "/icons/Pinterest.svg", alt: "Pinterest" },
    { src: "/icons/Spotify.svg", alt: "Spotify" },
    { src: "/icons/X.svg", alt: "X" },
];

const Footer = () => {
    const isMed = useMediaQuery("(max-width: 1090px)");
    const footerData = [
        {
          title: "About Us",
          links: [
            "E- Learning Courses",
            "Classroom Courses",
            "Corporate Training",
            "Brands that Trust Us",
            "Instructors",
            "Blog",
          ],
        },
        {
          title: "Our Students",
          links: [
            "Questions & Answers",
            "Official Alumni Group",
            "Digital Nation Group",
          ],
        },
        {
          title: "Legal",
          links: [
            "Terms & Conditions",
            "Cookies Policy",
            "Data Privacy Policy",
            "Contact Us",
          ],
        },
      ];

    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                color: "secondary.main",
                padding: {xs:"32px 24px  24px 24px", md:"32px 48px  16px 48px", lg:"48px 48px 16px 48px"},
                borderTopLeftRadius: "32px",
                borderTopRightRadius: "32px",
            }}
        >
            <Box className="globalCotainer">
                <Grid2
                    className="SectionCotainer"
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 3,
                    }}
                >
                    {isMed && (
                        <>
                            {footerData.map((section, index) => (
                                <Grid2
                                    key={`link_${index}`}
                                    item="true"
                                    md={12}
                                    lg={12}
                                    sm={12}
                                    sx={{ width: "100%" }}
                                >
                                    <FooterLinksMobile title={section.title} links={section.links} />
                                </Grid2>
                                ))}
                        </>
                    )}
                    <Box item="true" lg={12} className="mainFooter">
                        <Grid2 item="true" lg={3} className="mainFooterForm">
                            <Typography variant="titleLg" component={"p"}>Get our news</Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    mt: 3,
                                }}
                            >
                                <Box>
                                    <input
                                        className="input_style"
                                        placeholder="First name"
                                        label="First name"
                                        aria-label="First name"
                                    />
                                </Box>
                                <Box>
                                    <input
                                        className="input_style"
                                        placeholder="Surname"
                                        label="Surname"
                                        aria-label="Surname"
                                    />
                                </Box>
                                <Box>
                                    <input
                                        className="input_style"
                                        placeholder="E-mail"
                                        label="E-mail"
                                        aria-label="Email"
                                    />
                                </Box>
                                <Box className="input_style">
                                    <PhoneInput
                                        placeholder="Mobile number"
                                        country={"us"}
                                        aria-label="Mobile number"
                                    />
                                </Box>
                            </Box>
                            <Button
                                className="widthBtn"
                                variant="contained"
                                sx={{
                                    marginTop: "10px",
                                    backgroundColor: "base1.default",
                                    color: "secondary.main",
                                    borderRadius: "8px",
                                }}
                                aria-label="Subscribe"
                            >
                                <Typography variant="h6" component={"p"}>Subscribe</Typography>
                            </Button>
                            <Typography
                                variant="body1"
                                sx={{ marginTop: "10px", maxWidth: "290px" }}
                            >
                                We respect your personal data. By subscribing,
                                you agree that we can contact you to share our
                                news or for marketing purposes according to our
                                <Typography
                                    variant="body1"
                                    component={"span"}
                                    sx={{ color: "accents.bubble1", pl: "3px" }}
                                >
                                    Data Privacy Policy
                                </Typography>
                                .
                            </Typography>
                        </Grid2>
                        <Grid2
                            className="FooterLinks"
                            item="true"
                            lg={6}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "32px",
                            }}
                        >
                                {footerData.map((section, index) => (
                                    <FooterLinks key={`footer_${index}`} title={section.title} links={section.links} />
                                ))}
                        </Grid2>

                        <Grid2 item="true" lg={3} className="downloadKnow">
                            <CrunchCard />
                        </Grid2>
                    </Box>
                </Grid2>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "13px",
                    }}
                >
                    <Box className="sunset">
                        <Typography variant="body1">
                            KnowCrunch Inc., 2035 Sunset Lake Road, Delaware,
                            USA
                        </Typography>
                    </Box>
                    <Box className="footerRights">
                        <Typography variant="body1">
                            Knowcrunch Inc. © 2024 All Rights Reserved
                        </Typography>
                        <Box sx={{ display: "flex", gap: "17px" }}>
                            {socialIcons.map((icon, index) => (
                                <Image
                                    key={`img_${index}`}
                                    loading="lazy"
                                    src={icon.src}
                                    width={24}
                                    height={24}
                                    alt={icon.alt}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
