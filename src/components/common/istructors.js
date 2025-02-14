"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";

export default function ProfileCard({ profileImage, name, title, company }) {
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
            }}
            p={1}
            mx={2}
        >
            <Box
                sx={{
                    width: "100%",
                    height: 257,
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Image
                    src={profileImage}
                    alt="Profile Image"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>

            <Typography
                sx={{ color: "#000000" }}
                variant="titleLg"
                component="div"
                mt={0.5}
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
            >
                {company}
            </Typography>
        </Box>
    );
}
