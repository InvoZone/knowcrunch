"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import whyknowcrunch from "@/assets/course/whykowcrunchimg.webp";
import styles from "./whykowcruch.module.scss";
export default function Whyknow() {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;

    return (
        <Box className={styles.main}>
            <Box className={styles.imgBox}>
                <Image
                    className={styles.img}
                    src={whyknowcrunch}
                    alt="diploma"
                    priority
                    aria-label="Diploma image"
                />
            </Box>
            <Box className={styles.typo}>
                <Typography variant="h2" sx={{ color: base1.dark4 }} component={"h4"}>
                    Why Knowcrunch?
                </Typography>
                <Box
                    sx={{ color: neutral.neutral1, display: "flex", flexDirection: "column", gap: "16px" }}
                >
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                            aria-label="Tick icon"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000" aria-label="Expertise You Can Trust">
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
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                            aria-label="Tick icon"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000" aria-label="Learn What Matters Most">
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
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                            aria-label="Tick icon"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000" aria-label="Certifications That Add Value">
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
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                            aria-label="Tick icon"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000" aria-label="Always Up-to-Date">
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
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                            aria-label="Tick icon"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "9px",
                            }}
                        >
                            <Typography variant="titleLg" color="#000000" aria-label="Real Results">
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
