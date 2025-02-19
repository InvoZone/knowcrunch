import PageContainer from "@/components/common/pageContainer";
import CareerPath from "@/components/careerPath";

export const metadata = {
    title: "Career Path",
    description: "Explore your career path",
    openGraph: {
        title: "Career Path",
        description: "Explore your career path Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/career-path`,
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
        title: "Career Path",
        description: "Explore your career path Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function CareerPathPage() {
    return (
        <PageContainer>
            <CareerPath />
        </PageContainer>
    );
}
