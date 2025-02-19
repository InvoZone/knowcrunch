// Import necessary dependencies from React and Material-UI
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Import assets and icons
import courseThumb from "@/assets/course/courseThumb.webp";
import { Box, LinearProgress } from "@mui/material";
import CustomBtn from "./customBtn";
import CustomizedProgressBars from "./linearProgressBar";
import { colors } from "@/utils/colors";

/**
 * CourseCard Component
 * Displays a card with course information including thumbnail, title, description,
 * language, rating, duration and enrollment button
 * @param {boolean} enrollButton - Controls visibility of enrollment section (default: true)
 */
export default function CourseCard({
    enrollButton = true,
    mx = 0,
    discountTag = false,
    title = "Enrol 1.500,00€",
    description = true,
    progress = false,
    progressValue = false
}) {
    return (
        <Box
            sx={{
                backgroundColor: "secondary.main",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                minHeight: 400,
            }}
            p={1}
            mx={mx}
            component={"div"}
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
                {/* Play button overlay */}
                <Box
                    component={"div"}
                    position={"absolute"}
                    top={"40%"}
                    left={"43%"}
                >
                    <Image
                        src={"/icons/playBtn.webp"}
                        height={50}
                        width={50}
                        alt="playBtnIcon"
                        priority
                    />
                </Box>

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
                    {description && <>
                        <CustomBtn
                            txtVariant={"body2"}
                            title={"BEST SELLER"}
                            variant="contained"
                            sx={{
                                height: 24,
                                backgroundColor: "accents.bubble1",
                                borderRadius: 0.5,
                            }} />
                        <Image
                            src="/icons/heart.svg"
                            height={24}
                            width={24}
                            alt="heart"
                            priority />
                    </>}
                </Box>
                <Image
                    src={courseThumb}
                    className="imgWidth"
                    alt="course thumb"
                    priority
                />
            </Box>

            {/* Course title */}
            <Typography
                gutterBottom
                variant="titleLg"
                component={"div"}
                pt={1}
                color="tertiary"
            >
                Masterclass in Google Advertising
            </Typography>

            {/* progress bar */}
            {progressValue && <Box>
                <Typography style={{ background: "transparent" }}>
                    {progressValue ? `${progressValue}% complete` : ""}
                </Typography>
                <CustomizedProgressBars value={progressValue} />
                {/* <LinearProgress variant="determinate" value={40} sx={{borderRadius: "5px", bgcolor: colors.neutral.neutral9}} color="primary" /> */}
            </Box>}

            {/* Course description */}
            {description && <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"div"}
                color="secondary.dark"
            >
                An exceedingly advanced training program that provides
                comprehensive lectures
            </Typography>}

            {/* Course type badge */}
            {description && <CustomBtn
                title={"Professional Diploma"}
                variant="outlined"
                sx={{
                    height: 24,
                    border: "1px solid",
                    backgroundColor: "tertiary",
                    borderColor: "neutral.neutral9",
                    borderRadius: "4px",
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="neutral.neutral2"
            />}

            {/* Course metadata: language, rating, and duration */}
            {description && <Box component={"div"} display={"flex"} gap={0.5}>
                {/* Language indicator */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image src="/icons/glob.svg" alt="glob" width={20} height={20} />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                    >
                        EN •
                    </Typography>
                </Box>
                {/* Rating display */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/star.svg"
                        alt="starIcon"
                        width={20}
                        height={20}
                        priority
                    />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                    >
                        4.5{" "}
                        <Typography
                            variant="body2"
                            fontWeight={400}
                            component={"span"}
                            color="neutral.neutral2"
                        >
                            (544)
                        </Typography>{" "}
                        •
                    </Typography>
                </Box>
                {/* Duration display */}
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src="/icons/clock.svg"
                        alt="clockIcon"
                        width={20}
                        height={20}
                        priority
                    />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                    >
                        25h
                    </Typography>
                </Box>
            </Box>}

            {/* Enrollment section with price and button */}
            {enrollButton && (
                <Box component={"div"} pt={description ? 5 : progressValue !== null ? 10 : 13.5}>
                    {discountTag && (
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
                        title={title}
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
