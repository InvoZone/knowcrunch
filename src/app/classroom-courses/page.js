// Import necessary components for the page
import PageContainer from "@/components/common/pageContainer";
import ClassroomCourses from "@/components/classroomCourses";

// Define metadata for the page
export const metadata = {
    // Title of the page
    title: "Classroom Courses",
    // Description of the page
    description: "Classroom courses",
    // Open Graph metadata
    openGraph: {
        // Title for Open Graph
        title: "Classroom courses",
        // Description for Open Graph
        description: "Classroom courses Description",
        // URL of the page
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/page`,
        // Site name
        siteName: "KnowCrunch",
        // Images for Open Graph
        images: [
            {
                // URL of the Open Graph image
                url: `${process.env.NEXT_PUBLIC_SITE_LINK}/og-image.jpg`,
                // Width of the Open Graph image
                width: 1200,
                // Height of the Open Graph image
                height: 630,
                // Alt text for the Open Graph image
                alt: "Open Graph Image Description",
            },
        ],
        // Type of the Open Graph object
        type: "website",
    },
    // Twitter metadata
    twitter: {
        // Card type for Twitter
        card: "summary_large_image",
        // Title for Twitter
        title: "Classroom courses",
        // Description for Twitter
        description: "Classroom courses Description",
        // Image URL for Twitter
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};

// Define the ClassrooomCoursesPage component
export default function ClassrooomCoursesPage() {
    // Return the PageContainer component with the ClassroomCourses component inside
    return (
        <PageContainer>
            <ClassroomCourses />
        </PageContainer>
    );
}
