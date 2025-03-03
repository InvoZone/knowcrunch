"use client";
import { Box } from "@mui/material";
import videoThumb from "@/assets/home/videoThumb.webp";
import Image from "next/image";
export default function VideoCard({ width = "100%", height = "100%" }) {
    return (
        <Box
            sx={{
                position: "relative",
                flexShrink: 0,
                width: { width },
                height: { height },
                minWidth: { width }
            }}
        >
            <Box
                component={"div"}
                position={"absolute"}
                left={"42%"}
                top={"40%"}
            >
                <Image
                    src={"/icons/playBtn.webp"}
                    height={50}
                    width={50}
                    alt="playBtnIcon"
                    loading="lazy"
                    aria-label="Play button"
                />
            </Box>
            <Box component={"div"} borderRadius={4}>
                <Image
                    src={videoThumb}
                    alt='video img'
                    height={228}
                    width={368}
                    className="radius-16"
                    aria-label="Video thumbnail"
                />
            </Box>
        </Box>
    );
}
