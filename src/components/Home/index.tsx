"use client";
import { memo } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Certification from "./Certification";
import WhyKnowcrunch from "./WhyKowcrunch";
import ScrollSection from "./ScrollSection";
import CourseCard from "../Common/CourseCard";
import ClassroomCard from "../Common/ClassroomCard";
import InstructorCard from "../Common/InstructorCard";
import VideoCard from "../Common/VideoCard";
import Banner from "./Banner";
import LogoAnimate from "./LogoAnimate";
import CareerPath from "./CareerPaths";

// Importing instructor images
import instructorImg1 from "@/assets/instructor/instructor1.webp";
import instructorImg2 from "@/assets/instructor/instructor2.webp";
import instructorImg3 from "@/assets/instructor/instructor3.webp";

// Defining the Instructor interface
interface Instructor {
    img: string;
    title: string;
    company: string;
    name: string;
}

// Array of instructors
const instructors: Instructor[] = [
    {
        "img": instructorImg1 as unknown as string,
        "title": "CEO",
        "company": "@Knowcrunch",
        "name": "Tolis Aivalis"
    },
    {
        "img": instructorImg2 as unknown as string,
        "title": "Managing Director",
        "company": "Olive Creative Marketing House",
        "name": "Elia Balta"
    },
    {
        "img": instructorImg3 as unknown as string,
        "title": "Founder",
        "company": "@Content Studio",
        "name": "Christina Dehola"
    },
    {
        "img": instructorImg2 as unknown as string,
        "title": "Managing Director",
        "company": "Olive Creative Marketing House",
        "name": "Elia Balta"
    },
    {
        "img": instructorImg1 as unknown as string,
        "title": "CEO",
        "company": "@Knowcrunch",
        "name": "Tolis Aivalis"
    },
    {
        "img": instructorImg3 as unknown as string,
        "title": "Founder",
        "company": "@Content Studio",
        "name": "Christina Dehola"
    }
];

// Home component
const Home: React.FC = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const isMed = useMediaQuery(theme.breakpoints.down("lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const xlg = useMediaQuery(theme.breakpoints.up("xl"));

    // Function to dynamically calculate scroll amount based on screen size
    const getScrollAmount = (small: number, med: number, lg: number, xl: number) =>
        isSmall ? small : isMed ? med : isLg ? lg : xlg ? xl : small;

    // Function to render scroll sections dynamically
    const renderScrollSection = (
        heading: string,
        children: React.ReactNode,
        small: number, med: number, lg: number, xl: number,
        top?: string,
    ) => (
        <ScrollSection
            width={{ xs: "calc(100% - 44px)", md: "100%" }}
            scrolAmount={getScrollAmount(small, med, lg, xl)}
            leftArrowPosition={{ top: top ?? "44%", left: { xs: "-6px", md: "-30px" } }}
            rightArrowPosition={{ top: top ?? "44%", right: { xs: "-6px", md: "-30px" } }}
            heading={heading}
            linkProps={{ title: "View all", pt: 1, pb: 3 }}
            py={3}
        >
            {children}
        </ScrollSection>
    );

    return (
        <Box component="div">
            {/* Banner section */}
            <Banner />
            <Box component={"section"} sx={{ marginTop: "-30px", px: { xs: 3, md: 6 } }}>
                <LogoAnimate />
            </Box>

            {/* E-learning courses section */}
            {renderScrollSection("Popular E-learning Courses",
                [...Array(12)].map((_, ind) => (
                    <CourseCard key={ind} discountTag={true} width={298} shadow={true} tag={ind % 2 === 0 ? "NEW" : "BEST SELLER"} />
                )),
                312, 644, 966, 1288
            )}

            {/* Career path section */}
            <CareerPath />

            {/* Classroom courses section */}
            {renderScrollSection("Classroom Courses",
                [...Array(12)].map((_, ind) => (
                    <ClassroomCard key={ind} width={{ xs: 298, lg: 378.66, xl: 405 }} />
                )),
                312, 644, 804, 858, "213px"
            )}

            {/* Instructors courses section */}
            {renderScrollSection("Our Instructors",
                instructors.map((instructor, index) => (
                    <InstructorCard key={index} height={366} width={260} {...instructor} />
                )),
                284, 568, 1136, 1136, "163px"
            )}

            {/* Testimonials section */}
            {renderScrollSection("Video Testimonials",
                [...Array(12)].map((_, ind) => (
                    <VideoCard key={ind} width={368} />
                )),
                392, 392, 784, 1176, "94px"
            )}

            {/* Certification section */}
            <Certification />

            {/* Why Knowcrunch section */}
            <WhyKnowcrunch />
        </Box>
    );
};

export default memo(Home);
