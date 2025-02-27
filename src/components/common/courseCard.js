// Import necessary dependencies from React and Material-UI
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Import assets and icons
import courseThumb from "@/assets/course/courseThumb.webp";
import { Box } from "@mui/material";
import CustomBtn from "./customBtn";

/**
 * CourseCard Component
 * Displays a card with course information including thumbnail, title, description,
 * language, rating, duration and enrollment button
 * 
 * @param {boolean} enrollButton - Controls visibility of enrollment section (default: true)
 *  * @param {number} mx - Margin on the x-axis
 * @param {boolean} discountTag - Indicates if a discount tag should be displayed
 * @param {string} width - Width of the card
 * @param {number} minWidth - Minimum width of the card
 */
export default function CourseCard({
    enrollButton = true,
    mx = 0,
    discountTag = false,
    width = "100%",
    // minWidth = 100,
    newtag = false,
    CustomButton = true
}) {
    return (
        <Box
            sx={{
                backgroundColor: "secondary.main",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                minHeight: 400,
                width: width,
                flexShrink: 0
                // minWidth: minWidth
            }}
            p={1}
            mx={mx}
            component={"div"}
            aria-label="Course Card"
        >
            {/* Course thumbnail section with play button overlay */}
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: 191,
                    borderRadius: 2,
                    position: "relative",
                }}
                aria-label="Course Thumbnail"
            >
                {/* Play button overlay */}
                <Box
                    component={"div"}
                    position={"absolute"}
                    top={"40%"}
                    left={"43%"}
                    aria-label="Play Button"
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
                        justifyContent: CustomButton ? "space-between" : "flex-end",
                        width: "100%",
                        p: 2,
                    }}
                    aria-label="Best Seller Badge and Heart Icon"
                >
                    <CustomBtn
                        txtVariant={"body2"}
                        title={newtag ? "New" : "BEST SELLER"}
                        variant="contained"
                        color={newtag ? "secondary.main" : "tertiary.main"}
                        sx={{
                            height: 24,
                            backgroundColor: newtag ? "base1.default" : "accents.bubble1",
                            borderRadius: 1,
                            color: "white",
                            px: "5px",
                            minWidth: "36px",
                            display: CustomButton ? "flex" : "none",
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
                    />
                </Box>
                <Image
                    src={courseThumb}
                    className="imgWidth"
                    alt="course thumb"
                    priority
                    aria-label="Course Thumbnail"
                />
            </Box>

            {/* Course title */}
            <Typography
                gutterBottom
                variant="titleLg"
                component={"p"}
                pt={1}
                color="tertiary"
                aria-label="Course Title"
            >
                Masterclass in Google Advertising
            </Typography>

            {/* Course description */}
            <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"p"}
                color="secondary.dark"
                aria-label="Course Description"
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
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="neutral.neutral2"
                aria-label="Course Type Badge"
            />

            {/* Course metadata: language, rating, and duration */}
            <Box component={"div"} display={"flex"} gap={0.5} aria-label="Course Metadata">
                {/* Language indicator */}
                <Box component={"div"} display={"flex"} alignItems={"center"} aria-label="Language Indicator">
                    <Image src="/icons/glob.svg" alt="glob" width={20} height={20} aria-label="Globe Icon" />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                        aria-label="Language"
                    >
                        EN •
                    </Typography>
                </Box>
                {/* Rating display */}
                <Box component={"div"} display={"flex"} alignItems={"center"} aria-label="Rating Display">
                    <Image
                        src="/icons/star.svg"
                        alt="starIcon"
                        width={20}
                        height={20}
                        priority
                        aria-label="Star Icon"
                    />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                        aria-label="Rating"
                    >
                        4,5{" "}
                        <Typography
                            variant="body2"
                            fontWeight={400}
                            component={"span"}
                            color="neutral.neutral2"
                            aria-label="Rating Count"
                        >
                            (544)
                        </Typography>{" "}
                        •
                    </Typography>
                </Box>
                {/* Duration display */}
                <Box component={"div"} display={"flex"} alignItems={"center"} aria-label="Duration Display">
                    <Image
                        src="/icons/clock.svg"
                        alt="clockIcon"
                        width={20}
                        height={20}
                        priority
                        aria-label="Clock Icon"
                    />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                        aria-label="Duration"
                    >
                        25h
                    </Typography>
                </Box>
            </Box>

            {/* Enrollment section with price and button */}
            {enrollButton && (
                <Box component={"div"} pt={5} aria-label="Enrollment Section">
                    {discountTag && (
                        <Box sx={{ display: "flex" }}>
                            <Typography
                                variant="body2"
                                color="error.main"
                                pl={0.5}
                                pb={0.5}
                                aria-label="Discount Tag"
                            >
                                50%&nbsp; off &nbsp;
                            </Typography>
                            <Typography color="error.main" variant="body2" sx={{ textDecoration: "line-through" }}> 100 €</Typography>
                        </Box>
                    )}
                    <CustomBtn
                        title="Enrol 100€"
                        variant="filled"
                        sx={{ backgroundColor: "base1.default", width: "100%" }}
                        txtVariant="h6"
                        color="secondary"
                        aria-label="Enroll Button"
                    />
                </Box>
            )}
        </Box>
    );
}
