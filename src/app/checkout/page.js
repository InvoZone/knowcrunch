import PageContainer from "@/components/common/pageContainer";
import { CheckoutMainComponent } from "@/components/checkout";

export const metadata = {
    title: "Checkout",
    description: "Complete your purchase",
    openGraph: {
        title: "Checkout",
        description: "Complete your purchase Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/checkout`,
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
        title: "Checkout",
        description: "Complete your purchase Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function CheckoutPage() {
    return (
        <PageContainer>
            <CheckoutMainComponent />
        </PageContainer>
    );
}