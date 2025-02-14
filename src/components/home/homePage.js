"use client";
import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "../common/courseCard";
import ClassroomCard from "../common/classroomCard";
import InstructorCard from "../common/istructors"
import previousArrow from "@/assets/icons/previousArrow.svg";
import nextArrow from "@/assets/icons/nextArrow.svg";
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
import LogoAnimate from "../common/logoAnimate"
import Tick from "@/assets/icons/tick.svg";
import img1 from "@/assets/course/img1.svg";
import img2 from "@/assets/course/img2.svg";
import img3 from "@/assets/course/img3.svg";
import VideoCard from "../common/videoCard";
import Diploma from "../common/diploma";
import WhykowCrunch from "../common/whykowcrunch";
import Banner from "../common/banner";

function Arrow(props) {
    const { onClick } = props;
    return (
        <div className={styles.arrowStyle} style={{ right: -20 }}>
            <div onClick={onClick}>
                <Image src={nextArrow} height={40} width={40} alt="nextArrow" />
            </div>
        </div>
    );
}
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={styles.arrowStyle} style={{ left: "-24px" }}>
            <div onClick={onClick}>
                <Image
                    src={previousArrow}
                    height={40}
                    width={40}
                    alt="previousArrow"
                />
            </div>
        </div>
    );
}

const homepage = ({ enrollButton = true }) => {
    const theme = useTheme();
    const { primary, base2, base1, link, neutral } = theme.palette;
    const isLg = useMediaQuery(theme.breakpoints.up("md"));
    const isMed = useMediaQuery(theme.breakpoints.down("md"));

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,

        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const classroomSettigs = {
        dots: false,
        infinite: true,
        speed: 500,

        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const instructorSettigs = {
      dots: false,
      infinite: true,
      speed: 500,

      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <Arrow />,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              },
          },
          {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  };

  const videoSettigs = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <Arrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

    return (
        <Container maxWidth="lg" sx={{padding:0}} className={styles.mainconatiner}>
            {/* Bannner section */}
            <Box >
                <Banner  />
                <Box  className={styles.LogoAnimate}>
                    <LogoAnimate />
                </Box>
            </Box>
            {/* popular e-learning */}
            <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                <Typography
                    sx={{ color: primary.main, marginBottom: "24px" }}
                    variant="h2"
                >
                    Popular E-learning Courses
                </Typography>
                <Slider {...settings} className={styles.sliderContaier}>
                    <CourseCard homepage={true} />
                    <CourseCard homepage={true} />
                    <CourseCard homepage={true} />
                    <CourseCard homepage={true} />
                    <CourseCard homepage={true} />
                    <CourseCard homepage={true} />
                </Slider>
                <Typography
                    variant="h6"
                    sx={{
                        color: link.main,
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "24px",
                        cursor: "pointer",
                    }}
                >
                    View courses
                </Typography>
            </Box>
            {/* career path */}
            <Box className={styles.conatiner} sx={{ background: neutral.neutral10, padding: "48px" }}>
                <Grid2
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <Grid2>
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
                        <Grid2 cotaier sx={{ display: "flex", gap: "24px" }} className={styles.career} >
                            <Grid2
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    padding: "24px",
                                    gap: "16px",
                                }}
                                item="true"
                                md={12}
                                lg={6}
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
                                        gap: "24px",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: base1.dark4,
                                        }}
                                    >
                                        Content Marketing
                                    </Typography>
                                    <Typography
                                        variant="body"
                                        sx={{ color: neutral.neutral1 }}
                                    >
                                        Define and develop digital strategies to
                                        deliver business growth through online
                                        channels.
                                    </Typography>
                                    <Box className={styles.markValue}>
                                        <Typography
                                            variant="h5"
                                            sx={{ color: link.main }}
                                        >
                                            37.000€
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            sx={{ color: neutral.neutral1 }}
                                        >
                                            median salary in Greece, for this
                                            career path in 2023
                                        </Typography>
                                    </Box>
                                    <Box className={styles.markValue}>
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
                                            of course graduates report positive
                                            career impact
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={styles.basicTypo}
                                        sx={{ color: neutral.neutral1 }}
                                    >
                                        <Box className={styles.tickMark}>
                                            <Image
                                                loading="lazy"
                                                src={Tick}
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
                                                src={Tick}
                                                width={18}
                                                height={18}
                                                alt={"Tick"}
                                            />
                                            <Typography variant="body">
                                                Expertise in social media,
                                                content trends, analytics, and
                                                influencer
                                                relationship-building.
                                            </Typography>
                                        </Box>
                                        <Box className={styles.tickMark}>
                                            <Image
                                                loading="lazy"
                                                src={Tick}
                                                width={18}
                                                height={18}
                                                alt={"Tick"}
                                            />
                                            <Typography variant="body">
                                                High demand across industries as
                                                brands prioritise influencer
                                                partnerships.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid2>
                            <Grid2
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                }}
                                item="true"
                                md={12}
                                lg={6}
                                sm={12}
                            >
                                <Grid2
                                    sx={{
                                        display: "flex",
                                        gap: "16px",
                                        width: "100%",
                                        paddingBottom: "24px",
                                        paddingTop: "24px",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <CourseCard />
                                    {isLg  &&<CourseCard />}
                                </Grid2>
                                <Grid2>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: link.main,
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            marginTop: "24px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        View courses
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>
            {/* classroom courses */}

            <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                <Typography
                    sx={{ color: primary.main, marginBottom: "24px" }}
                    variant="h2"
                >
                    Classroom courses
                </Typography>
                <Slider {...classroomSettigs} className={styles.sliderContaier}>
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
                        marginTop: "24px",
                        cursor: "pointer",
                    }}
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
                <Slider {...instructorSettigs} className={styles.sliderContaier}>
                    <InstructorCard profileImage={img1} title="CEO" company="@KnowCrunch" name="Tolis Aivalis"/>
                    <InstructorCard profileImage={img2} title="Managing Director" company="Olive Creative Marketing House" name="Elia Balta" />
                    <InstructorCard profileImage={img3} title="Founder" company="@Content Studio" name="Christina Dehola" />
                    <InstructorCard profileImage={img2} title="Managing Director" company="Olive Creative Marketing House" name="Elia Balta" />
                    <InstructorCard profileImage={img1} title="CEO" company="@KnowCrunch" name="Tolis Aivalis" />
                    <InstructorCard profileImage={img3} title="Founder" company="@Content Studio" name="Christina Dehola" />
                </Slider>
                <Typography
                    variant="h6"
                    sx={{
                        color: link.main,
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "24px",
                        cursor: "pointer",
                    }}
                >
                    View courses
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
                <Slider {...videoSettigs} className={styles.sliderContaier}>
                    <VideoCard />
                    <VideoCard  />
                    <VideoCard  />
                    <VideoCard  />
                    <VideoCard />
                    <VideoCard  />
                </Slider>
            </Box>
            {/* Diploma */}
            <Box className={styles.conatiner} sx={{ padding: "48px", backgroundColor:neutral.neutral10}}>
                <Diploma />
            </Box>
            {/* WhykowCrunch */}
            <Box className={styles.conatiner} sx={{ padding: "48px" }}>
                <WhykowCrunch />
            </Box>

            
        </Container>
    );
};

export default homepage;
