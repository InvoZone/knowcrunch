"use client";

// Import necessary dependencies
import { Box, Container, Grid2, List, ListItem, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import img from "@/assets/account-pages/Profile.svg";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/utils/colors";
import OverView from "./overView";
import PersonalData from "./personalData";
import PageHeadingDesc from "../common/pageHeadingDesc";
import Password from "./password";
import PublicProfile from "./publicProfile";
import SideBar from "./sidebar";
/**
 * AccountPages Component
 * Main component for displaying course listings
 */
const AccountPages = () => {
    const theme = useTheme();
    const { neutral } = theme.palette;
    const [active, setActive] = useState(3);
    // Initialize translation functions
    const t1 = useTranslations("account-pages");

    const sideBarItems = [
        "Overview",
        "Personal Data",
        "Password",
        "Public Profile",
        "My Certifications",
        "Billing Information",
        "Subscriptions",,
        "Payments & invoices",
        "Payment methods",
    ];

    return (
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4, mt: 4 }}>
            {/* Sidebar */}
            <SideBar sideBarItems={sideBarItems} img={img} active={active} setActive={setActive} />

            {/* Course grid layout */}
            {active === 0 && <Grid2 justifyContent={"center"}>
                <PageHeadingDesc heading={t1("myCourses")} />
                <Typography variant="body1" sx={{ color: neutral.neutral1 }} marginTop={2}>
                    Here you can access all of your enrolled & favourite courses
                </Typography>
                <OverView title={"E-learning courses you are taking"} cardsLength={2} />
                <OverView title={"Classroom courses you are taking"} cardsLength={1} buttonTitle={"View Course Info"} />
                <OverView title={"Favourites"} cardsLength={1} />
            </Grid2>}

            {/* Personal data grid layout */}
            {active === 1 && <Grid2 justifyContent={"center"}>
                <PageHeadingDesc heading={t1("personalData")} />
                <Typography variant="body1" sx={{ color: neutral.neutral1 }} marginTop={2}>
                    Edit your personal information
                </Typography>
                <PersonalData title={"Edit your personal information"} cardsLength={2} />
            </Grid2>}

            {/* Password grid layout */}
            {active === 2 && <Grid2 justifyContent={"center"}>
                <PageHeadingDesc heading={t1("password")} />
                <Typography variant="body1" sx={{ color: neutral.neutral1 }} marginTop={2}>
                Your password will be updated immediately
                </Typography>
                <Password title={"Edit your personal information"} cardsLength={2} />
            </Grid2>}

            {/* Password grid layout */}
            {active === 3 && <Grid2 justifyContent={"center"}>
                <PageHeadingDesc heading={t1("publicProfile")} />
                <Typography variant="body1" sx={{ color: neutral.neutral1 }} marginTop={2}>
                Your password will be updated immediately
                </Typography>
                <PublicProfile title={"Edit your personal information"} cardsLength={2} />
            </Grid2>}
        </Container >
    );
};

export default AccountPages;
