"use client";
import * as React from "react";
import { useState, useMemo } from "react";
import Image from "next/image";
import Slider from "react-slick";
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
    useTheme,
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


const Homepage = () => {

    // Separate state for each slider
    const [currentSlide, setCurrentSlide] = useState({
        main: 0,
        classroom: 0,
        instructor: 0,
        video: 0,
    });

    const theme = useTheme();
    const { primary, base1, link, neutral } = theme.palette;
    const isTab = useMediaQuery("(max-width:1200px)");
    const isMob = useMediaQuery("(max-width:730px)");

    const Arrow = React.memo((props) => {
        const { onClick } = props;
        return (
            <Box
                sx={{
                    right: { xs: props?.val || -20, sm: -20 },
                    top: props?.top !== undefined ? `${props.top} !important` : "47% !important",
                    display: props.isDisabled ? "none !important" : "block !important",
                }}
                className={styles.arrowStyle}
            >
                <div onClick={onClick} aria-label="Next slide">
                    <Image src="/icons/nextArrow.svg" height={40} width={40} alt="nextArrow" />
                </div>
            </Box>
        );
    });
    Arrow.displayName = "Arrow";

    const PrevArrow = React.memo((props) => {
        const { onClick } = props;
        return (
            <Box
                sx={{top: props?.top !== undefined ? `${props.top} !important` : "47% !important", left: { xs: props?.val || -24, sm: -24 }, display: props.isDisabled ? "none !important" : "block !important", }}
                className={styles.arrowStyle}
            >
                <div onClick={onClick} aria-label="Previous slide">
                    <Image
                        src="/icons/previousArrow.svg"
                        height={40}
                        width={40}
                        alt="previousArrow"
                    />
                </div>
            </Box>
        );
    });
    PrevArrow.displayName = "PrevArrow";

    // const cardWidth = isTablet ? "298px" : "100%";
    const cardWidth = "auto";
    const totalSlides = 6;

    // Slider settings
    const settings = useMemo(() => ({
        dots: false,
        infinite: false,
        speed: 500,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide((prev) => ({ ...prev, main: newIndex }));
        },
        prevArrow: <PrevArrow isDisabled={currentSlide.main === 0} val={2} />,
        nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 4} val={-20} />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3.72,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 3.72} val={-20} />,
                },
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 3} val={-20} />,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 2} val={-20} />,
                },
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1} val={-20} />,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1} val={-20} />,
                },
            },
        ],
    }), [currentSlide.main]);

    const classroomSettigs = useMemo(() => ({
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(prev => ({ ...prev, classroom: newIndex })),

        prevArrow: <PrevArrow isDisabled={currentSlide.classroom === 0} val={2} />,
        nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 3} val={2} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.30,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 2.30} val={-20} />,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.30,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 2.30} val={-20} />,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 2} val={-20} />,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 1} val={-20} />,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.classroom >= totalSlides - 1} val={-20} />,
                },
            },
        ],

    }), [currentSlide.classroom]);

    const instructorSettigs = useMemo(() => ({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.20, // Dynamically set slidesToShow
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(prev => ({ ...prev, instructor: newIndex })),
        prevArrow: <PrevArrow isDisabled={currentSlide.instructor === 0} val={-14} top={"45%"}/>,
        nextArrow: <Arrow isDisabled={currentSlide.instructor >= totalSlides - 4.20} val={-14} top={"45%"}/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.75,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.instructor >= totalSlides - 2.75} val={-20} />,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.75,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.instructor >= totalSlides - 2.75} val={-20} />,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.instructor >= totalSlides - 2} val={-20} />,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.30,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.instructor >= totalSlides - 1.30} val={-20} />,
                },
            },
        ],
    }), [currentSlide.instructor]);

    const videoSettigs = useMemo(() => ({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.40, // Dynamically set slidesToShow
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(prev => ({ ...prev, video: newIndex })),
        prevArrow: <PrevArrow isDisabled={currentSlide.video === 0} top={"42%"}/>,
        nextArrow: <Arrow isDisabled={currentSlide.video >= totalSlides - 3.40} top={"42%"}/>,
        responsive: [
            {
                breakpoint: 1728,
                settings: {
                    slidesToShow: 3.40,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.video >= totalSlides - 3.40} val={-20} />,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3.10,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.video >= totalSlides - 3.10} val={-20} />,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.video >= totalSlides - 2} val={-20} />,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.video >= totalSlides - 2} val={-20} />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.mvideoain >= totalSlides - 1} val={-20} />,
                },
            },
        ],
    }), [currentSlide?.video]);

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
                sx={{ padding: 0, maxWidth:"1360px !important" }}
                className={styles.mainconatiner}
            >
                <Box className={styles.conatiner} sx={{ padding: "24px 48px 48px 48px" }}>
                    <Typography
                        sx={{ color: primary.main, marginBottom: "32px" }}
                        variant="h2"
                    >
                        Popular E-learning Courses
                    </Typography>
                    <Slider {...settings} className="sliderContaier"
                    >
                        {[...Array(6)].map((_, index) => (
                            <Box key={index}>
                                <CourseCard customClass={true} width= "100%" minWidth={cardWidth}/>
                            </Box>
                        ))}
                    </Slider>
                    <Typography
                        variant="h6"
                        sx={{
                            color: link.main,
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "20px",
                            marginRight:"20px",
                            cursor: "pointer",
                        }}
                        aria-label="View all courses"
                    >
                        View all courses
                    </Typography>
                </Box>
            </Container>
                {/* career path */}
                <Box
                    sx={{ background: neutral.neutral10 }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{ padding: 0 }}
                        className={styles.mainconatiner}
                    >
                        <Box
                            className={styles.conatiner}
                            sx={{ background: neutral.neutral10, padding: "48px" }}
                        >
                            <Grid2
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Grid2 sx={{marginBottom:"24px"}}>
                                    <Typography variant="h2" color={base1.dark4}>
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
                                            gap: "16px",
                                            justifyContent: "space-between",
                                        }}
                                        className={styles.career}
                                    >
                                        <Grid2
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
                                                        color: base1.dark4,
                                                        marginBottom:"8px"
                                                    }}
                                                >
                                                    Content Marketing
                                                </Typography>
                                                <Typography
                                                    variant="body"
                                                    sx={{
                                                        color: "neutral.neutral1",
                                                        marginBottom:"16px"
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
                                                        sx={{ color: link.main }}
                                                    >
                                                        37.000€
                                                    </Typography>
                                                    <Typography
                                                        variant="body"
                                                        sx={{ color: neutral.neutral1, marginBottom:"12px" }}
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
                                                        sx={{ color: link.main }}
                                                    >
                                                        85%
                                                    </Typography>
                                                    <Typography
                                                        variant="body"
                                                        sx={{ color: neutral.neutral1 }}
                                                    >
                                                        of course graduates report
                                                        positive career impact
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    className={styles.basicTypo}
                                                    sx={{
                                                        color: "neutral.neutral1",
                                                        display:"flex",
                                                        flexDirection:"column",
                                                        gap:"16px",
                                                        marginTop:"16px"
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
                                            sx={{
                                                padding: "16px 8px",
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
                                                sx={{
                                                    display: "flex",
                                                    gap: "16px",
                                                    width: "100%",
                                                    // padding: "16px 8px",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <CourseCard
                                                    customClass={true}
                                                    newtag={true}
                                                    discountTag={true}
                                                />
                                                {!isTab && (
                                                    <CourseCard
                                                        CustomButton={false}
                                                        customClass={true}
                                                        discountTag={true}
                                                    />
                                                )}
                                            </Grid2>
                                            <Grid2>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: link.main,
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        marginTop: "20px",
                                                        marginRight:"20px",
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
            <Container
                sx={{ padding: 0, maxWidth:"1360px !important" }}
                className={styles.mainconatiner}
            >
                <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                    <Typography
                        sx={{ color: primary.main, marginBottom: "24px" }}
                        variant="h2"
                    >
                        Classroom courses
                    </Typography>
                    <Slider
                        {...classroomSettigs}
                        className={"sliderContaier"}
                    >
                        <ClassroomCard homepage={true} />
                        <ClassroomCard homepage={true} />
                        <ClassroomCard homepage={true} />
                        <ClassroomCard homepage={true} />
                        <ClassroomCard homepage={true} />
                        <ClassroomCard homepage={true} />
                    </Slider>
                    <Typography
                        variant="h6"
                        sx={{
                            color: link.main,
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "20px",
                            marginRight:"20px",
                            cursor: "pointer",
                        }}
                        aria-label="View courses"
                    >
                        View courses
                    </Typography>
                </Box>

                {/* Our instructors */}
                <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                    <Typography
                        sx={{ color: primary.main, marginBottom: "24px" }}
                        variant="h2"
                    >
                        Our instructors
                    </Typography>
                    <Slider
                        {...instructorSettigs}
                        className={"sliderContaier"}
                    >
                        <InstructorCard
                            profileImage={img1}
                            title="CEO"
                            company="@KnowCrunch"
                            name="Tolis Aivalis"
                        />
                        <InstructorCard
                            profileImage={img2}
                            title="Managing Director"
                            company="Olive Creative Marketing House"
                            name="Elia Balta"
                        />
                        <InstructorCard
                            profileImage={img3}
                            title="Founder"
                            company="@Content Studio"
                            name="Christina Dehola"
                        />
                        <InstructorCard
                            profileImage={img2}
                            title="Managing Director"
                            company="Olive Creative Marketing House"
                            name="Elia Balta"
                        />
                        <InstructorCard
                            profileImage={img1}
                            title="CEO"
                            company="@KnowCrunch"
                            name="Tolis Aivalis"
                        />
                        <InstructorCard
                            profileImage={img3}
                            title="Founder"
                            company="@Content Studio"
                            name="Christina Dehola"
                        />
                    </Slider>
                    <Typography
                        variant="h6"
                        sx={{
                            color: link.main,
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "20px",
                            marginRight:"20px",
                            cursor: "pointer",
                        }}
                        aria-label="View all instructors"
                    >
                        View all instructors
                    </Typography>
                </Box>
                {/* Video testimonials */}
                <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                    <Typography
                        sx={{ color: primary.main, marginBottom: "24px" }}
                        variant="h2"
                    >
                        Video testimonials
                    </Typography>
                    <Slider {...videoSettigs}>
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </Slider>
                </Box>
            </Container>
                {/* Diploma */}
            <Box
                sx={{ backgroundColor: neutral.neutral10 }}
            >    
                <Container
                    sx={{ padding: 0, maxWidth:"1360px !important" }}
                    className={styles.mainconatiner}
                >
                    <Box
                        className={styles.conatiner}
                        sx={{ padding: "48px", backgroundColor: neutral.neutral10 }}
                    >
                        <Diploma />
                    </Box>
                </Container>
            </Box>    
                {/* WhykowCrunch */}
            <Container
                sx={{ padding: 0,  maxWidth:"1360px !important" }}
                className={styles.mainconatiner}
            >
                <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                    <WhykowCrunch />
                </Box>
            </Container>
        </Box>
    );
};

export default React.memo(Homepage);
