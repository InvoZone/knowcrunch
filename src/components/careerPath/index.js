import {
    Box,
    Container,
    Grid2,
    Typography
} from "@mui/material"; // Import necessary dependencies from MUI
import Image from "next/image"; // Import Image component from next/image for image rendering
import CourseCard from "../common/courseCard"; // Import custom component for course cards
import ScrollAbleSection from "../common/scrollAbleSection"; // Import custom component for scrollable sections
import VideoCard from "../common/videoCard"; // Import custom component for video cards
import FeedbackCard from "../common/feedbackCard"; // Import custom component for feedback cards

// CareerPath component definition
const CareerPath = () => {
    // Content object for career path details
    const content = {
        title: "Content marketing",
        description: "Define and develop digital strategies to deliver business growth through online channels.",
        salary: "37.000€",
        salaryDescription: "median salary in Greece, for  this career path in 2023",
        impact: "85%",
        impactDescription: "of course graduates report positive career impact",
        skills: [
            {
                id: "skill1",
                description: "Design and manage influencer campaigns to enhance brand visibility and engagement."
            },
            {
                id: "skill2",
                description: "Expertise in social media, content trends, analytics, and influencer relationship-building."
            },
            {
                id: "skill3",
                description: "High demand across industries as brands prioritise influencer partnerships."
            },
        ],
        courses: [
            {
                id: "course1",
                title: "Content Marketing Fundamentals",
                description: "Learn the basics of content marketing and how to create effective campaigns."
            },
            {
                id: "course2",
                title: "Social Media Strategy",
                description: "Develop a comprehensive social media strategy to reach your target audience."
            },
        ],
        videos: [
            {
                id: "video1",
                title: "Content Marketing Fundamentals",
                description: "Learn the basics of content marketing and how to create effective campaigns."
            },
            {
                id: "video2",
                title: "Social Media Strategy",
                description: "Develop a comprehensive social media strategy to reach your target audience."
            },
            {
                id: "video3",
                title: "Social Media Strategy",
                description: "Develop a comprehensive social media strategy to reach your target audience."
            },
        ],
        testimonials: [
            {
                id: "video1",
                title: "Content Marketing Fundamentals",
                description: "Learn the basics of content marketing and how to create effective campaigns."
            },
            {
                id: "video2",
                title: "Social Media Strategy",
                description: "Develop a comprehensive social media strategy to reach your target audience."
            },
            {
                id: "video3",
                title: "Social Media Strategy",
                description: "Develop a comprehensive social media strategy to reach your target audience."
            },
        ],
    };

    // JSX for the CareerPath component
    return (
        <Container maxWidth='lg'>
            <Grid2
                container
                justifyContent={"center"}
            >
                <Grid2
                    size={{ xs: 12, lg: 6 }}
                >
                    <Box
                        component='div'
                        px={{ xs: 1, md: 3 }}
                        py={{ xs: 0, md: 2 }}
                    >
                        <Typography
                            variant="h2"
                            color="base1.dark4"
                        >
                            {content.title}
                        </Typography>
                        <Typography
                            variant="titleMd"
                            color="neutral.neutral1"
                        >
                            {content.description}
                        </Typography>

                        <Typography
                            variant="h5"
                            color="base1.default"
                            pt={2}
                        >
                            {content.salary}
                        </Typography>
                        <Typography
                            variant="titleMd"
                            color="neutral.neutral1"
                        >
                            {content.salaryDescription}
                        </Typography>

                        <Typography
                            variant="h5"
                            color="base1.default"
                            pt={2}
                        >
                            {content.impact}
                        </Typography>
                        <Typography
                            variant="titleMd"
                            color="neutral.neutral1"
                        >
                            {content.impactDescription}
                        </Typography>

                        {content.skills.map((skill) => (
                            <Box
                                component={"div"}
                                key={skill.id}
                                pt={2}
                                display={"flex"}
                                gap={1}
                            >
                                <Image
                                    width={24}
                                    height={24}
                                    src={"/icons/checkIcon.svg"}
                                    alt="check icon"
                                    loading="lazy"
                                />
                                <Typography
                                    variant="titleMd"
                                    color="neutral.neutral1"
                                >
                                    {skill.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid2>
                <Grid2
                    size={{ xs: 12, md: 12, lg: 6 }}
                    spacing={2}
                    justifyContent={{ xs: "flex-start", md: "center" }}
                    display={"flex"}
                    sx={{ scrollbarWidth: "none", overflowX: "auto" }}
                >
                    <Box
                        component={"div"}
                        display={"flex"}
                        gap={{ xs: 3, lg: 2 }}
                        width={1152}
                        pl={{ xs: 4, md: 0 }}
                        pt={{ xs: 3, lg: 0 }}
                        justifyContent={"center"}
                    >

                        {content.courses.map((course) => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                width={{ xs: 298, lg: 282 }}
                            />
                        ))}
                    </Box>
                </Grid2>
                <Grid2
                    size={{ xs: 12 }}>
                    <Box
                        component={"div"}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        pt={2}
                        pr={2}
                    >
                        <Typography
                            variant="h6"
                            color="base1.default"
                        >
                            View courses
                        </Typography>
                    </Box>
                </Grid2>

                <Grid2
                    size={{ xs: 12 }} px={{ xs: 0, md: 2 }}>
                    <ScrollAbleSection title={"Video testimonials"}>
                        {content.videos.map((course) => (
                            <VideoCard
                                key={course.id}
                                width={368}
                            />
                        ))}
                    </ScrollAbleSection>
                </Grid2>

                <Grid2
                    size={{ xs: 12 }} px={{ xs: 0, md: 2 }} pt={2}>
                    <ScrollAbleSection title={"Testimonials"}>
                        {content.testimonials.map((course) => (
                            <FeedbackCard
                                key={course.id}
                                width={361}
                            />
                        ))}
                    </ScrollAbleSection>
                </Grid2>
            </Grid2>
        </Container >
    );
};

export default CareerPath;