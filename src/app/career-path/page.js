import PageContainer from "@/components/common/pageContainer";
import CareerPath from "@/components/careerPath";

/**
 * Metadata for the Career Path page.
 * This object contains metadata for the Career Path page, including title, description, Open Graph, and Twitter metadata.
 * @type {Object}
 */
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

/**
 * CareerPathPage component.
 * This component renders the Career Path page within a PageContainer.
 * @returns {JSX.Element} The Career Path page component.
 */
export default function CareerPathPage() {
    return (
        <PageContainer>
            <CareerPath />
        </PageContainer>
    );
}
