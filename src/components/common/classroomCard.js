// Import necessary dependencies from React and Material-UI
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as styles from "./classroomCard.module.scss";

import { Box } from "@mui/material";
import CustomBtn from "./customBtn";

/**
 * ClassroomCard Component
 * Displays a card with course information including thumbnail, title, description,
 * language, rating, duration and enrollment button
 * @param {boolean} enrollButton - Controls visibility of enrollment section (default: true)
 */
export default function ClassroomCard({
    enrollButton = true,
    homepage = false,
}) {
    return (
        <Box
            className={styles.main}
            sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                minHeight: 400,
            }}
            p={1}
            mx={homepage ? 1 : 0}
        >
            {/* Course thumbnail section with play button overlay */}
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: 191,
                    borderRadius: 1,
                    position: "relative",
                }}
            >
                {/* Best seller badge and heart icon */}
                <Box
                    component={"div"}
                    sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        p: 1,
                    }}
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
                    />
                    <Image src="/icons/heart.svg" height={24} width={24} alt="heart" />
                </Box>
            </Box>

            {/* Course title */}
            <Box component={"div"} display={"flex"} alignItems={"center"}>
                <Image
                    src="/icons/locationicon.svg"
                    alt="calendaricon"
                    width={20}
                    height={20}
                />
                <Typography variant="body" color="secondary.main" pl={0.5}>
                    Athens, GR
                </Typography>
            </Box>
            <Typography
                gutterBottom
                variant="h5"
                component={"div"}
                pt={1}
                color="secondary.main"
            >
                Masterclass in Digital Marketing, Athens
            </Typography>

            {/* Course description */}
            <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"div"}
                color="secondary.main"
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
                    color: "secondary.main",
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="secondary.main"
            />

            {/* Course metadata: language, rating, and duration */}
            <Box
                component={"div"}
                display={"flex"}
                gap={0.5}
                sx={{ flexWrap: "wrap" }}
            >
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/calendaricon.svg"
                        alt="calendaricon"
                        width={20}
                        height={20}
                    />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        January 2025 •
                    </Typography>
                </Box>
                {/* Language indicator */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image src="/icons/globalicon.svg" alt="glob" width={20} height={20} />
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
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/clockhour.svg"
                        alt="clockIcon"
                        width={20}
                        height={20}
                    />
                    <Typography variant="body" color="secondary.main" pl={1}>
                        139h
                    </Typography>
                </Box>
            </Box>

            {/* Enrollment section with price and button */}
            {enrollButton && (
                <Box component={"div"} pt={5}>
                    {!homepage && (
                        <Typography
                            variant="body2"
                            color="error.main"
                            pl={0.5}
                            pb={0.5}
                        >
                            50% off 1.000 €
                        </Typography>
                    )}
                    <CustomBtn
                        title="Enrol 1.500,00€"
                        variant="filled"
                        sx={{ backgroundColor: "base1.default", width: "100%" }}
                        txtVariant="h6"
                        color="secondary"
                    />
                </Box>
            )}
        </Box>
    );
}
