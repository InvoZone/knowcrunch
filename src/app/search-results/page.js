import PageContainer from "@/components/common/pageContainer";
import SearchResults from "@/components/searchResults";

export const metadata = {
    title: "Search Results",
    description: "Explore your Search Results",
    openGraph: {
        title: "Search Results",
        description: "Explore your Search Results Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/career-path`,
        siteName: "Knowcrunch",
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
        title: "Search Results",
        description: "Explore your Search Results Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function SearchResultsPage() {
    return (
        <PageContainer>
            <SearchResults />
        </PageContainer>
    );
}
