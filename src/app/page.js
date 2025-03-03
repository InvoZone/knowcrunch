// Import the HomeComponent component from the homePage directory
import HomeComponent from "@/components/home";

// Define the viewport settings for the page
export const viewport = "width=device-width, initial-scale=1";

// Define metadata for the page
export const metadata = {
  // Title of the page
  title: "Home Page",
  // Description of the page
  description: "Professional educational courses & training",
  // Open Graph metadata
  openGraph: {
    // Title for Open Graph
    title: "Home Page",
    // Description for Open Graph
    description: "Professional educational courses & training",
    // URL of the page
    url: `${process.env.NEXT_PUBLIC_SITE_LINK}/`,
    // Site name
    siteName: "KnowCrunch",
    // Images for Open Graph
    images: [
      {
        // URL of the Open Graph image
        url: `${process.env.NEXT_PUBLIC_SITE_LINK}/og-image.jpg`,
        // Width of the Open Graph image
        width: 1200,
        // Height of the Open Graph image
        height: 630,
        // Alt text for the Open Graph image
        alt: "Open Graph Image Description",
      },
    ],
    // Type of the Open Graph object
    type: "website",
  },
  // Twitter metadata
  twitter: {
    // Card type for Twitter
    card: "summary_large_image",
    // Title for Twitter
    title: "Professional educational courses & training",
    // Description for Twitter
    description: "Knowcrunch helps you learn, transform and thrive.",
    // Image URL for Twitter
    images: [`${process.env.NEXT_PUBLIC_SITE_LINK}/twitter-image.jpg`],
  },
};

// Define the Home component
export default function Home() {
  // Return the HomeComponent component
  return (
    <HomeComponent />
  );
}
