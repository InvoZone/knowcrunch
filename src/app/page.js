import HomeCom from "@/components/home/homePage";

export const viewport = "width=device-width, initial-scale=1";

export const metadata = {
  title: "Home Page",
  description: "Professional educational courses & training",
  openGraph: {
    title: "Home Page",
    description: "Professional educational courses & training",
    url: `${process.env.NEXT_PUBLIC_SITE_LINK}/`,
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
    title: "Professional educational courses & training",
    description: "Knowcrunch helps you learn, transform and thrive.",
    images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
  },
};

export default function Home() {
  return (
    <HomeCom />
  );
}
