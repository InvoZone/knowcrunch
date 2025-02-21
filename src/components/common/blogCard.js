// Import necessary dependencies from React and Material-UI
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Import assets and icons
import blogThumb from "@/assets/search/blogThumb.webp";
import { Box } from "@mui/material";
import CustomBtn from "./customBtn";

export default function BlogCard() {
    return (
        <Box
            sx={{
                backgroundColor: "secondary.main",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "neutral.neutral9",
                minHeight: 360,
            }}
            p={1}
        >
            {/* Course thumbnail section with play button overlay */}
            <Box
                component={"div"}
                sx={{
                    width: "100%",
                    height: 191,
                    borderRadius: 1,
                    position: "relative",
                }}
            >
                <Image
                    src={blogThumb}
                    height={100}
                    className="imgWidth"
                    alt="course thumb"
                    priority
                />
            </Box>

            {/* Course title */}
            <Typography
                gutterBottom
                variant="titleLg"
                component={"div"}
                pt={1}
                color="tertiary"
            >
                Create your own GPTs
            </Typography>

            {/* Course description */}
            <Typography
                gutterBottom
                variant="body2"
                fontWeight={400}
                component={"div"}
                color="secondary.dark"
            >
                An exceedingly advanced training program that provides
                comprehensive lectures
            </Typography>

            {/* Course type badge */}
            <CustomBtn
                title={"About AI"}
                variant="outlined"
                sx={{
                    height: 24,
                    border: "1px solid",
                    backgroundColor: "tertiary",
                    borderColor: "neutral.neutral9",
                    borderRadius: "4px",
                    mb: 1,
                    mt: 0.5,
                }}
                txtVariant="body2"
                color="neutral.neutral2"
            />
            <Typography variant="body1" color="neutral.neutral2">Published: 16 May 2024</Typography>

        </Box >
    );
}
