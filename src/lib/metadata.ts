import type { Metadata } from "next";

// Define the types for our metadata parameters
export type MetadataProps = {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
    type?: "website";
};

/**
 * Generate metadata for a page with custom values
 */
export function generateMetadata({
    title,
    description,
    image,
    canonical,
    type = "website",
}: MetadataProps): Metadata {
    // Construct the image URL with absolute path
    const siteLink = process.env.NEXT_PUBLIC_SITE_LINK;
    const imageUrl = image
        ? new URL(image.startsWith("http") ? image : `${siteLink}${image}`)
        : new URL(`${siteLink}/og-image.jpg`);

    return {
        // If title is provided, it will be used in the template
        ...(title && { title }),
        // Override description if provided
        ...(description && { description }),

        // Open Graph metadata
        openGraph: {
            title: title,
            description: description,
            url: canonical ?? siteLink,
            siteName: "Knowcrunch",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type,
        },
        // Twitter metadata
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [imageUrl.toString()],
            creator: "@Knowcrunch",
        },
        other: {
            "twitter:domain": `${siteLink}`,
            "twitter:url": `${siteLink}`,
        },
        // Canonical URL
        ...(canonical && {
            alternates: {
                canonical,
            },
        }),
    };
}
