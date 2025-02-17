import PageContainer from "@/components/common/pageContainer";
import Courses from "@/components/courses";

export const metadata = {
    title: "Courses",
    description: "E-learning courses",
    openGraph: {
        title: "E-learning courses",
        description: "E-learning courses Description",
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
        title: "E-learning courses",
        description: "TE-learning courses Description",
        images: ["https://yoursite.com/twitter-image.jpg"],
    },
};

export default function CoursesPage() {
    return (
        <PageContainer>
            <Courses />
        </PageContainer>
    );
}
