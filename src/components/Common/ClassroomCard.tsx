// Import necessary dependencies from React and Material-UI
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { Box } from "@mui/material";
import CustomBtn from "./CustomBtn";
import TruncateText from "./TruncateText";

interface ClassroomCardProps {
    width?: { [key: string]: string | number } | string | number;
}

const ClassroomCard: React.FC<ClassroomCardProps> = ({ width = "100%" }) => {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                overflow: "hidden",
                width,
                flexShrink: 0,
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 79.7%), url(/icons/courseThumb.webp) lightgray 50% / cover no-repeat"
            }}
            p={2}
            component={"div"}
            aria-label="Classroom Card"
        >

            {/* Course thumbnail section with play button overlay */}
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: { xs: 140, xl: 169 },
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
                        color={"tertiary.main"}
                        sx={{
                            height: 24,
                            backgroundColor: "accents.bubble1",
                            borderRadius: 1,
                            color: "secondary.main",
                            px: "5px",
                            minWidth: "36px",
                            display: "flex",
                        }}
                        aria-label="Best Seller Badge"
                    />
                    <Image
                        src="/icons/heart.svg"
                        height={24}
                        width={24}
                        alt="heart"
                        priority
                        aria-label="Heart Icon"
                        title="Heart Icon"
                    />
                </Box>
            </Box>

            <Box component={"div"} height={206}>

                {/* Course title */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/course/locationicon.svg"
                        alt="calendaricon"
                        width={20}
                        height={20}
                        loading="lazy"
                        title="Location Icon"
                    />
                    <Typography variant="body" color="secondary.main" pl={0.5}>
                        Athens, GR
                    </Typography>
                </Box>

                <TruncateText
                    text="Masterclass in Digital Marketing, Athens"
                    variant="h5"
                    color="secondary.main"
                    component={"h3"}
                    length={48}
                />

                {/* Course description */}
                <TruncateText
                    text="An exceedingly advanced training program that provides comprehensive lectures"
                    variant="body2"
                    color="secondary.main"
                    component={"p"}
                    length={90}
                    sx={{ fontWeight: 400, pb: 1 }}
                />

                {/* Course metadata: language, rating, and duration */}
                <Box
                    component={"div"}
                    display={"flex"}
                    gap={0.5}
                    sx={{ flexWrap: "wrap" }}
                    py={"13px"}
                    aria-label="Course Metadata"
                >
                    <Box component={"div"} display={"flex"} alignItems={"center"}>
                        <Image
                            src="/icons/course/calendaricon.svg"
                            alt="calendaricon"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="Calendar Icon"
                        />
                        <Typography variant="body" color="secondary.main" pl={1}>
                            January 2025 •
                        </Typography>
                    </Box>
                    {/* Language indicator */}
                    <Box component={"div"} display={"flex"} alignItems={"center"}>
                        <Image
                            src="/icons/course/globalicon.svg"
                            alt="glob"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="Global Icon"
                        />
                        <Typography variant="body" color="secondary.main" pl={1}>
                            EN •
                        </Typography>
                    </Box>
                    {/* Rating display */}
                    <Box component={"div"} display={"flex"} alignItems={"center"}>
                        <Image
                            src="/icons/course/staricon.svg"
                            alt="starIcon"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="Star Icon"
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
                    <Box
                        component={"div"}
                        display={"flex"}
                        alignItems={"center"}
                        aria-label="Course Duration"
                    >
                        <Image
                            src="/icons/course/clockhour.svg"
                            alt="clockIcon"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="Clock Icon"
                        />
                        <Typography variant="body" color="secondary.main" pl={1}>
                            139h
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Enrollment section with price and button */}
            <Box component={"div"}>
                <CustomBtn
                    title="Enrol 100€"
                    variant="contained"
                    sx={{ backgroundColor: "base1.default", width: "100%" }}
                    txtVariant="h6"
                    color="secondary"
                    aria-label="Enrollment Button"
                />
            </Box>
        </Box>
    );
};

export default ClassroomCard;
