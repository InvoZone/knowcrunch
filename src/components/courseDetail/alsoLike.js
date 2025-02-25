"use client";
import * as React from "react";
import { useState, useMemo } from "react";
import Image from "next/image";
import {
    Box, Typography
} from "@mui/material";
import CourseCard from "../common/courseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FAQ = () => {
    const [currentSlide, setCurrentSlide] = useState({
        main: 0
    });
    const cardWidth = "auto";
    const totalSlides = 6;

    const Arrow = React.memo((props) => {
        const { onClick } = props;
        return (
            <Box
                sx={{ right: { xs: props?.val || -20, sm: -20 },
                        display: props.isDisabled ? "none !important" : "block !important",
                        position:"absolute",top:"40%",zIndex:"10",cursor:"pointer"
                 }}
            >
                <div onClick={onClick}>
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
                sx={{ left: { xs: props?.val || -24, sm: -24 }, display: props.isDisabled ? "none !important" : "block !important", position:"absolute",top:"40%",zIndex:"10",cursor:"pointer" }}
            >
                <div onClick={onClick}>
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 4} val={-20} />,
                },
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2.40,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 2.40} val={-20} />,
                },
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1.7} val={-20} />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1} val={-20} />,
                },
            },
        ],
    }), [currentSlide.main]);
    
    return (
        <Box>
            <Typography variant="h4" sx={{ color: "base1.dark4", mb: 2 }}>
                You might also like
            </Typography>
            <Slider {...settings} className="sliderContaierCard"
            >
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
                <CourseCard customClass={true} width='auto' minWidth={cardWidth} mx={1.3}/>
            </Slider>
        </Box>
    );
};

export default FAQ;
