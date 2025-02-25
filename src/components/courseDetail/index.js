"use client";
import * as React from "react";
import * as styles from "./course.module.scss";
import {
    Box,
    Container,
    Grid2,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Banner from "./banner";
import PaymentCard from "./paymentCard";
import ABOUT from "./about";
import Learn from "./learn";
import Skills from "./skills";
import Content from "./contentMarketing";
import Diploma from "../common/diploma";
import InstructorCard from "../common/istructors";
import img1 from "@/assets/course/instructor1.webp";
import img2 from "@/assets/course/instructor2.webp";
import img3 from "@/assets/course/instructor3.webp";
import Testimonial from "./testimonial";
import Faq from "./faqs";
import AlsoLike from "./alsoLike";
import Location from "./location";

const CourseDetail = () => {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <Box
            maxWidth="xl"
            sx={{
                padding: 0,
                marginTop: {
                    xs: "60px !important",
                    sm: "60px !important",
                    md: "48px !important",
                },
            }}
            className={styles.mainconatiner}
        >
            {/* Bannner section */}
            <Box>
                <Banner />
            </Box>
            <Container
                maxWidth="lg"
                sx={{ padding: 0 }}
                className={styles.mainconatiner}
            >
                <Box
                    className={styles.conatiner}
                    sx={{ paddingTop: "32px", flexDirection: "column" }}
                >
                    <Grid2
                        container
                        spacing={2}
                        sx={{
                            padding: {
                                xs: "32px 16px",
                                sm: "32px 16px",
                                md: "48px 32px 24px 32px",
                            },
                            display: "flex",
                            // flexDirection:"column"
                            // flexDirection: {
                            //     sm: "column-reverse",
                            //     xs: "column-reverse",
                            //     md: "row",
                            // },
                        }}
                    >
                        <Grid2
                            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                            spacing={2}
                        >
                            <Grid2
                                container
                                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                spacing={2}
                                sx={{
                                    flexDirection: {
                                        sm: "column-reverse",
                                        xs: "column-reverse",
                                        md: "row",
                                    },
                                }}
                            >
                                <Grid2
                                    size={{ xs: 12, sm: 12, md: 6.85, lg: 8 }}
                                    item="true"
                                >
                                    <Grid2
                                        container
                                        spacing={4}
                                        sx={{ display: "flex" }}
                                    >
                                        <Grid2
                                            item="true"
                                            size={{
                                                xs: 12,
                                                sm: 12,
                                                md: 12,
                                                lg: 12,
                                            }}
                                        >
                                            <ABOUT />
                                            <Learn />
                                            <Skills />
                                            <Content />
                                            <Box
                                                sx={{
                                                    padding: "24px",
                                                    backgroundColor:
                                                        "neutral.neutral10",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <Diploma
                                                    customStyle={true}
                                                    variant={"h4"}
                                                    heading={
                                                        "Achieve Your Professional Diploma"
                                                    }
                                                    desp={
                                                        "Stand out with a Professional Diploma, earned by successfully passing our rigorous exams. This prestigious certification showcases your mastery and dedication to excellence in your field."
                                                    }
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    marginTop: "32px",
                                                }}
                                            >
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: "base1.dark4",
                                                        mb: 2,
                                                    }}
                                                >
                                                    Instructors
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: {
                                                            xs: "column",
                                                            sm: "column",
                                                            md: "column",
                                                            lg: "row",
                                                        },
                                                        gap: "24px",
                                                        alignItems: {
                                                            xs: "center",
                                                            sm: "start",
                                                            md: "start",
                                                        },
                                                    }}
                                                >
                                                    <InstructorCard
                                                        maxWidth={"260px"}
                                                        profileImage={img1}
                                                        title="CEO"
                                                        company="@KnowCrunch"
                                                        name="Tolis Aivalis"
                                                    />
                                                    <InstructorCard
                                                        maxWidth={"260px"}
                                                        profileImage={img2}
                                                        title="Managing Director"
                                                        company="Olive Creative Marketing House"
                                                        name="Elia Balta"
                                                    />
                                                    {isLg && (
                                                        <InstructorCard
                                                            maxWidth={"260px"}
                                                            profileImage={img3}
                                                            title="Founder"
                                                            company="@Content Studio"
                                                            name="Christina Dehola"
                                                        />
                                                    )}
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: "link.main",
                                                        display: "flex",
                                                        justifyContent: isLg
                                                            ? "flex-end"
                                                            : "start",
                                                        marginTop: "24px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    View all instructors
                                                </Typography>
                                            </Box>
                                            <Box sx={{ mb: 3, mt: 4 }}>
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: "base1.dark4",
                                                        mb: 2,
                                                    }}
                                                >
                                                    Course testimonials
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        gap: "24px",
                                                        flexDirection: {
                                                            xs: "column",
                                                            sm: "column",
                                                            md: "column",
                                                            lg: "row",
                                                        },
                                                    }}
                                                >
                                                    <Testimonial />
                                                    <Testimonial />
                                                </Box>
                                            </Box>
                                            <Location />
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                                <Grid2
                                    size={{ xs: 12, sm: 12, md: 5.15, lg: 4 }}
                                    item="true"
                                >
                                    <PaymentCard />
                                </Grid2>
                            </Grid2>
                            <Grid2
                                sx={{display:"flex", flexDirection:"column"}}
                                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                spacing={2}
                            >
                                <Box>
                                    <AlsoLike />
                                </Box>
                                <Box>
                                    <Faq />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Box>
    );
};

export default CourseDetail;
