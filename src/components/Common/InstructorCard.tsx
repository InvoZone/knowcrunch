"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Define the props for the InstructorCard component
interface InstructorCardProps {
    img: string;
    name: string;
    title: string;
    company: string;
    mx?: number;
    width: string | number;
    height: string | number;
}

// InstructorCard component
const InstructorCard: React.FC<InstructorCardProps> = ({
    img,
    name,
    title,
    company,
    mx = 0,
    width,
    height,
}) => {
    // Render the InstructorCard component
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
                width,
                height,
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
                    src={img}
                    alt={`Profile of ${name}`}
                    title={`Profile of ${name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    loading="lazy"
                    aria-label={`Profile image of ${name}`}
                />
            </Box>

            <Typography sx={{ color: "tertiary.main" }} variant="titleLg" component="h3" pt={1}>
                {name}
            </Typography>
            <Typography sx={{ color: "neutral.neutral1" }} variant="body" color="text.secondary">
                {title}
            </Typography>
            <Typography sx={{ color: "tertiary.main" }} variant="body" pb={1}>
                {company}
            </Typography>
        </Box>
    );
};

// Export the InstructorCard component
export default InstructorCard;
