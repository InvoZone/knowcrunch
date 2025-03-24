/* eslint-disable react/no-array-index-key */
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
        img: instructorImg1 as unknown as string,
        title: "CEO",
        company: "@Knowcrunch",
        name: "Tolis Aivalis",
    },
    {
        img: instructorImg2 as unknown as string,
        title: "Managing Director",
        company: "Olive Creative Marketing House",
        name: "Elia Balta",
    },
    {
        img: instructorImg3 as unknown as string,
        title: "Founder",
        company: "@Content Studio",
        name: "Christina Dehola",
    },
    {
        img: instructorImg2 as unknown as string,
        title: "Managing Director",
        company: "Olive Creative Marketing House",
        name: "Elia Balta",
    },
    {
        img: instructorImg1 as unknown as string,
        title: "CEO",
        company: "@Knowcrunch",
        name: "Tolis Aivalis",
    },
    {
        img: instructorImg3 as unknown as string,
        title: "Founder",
        company: "@Content Studio",
        name: "Christina Dehola",
    },
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
    const renderScrollSection = ({
        heading,
        children,
        small,
        med,
        lg,
        xl,
        top,
        left,
        right,
        linkTitle = "View all",
        sectionPadding,
        width,
    }: {
        heading: string;
        children: React.ReactNode;
        small: number;
        med: number;
        lg: number;
        xl: number;
        top?: string;
        left?: { [key: string]: string };
        right?: { [key: string]: string };
        linkTitle?: string;
        sectionPadding?: { [key: string]: string };
        width: { [key: string]: string };
    }) => (
        <ScrollSection
            width={width}
            scrolAmount={getScrollAmount(small, med, lg, xl)}
            leftArrowPosition={{ top: top ?? "44%", left: { ...left } }}
            rightArrowPosition={{ top: top ?? "44%", right: { ...right } }}
            heading={heading}
            linkProps={{ title: linkTitle, pt: 1, pb: 3 }}
            sectionPadding={sectionPadding}
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
            {renderScrollSection({
                heading: "Popular E-learning Courses",
                children: [...Array(6)].map((_, ind) => (
                    <CourseCard
                        key={ind}
                        discountTag={true}
                        width={298}
                        shadow={true}
                        tag={ind % 2 === 0 ? "NEW" : "BEST SELLER"}
                    />
                )),
                small: 322,
                med: 644,
                lg: 966,
                xl: 1288,
                top: "44%",
                left: { xs: "-6px", md: "-30px" },
                right: { xs: "-6px", md: "-30px" },
                linkTitle: "View all courses",
                sectionPadding: { xs: "24px 0px 8px 0px", md: "24px 24px 24px 24px" },
                width: { xs: "300px", md: "100%" },
            })}

            {/* Career path section */}
            <CareerPath />

            {/* Classroom courses section */}
            {renderScrollSection({
                heading: "Classroom Courses",
                children: [...Array(12)].map((_, ind) => (
                    <ClassroomCard key={ind} width={{ xs: 298, lg: 378.66, xl: 405 }} />
                )),
                small: 322,
                med: 644,
                lg: 804,
                xl: 858,
                top: "190px",
                left: { xs: "-6px", md: "-30px" },
                right: { xs: "-6px", md: "-30px" },
                linkTitle: "View courses",
                sectionPadding: { xs: "32px 0px 8px 0px", md: "48px 24px 24px 24px" },
                width: { xs: "300px", md: "100%" },
            })}

            {/* Instructors courses section */}
            {renderScrollSection({
                heading: "Our Instructors",
                children: instructors.map((instructor, index) => (
                    <InstructorCard key={index} height={366} width={260} {...instructor} />
                )),
                small: 284,
                med: 568,
                lg: 1136,
                xl: 1136,
                top: "163px",
                left: { xs: "-16px", md: "-30px" },
                right: { xs: "-16px", md: "-30px" },
                linkTitle: "View all instructors",
                sectionPadding: { xs: "32px 0px 8px 0px", md: "48px 24px 24px 24px" },
                width: { xs: "361px", md: "100%" },
            })}

            {/* Testimonials section */}
            {renderScrollSection({
                heading: "Video Testimonials",
                children: [...Array(12)].map((_, ind) => <VideoCard key={ind} width={368} />),
                small: 392,
                med: 392,
                lg: 784,
                xl: 1176,
                top: "94px",
                left: { xs: "-16px", md: "-30px" },
                right: { xs: "-16px", md: "-30px" },
                linkTitle: "",
                sectionPadding: { xs: "32px 0px", md: "32px 24px" },
                width: { xs: "390px", md: "100%" },
            })}

            {/* Certification section */}
            <Certification />

            {/* Why Knowcrunch section */}
            <WhyKnowcrunch />
        </Box>
    );
};

export default memo(Home);
