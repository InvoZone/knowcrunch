export const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${process.env.NEXT_PUBLIC_SITE_LINK}`
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Courses",
            "item": `${process.env.NEXT_PUBLIC_SITE_LINK}/courses`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Classroom Courses",
            "item": `${process.env.NEXT_PUBLIC_SITE_LINK}/classroom-courses`
        }
    ]
};


export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Knowcrunch",
    "legalName": "Knowcrunch INC",
    "url": `${process.env.NEXT_PUBLIC_SITE_LINK}`,
    "logo": `${process.env.NEXT_PUBLIC_SITE_LINK}/logo.webp`,
    "foundingDate": "2013",
    "founders": [
        {
            "@type": "Person",
            "name": "Apostolis Aivalis"
        }
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "2035 Sunset Lake Road",
        "addressLocality": "Suite B2 Newark",
        "addressRegion": "Delaware",
        "postalCode": "19702",
        "addressCountry": "USA"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "[+302103007214]",
        "email": "info@knowcrunch.com"
    },
    "sameAs": [
        "https://www.facebook.com/Knowcrunch",
        "https://twitter.com/knowcrunch",
        "https://www.instagram.com/knowcrunch/",
        "https://www.linkedin.com/school/knowcrunch/",
        "https://www.youtube.com/Knowcrunch",
        "https://www.tiktok.com/@knowcrunch?",
        "https://knowcrunch.medium.com/",
        "https://gr.pinterest.com/knowcrunch/",
        "https://open.spotify.com/user/2bw3mu1iewpe7a3dzp0v3wdzj"
    ]
};

export const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Knowcrunch - Professional Digital Marketing Courses & Training",
    "url": `${process.env.NEXT_PUBLIC_SITE_LINK}`,
    "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "#main-content",
        "description": "Knowcrunch provides professional digital marketing courses and training for individuals and businesses."
    }
};
