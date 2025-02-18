import PageContainer from "@/components/common/pageContainer";
import ClassroomCourses from "@/components/classroomCourses";

export const metadata = {
    title: "Classroom Courses",
    description: "Classroom courses",
    openGraph: {
        title: "Classroom courses",
        description: "Classroom courses Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/page`,
        siteName: "KnowCrunch",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_LINK}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Open Graph Image Description",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Classroom courses",
        description: "Classroom courses Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function ClassrooomCoursesPage() {
    return (
        <PageContainer>
            <ClassroomCourses />
        </PageContainer>
    );
}
