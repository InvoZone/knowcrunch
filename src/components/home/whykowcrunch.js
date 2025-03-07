"use client";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import whyknowcrunch from "@/assets/course/whykowcrunchimg.webp";
import styles from "./whykowcruch.module.scss";
import FeatureItem from "../common/featureItem";
export default function Whyknow() {
    const featureData = [
        {
            title: "Expertise You Can Trust",
            description:
                "Learn from industry leaders with a proven track record in digital training.",
        },
        {
            title: "Learn What Matters Most",
            description:
                "Focus on skills and strategies you can apply immediately.",
        },
        {
            title: "Certifications That Add Value",
            description:
                "Stay ahead with courses reflecting the latest digital trends.",
        },
        {
            title: "Always Up-to-Date",
            description:
                "Stay ahead with courses reflecting the latest digital trends.",
        },
        {
            title: "Real Results",
            description:
                "Designed to deliver measurable impact for professionals and businesses.",
        },
    ];

    return (
        <Container maxWidth="lg">
            <Box
                className={styles.main}
                py={{ xs: 4, md: 6 }}
                px={{ xs: 0, md: 0 }}
            >
                <Box
                    width={{ xs: "100%", lg: 568, xl: 608 }}
                    height={{ xs: 328, md: 471 }}
                    position={"relative"}
                >
                    <Image
                        className={styles.img}
                        src={whyknowcrunch}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        alt="diploma"
                        loading="lazy"
                        aria-label="Diploma image"
                    />
                </Box>
                <Box className={styles.typo}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            color: "base1.dark4",
                            fontSize: "40px !important",
                        }}
                    >
                        Why Knowcrunch?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        {featureData.map((feature, index) => (
                            <FeatureItem
                                key={`feature_${index}`}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
