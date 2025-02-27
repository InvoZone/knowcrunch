"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";

export default function ProfileCard({ profileImage, name, title, company, mx = 0, width, height }) {
    const theme = useTheme();
    const { neutral } = theme.palette;

    return (
        <Box
            sx={{
                borderRadius: "16px",
                border: "1px solid",
                borderColor: "neutral.neutral8",
                minHeight: "366px",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: width,
                height:height,
                flexShrink: 0,
            }}
            p={1}
            mx={mx}
        >
            <Box
                sx={{
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%",
                }}
            >
                <Image
                    src={profileImage}
                    alt="Profile Image"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    loading="lazy"
                    aria-label="Profile image"
                />
            </Box>

            <Typography
                sx={{ color: "#000000" }}
                variant="titleLg"
                component="div"
                pt={1}
            >
                {name}
            </Typography>
            <Typography
                sx={{ color: neutral.neutral1 }}
                variant="body"
                color="text.secondary"
            >
                {title}
            </Typography>
            <Typography
                sx={{ color: "#000000" }}
                variant="body"
                color="text.secondary"
                pb={1}
            >
                {company}
            </Typography>
        </Box>
    );
}
