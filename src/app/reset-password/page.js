import PageContainer from "@/components/common/pageContainer";
import ResetPassword from "@/components/auth/resetPassword";

export const metadata = {
    title: "Reset Password",
    description: "Reset your password",
    openGraph: {
        title: "Reset Password",
        description: "Reset your password Description",
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/reset-password`,
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
        title: "Reset Password",
        description: "Reset your password Description",
        images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
    },
};


export default function ResetPasswordPage() {
    return (
        <PageContainer>
            <ResetPassword />
        </PageContainer>
    );
}
