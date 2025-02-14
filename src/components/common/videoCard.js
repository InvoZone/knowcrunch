"use client";
import { Box, Typography, useTheme } from "@mui/material";
export default function VideoCard({ videoUrl, title }) {
    const theme = useTheme();
    const { primary, base2, base1, link, neutral } = theme.palette;
    return (
        <Box
            sx={{
                minHeight: "auto",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}
            p={1}
            // mx={1}
        >
            <iframe
                width="100%"
                height="228px"
                src="https://www.youtube.com/embed/QusJ4fpWQwA?si=93qGHlehkoGyUaCt"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: "16px", }}
            ></iframe>
        </Box>
    );
}
