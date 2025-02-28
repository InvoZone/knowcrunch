"use client";
import * as React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "../common/courseCard";
import ClassroomCard from "../common/classroomCard";
import InstructorCard from "../common/istructors";
import * as styles from "./home.module.scss";
import {
    Box,
    Container,
    Grid2,
    Typography,
    useMediaQuery,
} from "@mui/material";
import SelectAbleLinks from "../common/selectableLinks";
import LogoAnimate from "../common/logoAnimate";
import img1 from "@/assets/course/instructor1.webp";
import img2 from "@/assets/course/instructor2.webp";
import img3 from "@/assets/course/instructor3.webp";
import VideoCard from "../common/videoCard";
import Diploma from "../common/diploma";
import WhykowCrunch from "../common/whykowcrunch";
import Banner from "../common/banner";
import ScrollSection from "./scrollSection";


const Homepage = () => {

    const isTab = useMediaQuery("(max-width:1200px)");
    const isMob = useMediaQuery("(max-width:500px)");
    const isMed = useMediaQuery("(max-width:991px)");
    const Home = useMediaQuery("(max-width:1281px)");

    const instructors = [
        {
            "profileImage": img1,
            "title": "CEO",
            "company": "@KnowCrunch",
            "name": "Tolis Aivalis"
        },
        {
            "profileImage": img2,
            "title": "Managing Director",
            "company": "Olive Creative Marketing House",
            "name": "Elia Balta"
        },
        {
            "profileImage": img3,
            "title": "Founder",
            "company": "@Content Studio",
            "name": "Christina Dehola"
        },
        {
            "profileImage": img2,
            "title": "Managing Director",
            "company": "Olive Creative Marketing House",
            "name": "Elia Balta"
        },
        {
            "profileImage": img1,
            "title": "CEO",
            "company": "@KnowCrunch",
            "name": "Tolis Aivalis"
        },
        {
            "profileImage": img3,
            "title": "Founder",
            "company": "@Content Studio",
            "name": "Christina Dehola"
        }
    ];

    return (
        <Box sx={{ padding: "0 !important" }} className={styles.mainconatiner}>
            {/* Bannner section */}
            <Box>
                <Banner />
                <Box className={styles.LogoAnimate}>
                    <LogoAnimate />
                </Box>
            </Box>
            {/* popular e-learning */}
            <Container
                sx={{ padding: 0, maxWidth: "1360px !important" }}
                className={styles.mainconatiner}
            >
                <Box className={styles.courseContainer} >
                    <Typography
                        sx={{ color: "primary.main", marginBottom: "32px" }}
                        variant="h2"
                        component={"h3"}
                    >
                        Popular E-learning Courses
                    </Typography>
                    <ScrollSection
                        width={"100%"}
                        scrolAmount={isMob ? 298 : null}
                        leftArrowPosition={{ top: "44%", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                        rightArrowPosition={{ top: "44%", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                    >
                        {[...Array(12)].map((_, ind) => (
                            <CourseCard discountTag={true} width={298} key={`course_${ind}`} />
                        ))}
                    </ScrollSection>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "link.main",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "16.5px",
                            marginRight:"20px",
                            // marginRight: isMob ? "50px" : isMed ? "88px" : Home ? "32px" : "30px",
                            cursor: "pointer",
                        }}
                        aria-label="View all courses"
                        component={"p"}
                    >
                        View all courses
                    </Typography>
                </Box>
            </Container>
            {/* career path */}
            <Box
                sx={{ background: "neutral.neutral10" }}
            >
                <Container
                    sx={{ padding: 0, maxWidth: "1360px !important", }}
                    className={styles.mainconatiner}
                >
                    <Box
                        className={styles.conatiner}
                        sx={{ background: "neutral.neutral10", padding: "48px" }}
                    >
                        <Grid2
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Grid2 sx={{ marginBottom: "24px" }}>
                                <Typography variant="h2" color={"base1.dark4"} component={"h3"}>
                                    Find your career path
                                </Typography>
                            </Grid2>
                            <Grid2
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}
                            >
                                <SelectAbleLinks />
                                <Grid2
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    className={styles.career}
                                >
                                    <Grid2
                                        className={styles.content}
                                        sx={{
                                            display: "flex",
                                            width: "100%",
                                            padding: "16px 8px",
                                            gap: "8px",
                                        }}
                                        item="true"
                                        md={12}
                                        lg={7.5}
                                        sm={12}
                                    >
                                        {/* Content Marketing Section */}
                                        <Box
                                            sx={{
                                                // marginTop: "40px",
                                                // padding: "24px",

                                                backgroundColor: "#f5f5f5",
                                                borderRadius: "8px",
                                                display: "flex",
                                                flexDirection: "column",
                                                // gap: "16px",
                                                mb: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: "base1.dark4",
                                                    marginBottom: "8px"
                                                }}
                                                component={"h4"}
                                            >
                                                Content Marketing
                                            </Typography>
                                            <Typography
                                                variant="body"
                                                sx={{
                                                    color: "neutral.neutral1",
                                                    marginBottom: "16px"
                                                }}
                                            >
                                                Define and develop digital
                                                strategies to deliver business
                                                growth through online channels.
                                            </Typography>
                                            <Box
                                                className={styles.markValue}
                                                sx={{ mt: -1 }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{ color: "link.main" }}
                                                >
                                                    37.000€
                                                </Typography>
                                                <Typography
                                                    variant="body"
                                                    sx={{ color: "neutral.neutral1", marginBottom: "12px" }}
                                                >
                                                    median salary in Greece, for
                                                    this career path in 2023
                                                </Typography>
                                            </Box>
                                            <Box
                                                className={styles.markValue}
                                                sx={{ marginTop: "12px" }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{ color: "link.main" }}
                                                >
                                                    85%
                                                </Typography>
                                                <Typography
                                                    variant="body"
                                                    sx={{ color: "neutral.neutral1", marginBottom: "16px" }}
                                                >
                                                    of course graduates report
                                                    positive career impact
                                                </Typography>
                                            </Box>
                                            <Box
                                                className={styles.basicTypo}
                                                sx={{
                                                    color: "neutral.neutral1",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "16px",
                                                    marginTop: "16px"
                                                    // marginBottom:"16px"
                                                }}
                                            >
                                                <Box className={styles.tickMark}>
                                                    <Image
                                                        loading="lazy"
                                                        src="/icons/tick.svg"
                                                        width={18}
                                                        height={18}
                                                        alt={"Tick"}
                                                    />
                                                    <Typography variant="body">
                                                        Design and manage influencer
                                                        campaigns to enhance brand
                                                        visibility and engagement.
                                                    </Typography>
                                                </Box>
                                                <Box className={styles.tickMark}>
                                                    <Image
                                                        loading="lazy"
                                                        src="/icons/tick.svg"
                                                        width={18}
                                                        height={18}
                                                        alt={"Tick"}
                                                    />
                                                    <Typography variant="body">
                                                        Expertise in social media,
                                                        content trends, analytics,
                                                        and influencer
                                                        relationship-building.
                                                    </Typography>
                                                </Box>
                                                <Box className={styles.tickMark}>
                                                    <Image
                                                        loading="lazy"
                                                        src="/icons/tick.svg"
                                                        width={18}
                                                        height={18}
                                                        alt={"Tick"}
                                                    />
                                                    <Typography variant="body">
                                                        High demand across
                                                        industries as brands
                                                        prioritise influencer
                                                        partnerships.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid2>
                                    <Grid2
                                        className={styles.course}
                                        sx={{

                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%",
                                        }}
                                        item="true"
                                        md={12}
                                        lg={4.5}
                                        sm={12}
                                    >
                                        <Grid2
                                            className={styles.coursecard}
                                            sx={{
                                                display: "flex",
                                                gap: "16px",
                                                width: "100%",
                                                // padding: "16px 8px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <CourseCard
                                                customClass={true}
                                                newtag={true}
                                                discountTag={true}
                                                width={"298px"}
                                                minWidth={"298px"}
                                            />
                                            {!isTab && (
                                                <CourseCard
                                                    CustomButton={false}
                                                    customClass={true}
                                                    discountTag={true}
                                                    width={"298px"}
                                                    minWidth={"298px"}
                                                />
                                            )}
                                        </Grid2>
                                        <Grid2>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: "link.main",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    marginTop: "20px",
                                                    marginRight: "20px",
                                                    cursor: "pointer",
                                                }}
                                                aria-label="View courses"
                                            >
                                                View courses
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Container>
            </Box>
            {/* classroom courses */}
            <Box px={{ xs: 0, sm: 0, md: 3, lg: 3 }} py={{ xs: 4, md: 6 }}>

                <Container maxWidth={"lg"}>
                    <Typography
                        color="primary.main"
                        pb={3}
                        variant="h2"
                        component={"h3"}
                    >
                        Classroom courses
                    </Typography>
                    <ScrollSection
                        scrolAmount={isMob ? 298 : null}
                        width={"100%"}
                        leftArrowPosition={{ top: "213px", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                        rightArrowPosition={{ top: "213px", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                    >
                        {[...Array(12)].map((_, ind) => (
                            <ClassroomCard width={{ xs: 298, lg: 378.66, xl: 405 }} key={`course_${ind}`} />
                        ))}
                    </ScrollSection>
                    <Typography
                        variant="h6"
                        color="link.main"
                        pt={2}
                        px={"20px"}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                        }}
                        component={"p"}
                        aria-label="View all instructors"
                    >
                        View courses
                    </Typography>
                </Container>
            </Box>

            {/* Our instructors */}
            <Box px={{ xs: 0, sm: 0, md: 3, lg: 3 }} py={6}>

                <Container maxWidth={"lg"}>
                    <Typography
                        color="primary.main"
                        pb={3}
                        variant="h2"
                        component={"h3"}
                    >
                        Our instructors
                    </Typography>
                    <ScrollSection
                        scrolAmount={isMob ? 260 : null}
                        width={"100%"}
                        leftArrowPosition={{ top: "44%", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                        rightArrowPosition={{ top: "44%", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                    >
                        {instructors.map((instructor, index) => (
                            <InstructorCard
                                key={`instructor_${index}`}
                                height={366}
                                width={260}
                                profileImage={instructor.profileImage}
                                title={instructor.title}
                                company={instructor.company}
                                name={instructor.name}
                            />
                        ))}
                    </ScrollSection>
                    <Typography
                        variant="h6"
                        color="link.main"
                        pt={2}
                        px={"20px"}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                        }}
                        component={"p"}
                        aria-label="View all instructors"
                    >
                        View all instructors
                    </Typography>
                </Container>
            </Box>


            {/* Video testimonials */}
            <Box px={{ xs: 0, sm: 0, md: 3, lg: 3 }} py={4}>

                <Container maxWidth={"lg"}>

                    <Typography
                        color="primary.main"
                        pb={3}
                        variant="h2"
                        component={"h3"}
                    >
                        Video testimonials
                    </Typography>
                    <ScrollSection
                        scrolAmount={isMob ? 368 : null}
                        width={"100%"}
                        leftArrowPosition={{ top: "94px", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                        rightArrowPosition={{ top: "94px", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                    >
                        {[...Array(12)].map((_, ind) => (
                            <VideoCard key={`course_${ind}`} width={368} />

                        ))}
                    </ScrollSection>
                </Container>
            </Box>

            {/* Diploma */}
            <Box
                backgroundColor={"neutral.neutral10"}
                py={6}
            >
                <Container maxWidth={"lg"} sx={{ display: "flex", justifyContent: "center" }}>
                    <Diploma />
                </Container>
            </Box>
            {/* WhykowCrunch */}
            <Container
                sx={{ padding: 0, maxWidth: "1360px !important" }}
                className={styles.mainconatiner}
            >
                <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                    <WhykowCrunch />
                </Box>
            </Container>
        </Box >
    );
};

export default React.memo(Homepage);