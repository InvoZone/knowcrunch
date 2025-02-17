"use client";
import { Box } from "@mui/material";
export default function VideoCard() {
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
        >
            <iframe
                width="100%"
                height="228px"
                src="https://www.youtube-nocookie.com/embed/QusJ4fpWQwA?si=93qGHlehkoGyUaCt&modestbranding=1&rel=0&controls=1&disablekb=1"
                title="YouTube video player"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                    borderRadius: "16px",
                    border: "0",
                    overflow: "hidden",
                }}
                loading="lazy"
            ></iframe>
        </Box>
    );
}
