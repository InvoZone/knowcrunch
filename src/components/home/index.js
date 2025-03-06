"use client";
import * as React from "react";
import CourseCard from "../common/courseCard";
import ClassroomCard from "../common/classroomCard";
import InstructorCard from "../common/istructors";
import {
    Box,
    useMediaQuery,
    useTheme
} from "@mui/material";
import LogoAnimate from "./logoAnimate";
import img1 from "@/assets/course/instructor1.webp";
import img2 from "@/assets/course/instructor2.webp";
import img3 from "@/assets/course/instructor3.webp";
import VideoCard from "../common/videoCard";
import Diploma from "./diploma";
import WhykowCrunch from "./whykowcrunch";
import Banner from "./banner";
import ScrollSection from "./scrollSection";
import CareerPath from "./careerPath";



const Homepage = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const isMed = useMediaQuery(theme.breakpoints.down("lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const xlg = useMediaQuery(theme.breakpoints.up("xl"));

    const instructors = [
        {
            "profileImage": img1,
            "title": "CEO",
            "company": "@Knowcrunch",
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
            "company": "@Knowcrunch",
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
        <Box component={"div"}>
            {/* Bannner section */}
            <Banner />
            <Box component={"div"} sx={{ marginTop: "-30px", px: { xs: 3, md: 6 } }}>
                <LogoAnimate />
            </Box>

            {/* popular e-learning */}
            <ScrollSection
                width={{ xs: "calc(100% - 44px)", md: "100%" }}
                scrolAmount={isSmall ? 312 : isMed ? 644 : isLg ? 966 : xlg ? 1288 : 322}
                leftArrowPosition={{ top: "44%", left: { xs: "-6px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                rightArrowPosition={{ top: "44%", right: { xs: "-6px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                heading={"Popular E-learning Courses"}
                linkProps={{ title: "View all courses", pt: 1, pb: 3 }}
                py={3}
            >
                {[...Array(12)].map((_, ind) => (
                    <CourseCard discountTag={true} width={298} key={`course_${ind}`} shadow={true} />
                ))}
            </ScrollSection>


            {/* career path */}
            <CareerPath />

            {/* classroom courses */}
            <ScrollSection
                scrolAmount={isSmall ? 312 : isMed ? 644 : isLg ? 804 : xlg ? 858 : 322}
                width={{ xs: "calc(100% - 44px)", md: "100%" }}
                leftArrowPosition={{ top: "213px", left: { xs: "-6px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                rightArrowPosition={{ top: "213px", right: { xs: "-6px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                heading={"Classroom courses"}
                linkProps={{ title: "View courses", pt: 2 }}
            >
                {[...Array(12)].map((_, ind) => (
                    <ClassroomCard width={{ xs: 298, lg: 378.66, xl: 405 }} key={`classroom_course_${ind}`} />
                ))}
            </ScrollSection>


            {/* Our instructors */}
            <ScrollSection
                scrolAmount={isSmall ? 284 : isMed ? 568 : isLg ? 1136 : xlg ? 1136 : 284}
                width={{ xs: "100%", md: "100%" }}
                leftArrowPosition={{ top: "163px", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                rightArrowPosition={{ top: "163px", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                heading={"Our instructors"}
                linkProps={{ title: "View all instructors", pt: 2 }}
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

            {/* Video testimonials */}
            <ScrollSection
                scrolAmount={isSmall ? 392 : isMed ? 392 : isLg ? 784 : xlg ? 1176 : 392}
                width={{ xs: "100%", md: "100%" }}
                leftArrowPosition={{ top: "94px", left: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                rightArrowPosition={{ top: "94px", right: { xs: "-16px", md: "-30px", lg: "-30px", xl: "-30px" } }}
                heading={"Video testimonials"}
                linkProps={{ title: "View all instructors", pt: 2 }}
                py={{ xs: 4, md: 4 }}
            >
                {[...Array(12)].map((_, ind) => (
                    <VideoCard key={`testimonials_${ind}`} width={368} />

                ))}
            </ScrollSection>

            {/* Diploma */}
            <Diploma />

            {/* WhykowCrunch */}
            <WhykowCrunch />

        </Box >
    );
};

export default React.memo(Homepage);