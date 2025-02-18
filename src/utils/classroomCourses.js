export const sortFilters = [
    {
        id: "course_sort_popularity",
        label: "popularity",
        value: "popularity",
    },
    {
        id: "course_sort_rating",
        label: "raging",
        value: "rating",
    },
    {
        id: "course_sort_newestOldest",
        label: "newestOldest",
        value: "newestOldest",
    },
    {
        id: "course_sort_oldestNewest",
        label: "oldestNewest",
        value: "oldestNewest",
    },
];

export const classroomCourseFilters = [
    {
        id: "classroom_course_location_filter",
        title: "Location",
        value: "location",
        filters: [
            {
                id: "classroom_course_filter_location_athens",
                title: "Athens",
                value: "athens"
            },
            {
                id: "classroom_course_filter_location_thessaloniki",
                title: "Thessaloniki",
                value: "thessaloniki"
            }
        ],
    },
    {
        id: "classroom_course_date_filter",
        title: "Date",
        value: "date",
        filters: [
            {
                id: "classroom_course_date_upcoming_filter",
                title: "Upcoming",
                value: "upcoming"
            },
            {
                id: "classroom_course_date_past_filter",
                title: "Past",
                value: "past"
            },
        ],
    },

];
