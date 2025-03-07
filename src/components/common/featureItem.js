"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function FeatureItem({ title, description }) {
    return (
        <Box sx={{ display: "flex", gap: "8px" }}>
            <Image
                loading="lazy"
                src="/icons/tick.svg"
                width={24}
                height={24}
                alt="Tick"
                aria-label="Tick icon"
            />
            <Box
                component="ul"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    listStyleType: "none",
                }}
            >
                <Typography
                    component="li"
                    variant="titleLg"
                    color="tertiary.main"
                    aria-label={title}
                >
                    {title}
                </Typography>
                <Typography
                    component="li"
                    variant="body"
                    sx={{ color: "neutral.neutral1" }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
