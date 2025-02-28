// Import necessary dependencies from React and Material-UI
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { Box } from "@mui/material";
import CustomBtn from "./customBtn";
import cardThumb from "@/assets/course/Classroomcourse.webp";

/**
 * ClassroomCard Component
 * @param {boolean} enrollButton - Controls visibility of enrollment section (default: true)
 */
export default function ClassroomCard({
    width = "100%",
}) {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                overflow: "hidden",
                width: width,
                flexShrink: 0,
                height: "450px"
            }}
            p={2}
            component={"div"}
            aria-label="Classroom Card"
        >
            <Image
                src={cardThumb}
                alt="Classroom background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="imgFitBG"
                priority
                aria-label="Classroom Thumbnail"
            />
            {/* Course thumbnail section with play button overlay */}
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: 191,
                    borderRadius: 1,
                    position: "relative",
                }}
                aria-label="Course Thumbnail"
            >
                {/* Best seller badge and heart icon */}
                <Box
                    component={"div"}
                    sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                    aria-label="Best Seller Badge and Heart Icon"
                >
                    <CustomBtn
                        txtVariant={"body2"}
                        title={"BEST SELLER"}
                        variant="contained"
                        sx={{
                            height: 24,
                            backgroundColor: "accents.bubble1",
                            borderRadius: 0.5,
                        }}
                        aria-label="Best Seller Badge"
                    />
                    <Image src="/icons/heart.svg" height={24} width={24} alt="heart" loading="lazy" />
                </Box>
            </Box>

            {/* Course title */}
            <Box component={"div"} display={"flex"} alignItems={"center"}>
                <Image
                    src="/icons/locationicon.svg"
                    alt="calendaricon"
                    width={20}
                    height={20}
                    loading="lazy"
                />
                <Typography variant="body" color="secondary.main" pl={0.5}>
                    Athens, GR
                </Typography>
            </Box>
            <Typography
                gutterBottom
                variant="h5"
                component={"p"}
                pt={1}
                color="secondary.main"
                sx={{ whiteSpace: "normal" }}
            >
                Masterclass in Digital Marketing, Athens
            </Typography>

            {/* Course description */}
            <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"p"}
                color="secondary.main"
                sx={{ whiteSpace: "normal" }}
            >
                An exceedingly advanced training program that provides
                comprehensive lectures
            </Typography>

            {/* Course type badge */}
            <CustomBtn
                title={"Professional Diploma"}
                variant="outlined"
                sx={{
                    height: 24,
                    border: "1px solid",
                    backgroundColor: "tertiary",
                    borderColor: "neutral.neutral9",
                    borderRadius: "4px",
                    padding: "0 5px",
                    color: "secondary.main",
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="secondary.main"
                aria-label="Course Type Badge"
            />

            {/* Course metadata: language, rating, and duration */}
            <Box
                component={"div"}
                display={"flex"}
                gap={0.5}
                sx={{ flexWrap: "wrap" }}
                aria-label="Course Metadata"
            >
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/calendaricon.svg"
                        alt="calendaricon"
                        width={20}
                        height={20}
                        loading="lazy"
                    />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        January 2025 •
                    </Typography>
                </Box>
                {/* Language indicator */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image src="/icons/globalicon.svg" alt="glob" width={20} height={20} loading="lazy" />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        EN •
                    </Typography>
                </Box>
                {/* Rating display */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/staricon.svg"
                        alt="starIcon"
                        width={20}
                        height={20}
                        loading="lazy"
                    />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        4.5{" "}
                        <Typography
                            variant="body2"
                            fontWeight={400}
                            component={"span"}
                            color="secondary.main"
                        >
                            (544)
                        </Typography>{" "}
                        •
                    </Typography>
                </Box>
                {/* Duration display */}
                <Box component={"div"} display={"flex"} alignItems={"center"} aria-label="Course Duration">
                    <Image
                        src="/icons/clockhour.svg"
                        alt="clockIcon"
                        width={20}
                        height={20}
                        loading="lazy"
                    />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        139h
                    </Typography>
                </Box>
            </Box>

            {/* Enrollment section with price and button */}
            <Box component={"div"} pt={2}>
                <CustomBtn
                    title="Enrol 100€"
                    variant="filled"
                    sx={{ backgroundColor: "base1.default", width: "100%" }}
                    txtVariant="h6"
                    color="secondary"
                    aria-label="Enrollment Button"
                />
            </Box>
        </Box>
    );
}
