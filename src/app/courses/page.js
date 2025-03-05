// Import necessary components for the page
import PageContainer from "@/components/common/pageContainer";
import Courses from "@/components/courses";

// Define metadata for the page
export const metadata = {
    title: "Courses", // Title of the page
    description: "E-learning courses", // Description of the page
    openGraph: {
        title: "E-learning courses", // Open Graph title
        description: "E-learning courses Description", // Open Graph description
        url: "https://yoursite.com/page", // URL of the page
        siteName: "Knowcrunch", // Site name
        images: [
            {
                url: "https://yoursite.com/og-image.jpg", // URL of the Open Graph image
                width: 1200, // Width of the Open Graph image
                height: 630, // Height of the Open Graph image
                alt: "Open Graph Image Description" // Alt text for the Open Graph image
            }
        ],
        type: "website" // Type of the Open Graph object
    },
    twitter: {
        card: "summary_large_image", // Twitter card type
        title: "E-learning courses", // Twitter title
        description: "TE-learning courses Description", // Twitter description
        images: ["https://yoursite.com/twitter-image.jpg"] // URL of the Twitter image
    }
};

// Define the CoursesPage component
export default function CoursesPage() {
    // Return the PageContainer component with the Courses component inside
    return <PageContainer><Courses /></PageContainer>;
}
