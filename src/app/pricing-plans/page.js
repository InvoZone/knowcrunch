import PageContainer from "@/components/common/pageContainer";
import PricingPlans from "@/components/pricingPlans";

export const metadata = {
    title: "Pricing Plans",
    description: "View our pricing plans",
    openGraph: {
        title: "Pricing Plans",
        description: "View our pricing plans Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/pricing-plans`,
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
        title: "Pricing Plans",
        description: "View our pricing plans Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function PricingPlanPage() {
    return (
        <PageContainer>
            <PricingPlans />
        </PageContainer>
    );
}
