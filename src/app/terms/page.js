import PageContainer from "@/components/common/pageContainer";
import Terms from "@/components/terms";

export const metadata = {
    title: "Terms and Conditions",
    description: "View our terms and conditions",
    openGraph: {
        title: "Terms and Conditions",
        description: "View our terms and conditions Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/terms`,
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
        title: "Terms and Conditions",
        description: "View our terms and conditions Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function TermsPage() {
    return (
        <PageContainer>
            <Terms />
        </PageContainer>
    );
}