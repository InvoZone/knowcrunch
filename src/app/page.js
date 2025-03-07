import HomeComponent from "@/components/home";

export const viewport = "width=device-width, initial-scale=1";

export const metadata = {
  title: "Knowcrunch - Professional digital marketing courses & training",
  description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_LINK}/`,
  },
  openGraph: {
    title: "Knowcrunch - Professional digital marketing courses & training",
    description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
    url: `${process.env.NEXT_PUBLIC_SITE_LINK}/`,
    siteName: "Knowcrunch",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/icons/Hero.webp`,
        width: 1200,
        height: 630,
        alt: "Open Graph Image Description",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Knowcrunch",
    title: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
    description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
    images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/icons/Hero.webp`],
  },
  other: {
    "twitter:domain": `${process.env.NEXT_PUBLIC_SITE_LINK}`,
    "twitter:url": `${process.env.NEXT_PUBLIC_SITE_LINK}`,
  },
};

export default function Home() {
  return (
    <HomeComponent />
  );
}
