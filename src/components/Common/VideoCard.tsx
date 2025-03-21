"use client";
import { Box } from "@mui/material";
import videoThumb from "@/assets/testimonial/videoThumb.webp";
import Image from "next/image";

interface VideoCardProps {
    width?: string | number;
    height?: string | number;
}

const VideoCard: React.FC<VideoCardProps> = ({ width = "100%", height = "100%" }) => {
    return (
        <Box
            sx={{
                position: "relative",
                flexShrink: 0,
                width,
                height,
                minWidth: width,
            }}
        >
            <Box component={"div"} position={"absolute"} left={"42%"} top={"37%"}>
                <Image
                    src={"/icons/playBtn.webp"}
                    height={64}
                    width={64}
                    alt="playBtnIcon"
                    loading="lazy"
                    aria-label="Play button"
                    title="Play button"
                />
            </Box>
            <Box component={"div"} borderRadius={4}>
                <Image
                    src={videoThumb}
                    alt="video img"
                    height={228}
                    width={368}
                    className="radius-16"
                    aria-label="Video thumbnail"
                    title="Video thumbnail"
                />
            </Box>
        </Box>
    );
};

export default VideoCard;
