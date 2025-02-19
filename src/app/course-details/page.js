import PageContainer from "@/components/common/pageContainer";
import Course from "@/components/courseDetail";

export const metadata = {
    title: "Course Details",
    description: "Masterclass in Influencer Marketing Strategy",
    openGraph: {
        title: "Masterclass in Influencer Marketing Strategy",
        description: "Masterclass in Influencer Marketing Strategy",
        url: "https://yoursite.com/page",
        siteName: "KnowCrunch",
        images: [
            {
                url: "https://yoursite.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Open Graph Image Description",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Masterclass in Influencer Marketing Strategy",
        description: "Masterclass in Influencer Marketing Strategy",
        images: ["https://yoursite.com/twitter-image.jpg"],
    },
};

export default function CoursesPage() {
    return (
        <PageContainer>
            <Course />
        </PageContainer>
    );
}
