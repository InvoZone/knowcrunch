"use client";
import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import FooterLinks from "./FooterNav";
import FooterLinksMobile from "./MobileFooterNav";

// Import social media icons
import appStore from "@/assets/footer/appStore.webp";
import googlePlay from "@/assets/footer/googlePlay.webp";
import facebook from "@/assets/footer/facebook.webp";
import facbookHover from "@/assets/footer/fbbbb.svg";
import instagram from "@/assets/footer/instagram.webp";
import instagramHover from "@/assets/footer/instaHover.svg";
import linkedin from "@/assets/footer/linkedin.webp";
import linkedinHover from "@/assets/footer/LinkedinHover.svg";
import youtube from "@/assets/footer/youtube.webp";
import youtubeHover from "@/assets/footer/YoutubeHove.svg";
import tikTok from "@/assets/footer/tikTok.webp";
import tikTokHover from "@/assets/footer/tiktokHover.svg";
import medium from "@/assets/footer/medium.webp";
import mediumHover from "@/assets/footer/mediumHover.svg";
import pinterest from "@/assets/footer/pinterest.webp";
import pinterestHover from "@/assets/footer/pinterestHover.svg";
import spotify from "@/assets/footer/spotify.webp";
import spotifyHover from "@/assets/footer/spotifyHover.svg";
import x from "@/assets/footer/x.webp";
import xHover from "@/assets/footer/XHoverr.svg";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

interface FooterSection {
    title: string;
    links: string[];
}

// Define social media icons list
const socialIcons: { src: string; alt: string; hoverSrc?: string; transition?: string }[] = [
    {
        src: facebook as unknown as string,
        alt: "facebook",
        hoverSrc: facbookHover as unknown as string,
        transition: "300ms",
    },
    {
        src: instagram as unknown as string,
        alt: "instagram",
        hoverSrc: instagramHover as unknown as string,
        transition: "300ms",
    },
    {
        src: linkedin as unknown as string,
        alt: "linkedin",
        hoverSrc: linkedinHover as unknown as string,
        transition: "300ms",
    },
    {
        src: youtube as unknown as string,
        alt: "youtube",
        hoverSrc: youtubeHover as unknown as string,
        transition: "300ms",
    },
    {
        src: tikTok as unknown as string,
        alt: "tiktok",
        hoverSrc: tikTokHover as unknown as string,
        transition: "300ms",
    },
    {
        src: medium as unknown as string,
        alt: "medium",
        hoverSrc: mediumHover as unknown as string,
        transition: "300ms",
    },
    {
        src: pinterest as unknown as string,
        alt: "pinterest",
        hoverSrc: pinterestHover as unknown as string,
        transition: "300ms",
    },
    {
        src: spotify as unknown as string,
        alt: "spotify",
        hoverSrc: spotifyHover as unknown as string,
        transition: "300ms",
    },
    {
        src: x as unknown as string,
        alt: "x",
        hoverSrc: xHover as unknown as string,
        transition: "300ms",
    },
];

const Footer: React.FC = () => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    // Footer links sections
    const footerData: FooterSection[] = [
        {
            title: "About Us",
            links: [
                "E-Learning Courses",
                "Classroom Courses",
                "Corporate Training",
                "Brands that Trust Us",
                "Instructors",
                "Blog",
            ],
        },
        {
            title: "Our Students",
            links: ["Questions & Answers", "Official Alumni Group", "Digital Nation Group"],
        },
        {
            title: "Legal",
            links: ["Terms & Conditions", "Cookies Policy", "Data Privacy Policy", "Contact Us"],
        },
    ];

    return (
        <Box
            component="footer"
            className="centerX"
            sx={{
                borderTopLeftRadius: "32px",
                borderTopRightRadius: "32px",
                backgroundColor: "primary.main",
                color: "secondary.main",
            }}
        >
            <Container sx={{ maxWidth: "1408px !important" }}>
                <Box
                    component="div"
                    pt={{ xs: 4, lg: 6 }}
                    pb={{ xs: 3, md: 2 }}
                    px={{ xs: 1, md: 3 }}
                >
                    {/* Mobile Navigation Links */}
                    <Box
                        component="nav"
                        sx={{ display: { xs: "block", lg: "none" }, pb: { xs: 3, md: 5 } }}
                    >
                        {footerData.map((section) => (
                            <FooterLinksMobile
                                key={section.title}
                                title={section.title}
                                links={section.links}
                            />
                        ))}
                    </Box>

                    <Box
                        component="div"
                        display="flex"
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        gap={6}
                        flexWrap="wrap"
                    >
                        {/* Newsletter Subscription Section */}
                        <Box component="div" sx={{ width: { xs: 352, md: 290 } }}>
                            <Typography variant="titleLg" component={"p"} pb={3}>
                                Get our news
                            </Typography>
                            <NewsletterForm />
                            <Typography variant="body1" pt={1}>
                                We respect your personal data. By subscribing, you agree that we can
                                contact you according to our{" "}
                                <Typography
                                    variant="body1"
                                    component="a"
                                    // sx={{ color: "accents.bubble1", pl: "3px", cursor: "pointer" }}
                                    sx={{
                                        "color": "accents.bubble1",
                                        "pl": "3px",
                                        "cursor": "pointer",
                                        "position": "relative",
                                        "textDecoration": "none",
                                        "&::after": {
                                            // eslint-disable-next-line quotes
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: -2, // Adjust position of underline
                                            width: "0%",
                                            height: "2px",
                                            backgroundColor: "currentColor", // Same as text color
                                            transition: "width 0.3s ease-in-out",
                                        },
                                        "&:hover::after": {
                                            width: "100%", // Expand underline on hover
                                        },
                                    }}
                                >
                                    Data Privacy Policy
                                </Typography>
                                .
                            </Typography>
                        </Box>

                        {/* Footer Links for Desktop View */}
                        <Box
                            component="nav"
                            sx={{
                                display: { xs: "none", lg: "flex" },
                                justifyContent: "space-between",
                                gap: 4,
                                width: 540,
                            }}
                        >
                            {footerData.map((section) => (
                                <FooterLinks
                                    key={section.title}
                                    title={section.title}
                                    links={section.links}
                                />
                            ))}
                        </Box>

                        {/* App Download Section */}
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                width: { xs: "100%", md: 181 },
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Typography variant="titleLg" component={"p"}>
                                Download Knowcrunch
                            </Typography>
                            <Image
                                width={134}
                                height={45}
                                loading="lazy"
                                src={appStore}
                                alt="appstore"
                                title={"appstore"}
                                style={{ cursor: "pointer" }}
                            />
                            <Image
                                width={134}
                                height={45}
                                loading="lazy"
                                src={googlePlay}
                                alt="googleplay"
                                title={"googleplay"}
                                style={{ cursor: "pointer" }}
                            />
                        </Box>
                    </Box>

                    {/* Footer Bottom Section */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", lg: "flex-end" },
                            pt: 4,
                            borderBottom: "2px solid",
                            borderColor: "base1.default",
                        }}
                    >
                        <Typography variant="body1" pb={"14px"}>
                            Knowcrunch Inc., 2035 Sunset Lake Road, Delaware, USA
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: "block", md: "flex" },
                            justifyContent: { xs: "center", md: "space-between" },
                            alignItems: "center",
                            pt: "14px",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ textAlign: { xs: "center", md: "left" }, pb: { xs: 3, md: 0 } }}
                        >
                            Knowcrunch Inc. © 2025 All Rights Reserved
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                justifyContent: "center",
                                flexWrap: "wrap",
                                px: { xs: 1, md: 0 },
                            }}
                        >
                            {socialIcons.map((icon) => (
                                <Image
                                    key={icon.alt}
                                    loading="lazy"
                                    src={
                                        hoveredIcon === icon.alt && icon.hoverSrc
                                            ? icon.hoverSrc
                                            : icon.src
                                    }
                                    width={24}
                                    height={24}
                                    alt={icon.alt}
                                    title={icon.alt}
                                    style={{
                                        cursor: "pointer",
                                        transition: `opacity ${icon.transition ?? "300ms"} ease-in-out`,
                                    }}
                                    onMouseEnter={() => setHoveredIcon(icon.alt)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
