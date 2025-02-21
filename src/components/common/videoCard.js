"use client";
import { Box } from "@mui/material";
import videoThumb from "@/assets/home/videoThumb.webp";
import Image from "next/image";

export default function VideoCard() {
    return (
        <Box
            sx={{
                position: "relative",

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
                />
            </Box>
            <Box component={"div"} borderRadius={4}>
                <Image src={videoThumb} alt='video img' height={228} className="radius-16" />
            </Box>
            {/* <iframe
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
            ></iframe> */}
        </Box>
    );
}
