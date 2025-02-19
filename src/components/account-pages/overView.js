"use client";

// Import necessary dependencies
import { Grid2, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import CourseCard from "../common/courseCard";
import { useSelector } from "react-redux";
import PageHeadingDesc from "../common/pageHeadingDesc";
import { useState } from "react";
/**
 * OverView Component
 * Main component for displaying course listings
 */
const OverView = ({ title, cardsLength, buttonTitle }) => {
    const theme = useTheme();
    const { neutral } = theme.palette;

    return (
        <Grid2 spacing={2} sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ color: neutral.neutral1, mb: 1 }}>
                {title}
            </Typography>
            <Grid2
                container
                size={{
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 6,
                }}
                spacing={2}
            >
                {/* Display course cards */}
                {[...new Array(cardsLength).fill()]?.map((el, ind) => (
                    <Grid2
                        key={`course_${ind}`}
                        size={{ xs: 12, sm: 7, md: 6, lg: 6 }}
                    >
                        <CourseCard discountTag={title === "Favourites" || false} title={buttonTitle || (ind === 1 ? "Start Course" : "Keep Watching")} description={title === "Favourites" || false} progress={true} progressValue={((title === "E-learning courses you are taking" && ind === 1) || title === "Favourites") ? null : 60} />
                    </Grid2>
                ))}
            </Grid2>
        </Grid2>
    );
};

export default OverView;
