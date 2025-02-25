import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import * as styles from "./course.module.scss";

function About() {

    return (
        <Box sx={{ mb: 3 }}>
            <Box
                sx={{
                    // marginTop: "40px",
                    // padding: "24px",

                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    mb: 1,
                }}
            >
                <Typography variant="h4" sx={{ color: "base1.dark4", mb: 2 }}>
                    Content marketing
                </Typography>
                <Typography
                    variant="body"
                    sx={{
                        color: "neutral.neutral1",
                        mt: -1.5,
                    }}
                >
                    Define and develop digital strategies to deliver business
                    growth through online channels.
                </Typography>
                <Box className={styles.markValue} sx={{ mb: 1, mt: -1 }}>
                    <Typography variant="h5" sx={{ color: "link.main" }}>
                        37.000€
                    </Typography>
                    <Typography variant="body" sx={{ color: "neutral.neutral1" }}>
                        median salary in Greece, for this career path in 2023
                    </Typography>
                </Box>
                <Box className={styles.markValue} sx={{ mb: 1 }}>
                    <Typography variant="h5" sx={{ color: "link.main" }}>
                        85%
                    </Typography>
                    <Typography variant="body" sx={{ color: "neutral.neutral1" }}>
                        of course graduates report positive career impact
                    </Typography>
                </Box>
                <Box
                    className={styles.basicTypo}
                    sx={{
                        color: "neutral.neutral1",
                        mt: 1,
                    }}
                >
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Typography variant="body">
                            Design and manage influencer campaigns to enhance
                            brand visibility and engagement.
                        </Typography>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Typography variant="body">
                            Expertise in social media, content trends,
                            analytics, and influencer relationship-building.
                        </Typography>
                    </Box>
                    <Box className={styles.tickMark}>
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={24}
                            height={24}
                            alt={"Tick"}
                        />
                        <Typography variant="body">
                            High demand across industries as brands prioritise
                            influencer partnerships.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
