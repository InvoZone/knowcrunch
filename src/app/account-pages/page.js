import PageContainer from "@/components/common/pageContainer";
import AccountPages from "@/components/account-pages";

export const metadata = {
    title: "Account Pages",
    description: "E-learning account pages",
    openGraph: {
        title: "E-learning account pages",
        description: "E-learning account pages Description",
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
        title: "E-learning account pages",
        description: "TE-learning account pages Description",
        images: ["https://yoursite.com/twitter-image.jpg"],
    },
};

export default function AccountsPage() {
    return (
        <PageContainer>
            <AccountPages />
        </PageContainer>
    );
}
