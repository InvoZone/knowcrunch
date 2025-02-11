import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import courseThumb from "@/assets/course/courseThumb.webp";
import heartIcon from "@/assets/icons/heart.svg";
import globIcon from "@/assets/icons/glob.svg";
import clockIcon from "@/assets/icons/clock.svg";
import starIcon from "@/assets/icons/star.svg";
import playBtnIcon from "@/assets/icons/playBtn.webp";
import { Box } from "@mui/material";
import CustomBtn from "./customBtn";

export default function CourseCard() {
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
        >
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: 191,
                    borderRadius: 1,
                    position: "relative",
                }}
            >
                <Box
                    component={"div"}
                    position={"absolute"}
                    top={"40%"}
                    left={"43%"}
                >
                    <Image
                        src={playBtnIcon}
                        height={50}
                        width={50}
                        alt="playBtnIcon"
                        loading="lazy"
                    />
                </Box>

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
                    <Image src={heartIcon} height={24} width={24} alt="heart" />
                </Box>
                <Image
                    src={courseThumb}
                    className="imgWidth"
                    alt="course thumb"
                />
            </Box>
            <Typography
                gutterBottom
                variant="titleLg"
                component={"div"}
                pt={1}
                color="tertiary"
            >
                Masterclass in Google Advertising
            </Typography>
            <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"div"}
                color="secondary.dark"
            >
                An exceedingly advanced training program that provides
                comprehensive lectures
            </Typography>
            <CustomBtn
                title={"Professional Diploma"}
                variant="outlined"
                sx={{
                    height: 24,
                    backgroundColor: "tertiary",
                    borderRadius: 0.5,
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="neutral.neutral2"
            />

            <Box component={"div"} display={"flex"} gap={0.5}>
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image src={globIcon} alt="glob" width={20} height={20} />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                    >
                        EN •
                    </Typography>
                </Box>
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src={starIcon}
                        alt="starIcon"
                        width={20}
                        height={20}
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
                <Box component={"div"} display={"flex"} alignItems={"center"}>
                    <Image
                        src={clockIcon}
                        alt="clockIcon"
                        width={20}
                        height={20}
                    />
                    <Typography
                        variant="body"
                        color="neutral.neutral2"
                        pl={0.5}
                    >
                        25h
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
