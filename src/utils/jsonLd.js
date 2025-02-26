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