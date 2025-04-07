import type { Metadata } from 'next';

export type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website';
};

export function generateMetadata({
  title,
  description,
  image,
  canonical,
  type = 'website'
}: MetadataProps): Metadata {
  const siteLink = process.env.NEXT_PUBLIC_SITE_LINK;
  const imageUrl = image
    ? new URL(image.startsWith('http') ? image : `${siteLink}${image}`)
    : new URL(`${siteLink}/icons/Hero.webp`);

  return {
    ...(title && { title }),
    ...(description && { description }),

    openGraph: {
      title,
      description,
      url: canonical ?? siteLink,
      siteName: 'Knowcrunch',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl.toString()],
      creator: '@Knowcrunch'
    },
    other: {
      'twitter:domain': `${siteLink}`,
      'twitter:url': `${siteLink}`
    },
    ...(canonical && {
      alternates: {
        canonical
      }
    })
  };
}
