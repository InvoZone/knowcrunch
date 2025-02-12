"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    TextField,
    MenuItem,
    Select,
    Container,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Grid2";
import googleplayimage from "@/assets/footer/googleplay.svg";
import appstoreimage from "@/assets/footer/appstore.svg";
import Facebook from "@/assets/footer/Facebook.svg";
import Instagram from "@/assets/footer/Instagram.svg";
import Linkedin from "@/assets/footer/Linkedin.svg";
import Medium from "@/assets/footer/Medium.svg";
import Pinterest from "@/assets/footer/Pinterest.svg";
import Spotify from "@/assets/footer/Spotify.svg";
import TikTok from "@/assets/footer/TikTok.svg";
import X from "@/assets/footer/X.svg";
import Youtube from "@/assets/footer/Youtube.svg";
import Image from "next/image";
import "./footer.scss";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import CrunchCard from "../Footer/downloadCrunch/downloadcruch";
import FooterLinks from "../Footer/Getnews/footerLinks";
import FooterLinksMobile from "../Footer/Getnews/mobileFooterLinks";

const Footer = () => {
    const theme = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 991);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                padding: "48px 35px 16px",
                borderTopLeftRadius: "32px",
                borderTopRightRadius: "32px",
            }}
        >
            <Box className="globalCotainer">
                <Grid2
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 3,
                    }}
                >
                    {isMobile && (
                        <>
                            <Grid2
                                item="true"
                                md={12}
                                lg={12}
                                sm={12}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <FooterLinksMobile
                                    title="About Us"
                                    links={[
                                        "E- Learning Courses",
                                        "Classroom Courses",
                                        "Corporate Training",
                                        "Brands that Trust Us",
                                        "Instructors",
                                        "Blog",
                                    ]}
                                />
                            </Grid2>
                            <Grid2
                                item="true"
                                md={12}
                                lg={12}
                                sm={12}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <FooterLinksMobile
                                    title="Our Students"
                                    links={[
                                        "Questions & Answers",
                                        "Official Alumni Group",
                                        "Digital Nation Group",
                                    ]}
                                />
                            </Grid2>
                            <Grid2
                                item="true"
                                md={12}
                                lg={12}
                                sm={12}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <FooterLinksMobile
                                    title="Legal"
                                    links={[
                                        "Terms & Conditions",
                                        "Cookies Policy",
                                        "Data Privacy Policy",
                                        "Contact Us",
                                    ]}
                                />
                            </Grid2>
                        </>
                    )}
                    <Box item="true" lg={12} className="mainFooter">
                        <Grid2 item="true" lg={3} className="mainFooterForm">
                            <Typography variant="h6">Get our news</Typography>
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
                                        variant="footerInput"
                                        margin="normal"
                                    />
                                </Box>
                                <Box>
                                    <input
                                        className="input_style"
                                        placeholder="Surname"
                                        label="Surname"
                                        margin="normal"
                                    />
                                </Box>
                                <Box>
                                    <input
                                        className="input_style"
                                        placeholder="E-mail"
                                        label="E-mail"
                                        margin="normal"
                                    />
                                </Box>
                                <Box className="input_style">
                                    <PhoneInput
                                        placeholder="Mobile number"
                                        country={"us"}
                                    />
                                </Box>
                            </Box>
                            <Button
                                className="widthBtn"
                                variant="contained"
                                sx={{
                                    marginTop: "10px",
                                    backgroundColor: "#3366CC",
                                    color: "white",
                                    borderRadius: "8px",
                                }}
                            >
                                <Typography variant="h6">Subscribe</Typography>
                            </Button>
                            <Typography
                                variant="body1"
                                sx={{ marginTop: "10px", maxWidth: "290px" }}
                            >
                                We respect your personal data. By subscribing,
                                you agree that we can contact you to share our
                                news or for marketing purposes according to our
                                <span
                                    style={{
                                        color: "#3366CC",
                                        marginLeft: "3px",
                                    }}
                                >
                                    Data Privacy Policy
                                </span>
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
                                gap: "30px",
                            }}
                        >
                            <FooterLinks
                                title="About Us"
                                links={[
                                    "E- Learning Courses",
                                    "Classroom Courses",
                                    "Corporate Training",
                                    "Brands that Trust Us",
                                    "Instructors",
                                    "Blog",
                                ]}
                            />
                            <FooterLinks
                                title="Our Students"
                                links={[
                                    "Questions & Answers",
                                    "Official Alumni Group",
                                    "Digital Nation Group",
                                ]}
                            />
                            <FooterLinks
                                title="Legal"
                                links={[
                                    "Terms & Conditions",
                                    "Cookies Policy",
                                    "Data Privacy Policy",
                                    "Contact Us",
                                ]}
                            />
                        </Grid2>

                        <Grid2 item="true" lg={3}>
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
                            <Image
                                loading="lazy"
                                src={Facebook}
                                width={24}
                                height={24}
                                alt={"Facebook"}
                            />
                            <Image
                                loading="lazy"
                                src={Instagram}
                                width={24}
                                height={24}
                                alt={"Instagram"}
                            />
                            <Image
                                loading="lazy"
                                src={Linkedin}
                                width={24}
                                height={24}
                                alt={"Linkedin"}
                            />
                            <Image
                                loading="lazy"
                                src={Youtube}
                                width={24}
                                height={24}
                                alt={"Youtube"}
                            />
                            <Image
                                loading="lazy"
                                src={TikTok}
                                width={24}
                                height={24}
                                alt={"TikTok"}
                            />
                            <Image
                                loading="lazy"
                                src={Medium}
                                width={24}
                                height={24}
                                alt={"Medium"}
                            />
                            <Image
                                loading="lazy"
                                src={Pinterest}
                                width={24}
                                height={24}
                                alt={"Pinterest"}
                            />
                            <Image
                                loading="lazy"
                                src={Spotify}
                                width={24}
                                height={24}
                                alt={"Spotify"}
                            />
                            <Image
                                loading="lazy"
                                src={X}
                                width={24}
                                height={24}
                                alt={"X"}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
