import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

function Learn() {
    return (
        <Box sx={{ marginTop: "32px", mb: 3 }}>
            <Typography variant="h4" sx={{ color: "base1.dark4", mb: 2 }}>
                What you’ll learn
            </Typography>
            <Grid2
                container
                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                sx={{ display: "flex" }}
            >
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} item="true">
                    <Box
                        sx={{
                            color: "neutral.neutral1",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            padding: "8px",
                            mt: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                loading="lazy"
                                src="/icons/tick.svg"
                                width={18}
                                height={18}
                                alt={"Tick"}
                            />
                            <Typography
                                variant="titleMd"
                                sx={{ color: "neutral.neutral1" }}
                            >
                                Unlock the secrets of SEO, social media, and
                                email marketing to maximize your brand's online
                                visibility and influence.{" "}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                loading="lazy"
                                src="/icons/tick.svg"
                                width={18}
                                height={18}
                                alt={"Tick"}
                            />
                            <Typography
                                variant="titleMd"
                                sx={{ color: "neutral.neutral1" }}
                            >
                                Learn to create impactful digital campaigns that
                                deliver real results.{" "}
                            </Typography>
                        </Box>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} item="true">
                    <Box
                        sx={{
                            color: "neutral.neutral1",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            padding: "8px",
                            mt: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                loading="lazy"
                                src="/icons/tick.svg"
                                width={18}
                                height={18}
                                alt={"Tick"}
                            />
                            <Typography
                                variant="titleMd"
                                sx={{ color: "neutral.neutral1" }}
                            >
                                Boost engagement, and drive measurable results.{" "}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                loading="lazy"
                                src="/icons/tick.svg"
                                width={18}
                                height={18}
                                alt={"Tick"}
                            />
                            <Typography
                                variant="titleMd"
                                sx={{ color: "neutral.neutral1" }}
                            >
                                Gain hands-on experience with cutting-edge
                                digital tools and analytics to track performance{" "}
                            </Typography>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Learn;
