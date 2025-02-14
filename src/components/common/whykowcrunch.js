"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import whyknowcrunch from "@/assets/course/kowcrunchimg.svg";
import styles from "./whykowcruch.module.scss";
import Tick from "@/assets/icons/tick.svg";
export default function Whyknow() {
    const theme = useTheme();
    const {  base1, neutral } = theme.palette;

    return (
        <Box className={styles.main}>
            <Image
                className={styles.img}
                src={whyknowcrunch}
                alt="diploma"
                layout="responsive"
            />
            <Box className={styles.typo}>
                <Typography variant="h2" sx={{ color: base1.dark4 }}>
                    Why Knowcrunch?
                </Typography>
                <Box
                    className={styles.basicTypo}
                    sx={{ color: neutral.neutral1 }}
                >
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src={Tick}
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000">
                                Expertise You Can Trust
                            </Typography>
                            <Typography
                                variant="body"
                                sx={{ color: neutral.neutral1 }}
                            >
                                Learn from industry leaders with a proven track
                                record in digital training.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src={Tick}
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000">
                                Learn What Matters Most
                            </Typography>
                            <Typography
                                variant="body"
                                sx={{ color: neutral.neutral1 }}
                            >
                                Focus on skills and strategies you can apply
                                immediately.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src={Tick}
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000">
                                Certifications That Add Value
                            </Typography>
                            <Typography
                                variant="body"
                                sx={{ color: neutral.neutral1 }}
                            >
                                Stay ahead with courses reflecting the latest
                                digital trends.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src={Tick}
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000">
                                Always Up-to-Date{" "}
                            </Typography>
                            <Typography
                                variant="body"
                                sx={{ color: neutral.neutral1 }}
                            >
                                Stay ahead with courses reflecting the latest
                                digital trends.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src={Tick}
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000">
                                Real Results{" "}
                            </Typography>
                            <Typography
                                variant="body"
                                sx={{ color: neutral.neutral1 }}
                            >
                                Designed to deliver measurable impact for
                                professionals and businesses.{" "}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
