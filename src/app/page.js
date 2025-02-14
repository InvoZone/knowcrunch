import Image from "next/image";
import { Box, Typography } from "@mui/material";
import HomeCom from "@/components/home/homePage";

export const metadata = {
    title: "Home Page",
    description: "Professional educational courses & training",
    openGraph: {
        title: "Home Page",
        description: "Professional educational courses & training",
        url: "https://yoursite.com/",
        siteName: "KnowCrunch",
        images: [
            {
                url: "https://yoursite.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Open Graph Image Description"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional educational courses & training",
        description: "Knowcrunch helps you learn, transform and thrive.",
        images: ["https://yoursite.com/twitter-image.jpg"]
    }
};

export default function Home() {
    return (
        <>
        <HomeCom/>
        </>
    );
}
