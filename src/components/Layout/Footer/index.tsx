"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import FooterLinks from "./FooterNav";
import FooterLinksMobile from "./MobileFooterNav";

// Import social media icons
import appStore from "@/assets/footer/appStore.webp";
import googlePlay from "@/assets/footer/googlePlay.webp";
import facebook from "@/assets/footer/facebook.webp";
import instagram from "@/assets/footer/instagram.webp";
import linkedin from "@/assets/footer/linkedin.webp";
import youtube from "@/assets/footer/youtube.webp";
import tikTok from "@/assets/footer/tikTok.webp";
import medium from "@/assets/footer/medium.webp";
import pinterest from "@/assets/footer/pinterest.webp";
import spotify from "@/assets/footer/spotify.webp";
import x from "@/assets/footer/x.webp";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

interface FooterSection {
    title: string;
    links: string[];
}

// Define social media icons list
const socialIcons: { src: string; alt: string }[] = [
    { src: facebook as unknown as string, alt: "facebook" },
    { src: instagram as unknown as string, alt: "instagram" },
    { src: linkedin as unknown as string, alt: "linkedin" },
    { src: youtube as unknown as string, alt: "youtube" },
    { src: tikTok as unknown as string, alt: "tiktok" },
    { src: medium as unknown as string, alt: "medium" },
    { src: pinterest as unknown as string, alt: "pinterest" },
    { src: spotify as unknown as string, alt: "spotify" },
    { src: x as unknown as string, alt: "x" },
];

const Footer: React.FC = () => {
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
        <Box component="footer" className="centerX" sx={{
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
            backgroundColor: "primary.main",
            color: "secondary.main",
        }}>
            <Container sx={{ maxWidth: "1408px !important" }}>
                <Box
                    component="div"
                    pt={{ xs: 4, lg: 6 }}
                    pb={2}
                    px={{ xs: 0, md: 3 }}
                >
                    {/* Mobile Navigation Links */}
                    <Box component="nav" sx={{ display: { xs: "block", lg: "none" }, pb: { xs: 3, md: 5 } }}>
                        {footerData.map((section) => (
                            <FooterLinksMobile key={section.title} title={section.title} links={section.links} />
                        ))}
                    </Box>

                    <Box component="div" display="flex" justifyContent={{ xs: "center", md: "flex-start" }} gap={6} flexWrap="wrap">
                        {/* Newsletter Subscription Section */}
                        <Box component="div" sx={{ width: { xs: 352, md: 290 } }}>
                            <Typography variant="titleLg" component={"p"} pb={3}>Get our news</Typography>
                            <NewsletterForm />
                            <Typography variant="body1" pt={1}>
                                We respect your personal data. By subscribing, you agree that we can contact you according to our <Typography variant="body1" component="span" sx={{ color: "accents.bubble1", pl: "3px" }}>Data Privacy Policy</Typography>.
                            </Typography>
                        </Box>

                        {/* Footer Links for Desktop View */}
                        <Box component="nav" sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "space-between", gap: 4, width: 540 }}>
                            {footerData.map((section) => (
                                <FooterLinks key={section.title} title={section.title} links={section.links} />
                            ))}
                        </Box>

                        {/* App Download Section */}
                        <Box component="div"
                            sx={{
                                display: "flex", flexDirection: "column", gap: 2, width: { xs: "100%", md: 181 }, alignItems: { xs: "center", md: "flex-start" }
                            }}
                        >
                            <Typography variant="titleLg" component={"p"} >Download Knowcrunch</Typography>
                            <Image width={134} height={45} loading="lazy" src={appStore} alt="appstore" title={"appstore"} />
                            <Image width={134} height={45} loading="lazy" src={googlePlay} alt="googleplay" title={"googleplay"} />
                        </Box>
                    </Box>

                    {/* Footer Bottom Section */}
                    <Box
                        sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" }, pt: 4, borderBottom: "2px solid", borderColor: "base1.default" }}
                    >
                        <Typography variant="body1" pb={"14px"}>Knowcrunch Inc., 2035 Sunset Lake Road, Delaware, USA</Typography>
                    </Box>

                    <Box
                        sx={{ display: { xs: "block", md: "flex" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", pt: "14px" }}
                    >
                        <Typography variant="body1"
                            sx={{ textAlign: { xs: "center", md: "left" }, pb: { xs: 3, md: 0 } }}
                        >
                            Knowcrunch Inc. © 2024 All Rights Reserved
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap", px: { xs: 1, md: 0 } }}>
                            {socialIcons.map((icon) => (
                                <Image key={icon.alt} loading="lazy" src={icon.src} width={24} height={24} alt={icon.alt} title={icon.alt} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;