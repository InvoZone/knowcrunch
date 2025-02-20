import { Container, Grid2, Typography } from "@mui/material";
import CourseCard from "../common/courseCard";
import ClassroomCard from "../common/classroomCard";
import InstructorCard from "../common/istructors";
import img1 from "@/assets/course/instructor1.webp";

const SearchResults = () => {
    return (
        <Container maxWidth={"lg"}>
            <Grid2 container justifyContent={"center"}>
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                    <Typography variant="h1" color="tertiary" pb={2}>
                        Search results for{" "}
                        <Typography component={"span"} variant="h1" color="base1.default">
                            masterclass
                        </Typography>
                    </Typography>
                    <Typography variant="h5" color="secondary.dark" pb={3}>
                        <Typography component={"span"} variant="h5" color="base1.default">3 result(s) {" "}</Typography>
                        were found containing the term
                        <Typography component={"span"} variant="h5" color="base1.default">{" "}masterclass.{" "}</Typography>
                        Try again.
                    </Typography>
                </Grid2>
            </Grid2>

            {/* E-Learning Courses */}
            <Grid2 container justifyContent={"center"} pb={3}>
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                    <Typography variant={"h3"} color={"tertiary"} pb={3}>{"E-Learning Courses"}</Typography>
                </Grid2>
                <Grid2 container size={{ xs: 10, md: 10, lg: 9 }} justifyContent={"center"} spacing={3}>
                    {[...new Array(3).fill()]?.map((el, ind) => (
                        <Grid2
                            key={`course_${ind}`}
                            size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                            display={{ xs: ind === 2 ? "none" : "flex", lg: "flex" }}
                        >
                            <CourseCard discountTag={true} />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 10, md: 10, lg: 9 }} display={"flex"} justifyContent={"flex-end"} pt={2}>

                    <Typography
                        variant="h6"
                        color="base1.default"
                    >
                        View courses
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Classroom Courses */}
            <Grid2 container justifyContent={"center"} pb={3}>
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                    <Typography variant={"h3"} color={"tertiary"} pb={3}>{"Classroom Courses"}</Typography>
                </Grid2>
                <Grid2 container size={{ xs: 10, md: 10, lg: 9 }} justifyContent={"center"} spacing={3}>
                    {[...new Array(3).fill()]?.map((el, ind) => (
                        <Grid2
                            key={`course_${ind}`}
                            size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                            display={{ xs: ind === 2 ? "none" : "flex", lg: "flex" }}
                        >
                            <ClassroomCard />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 10, md: 10, lg: 9 }} display={"flex"} justifyContent={"flex-end"} pt={2}>

                    <Typography
                        variant="h6"
                        color="base1.default"
                    >
                        View courses
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Instructor */}
            <Grid2 container justifyContent={"center"} pb={3}>
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                    <Typography variant={"h3"} color={"tertiary"} pb={3}>{"Instructors"}</Typography>
                </Grid2>
                <Grid2 container size={{ xs: 10, md: 9, lg: 8 }} justifyContent={"center"} spacing={3}>
                    {[...new Array(3).fill()]?.map((el, ind) => (
                        <Grid2
                            key={`course_${ind}`}
                            size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                            display={{ xs: ind === 2 ? "none" : "flex", lg: "flex" }}
                        >
                            <InstructorCard
                                profileImage={img1}
                                title="Managing Director"
                                company="Olive Creative Marketing House"
                                name="Jonathan Martin Johnson"
                            />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 10, md: 10, lg: 9 }} display={"flex"} justifyContent={"flex-end"} pt={2}>

                    <Typography
                        variant="h6"
                        color="base1.default"
                    >
                        View Instructors
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Blogs */}
            <Grid2 container justifyContent={"center"} pb={3}>
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                    <Typography variant={"h3"} color={"tertiary"} pb={3}>{"Blog"}</Typography>
                </Grid2>
                <Grid2 container size={{ xs: 10, md: 10, lg: 9 }} justifyContent={"center"} spacing={3}>
                    {[...new Array(3).fill()]?.map((el, ind) => (
                        <Grid2
                            key={`course_${ind}`}
                            size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                            display={{ xs: ind === 2 ? "none" : "flex", lg: "flex" }}
                        >
                            <ClassroomCard />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 10, md: 10, lg: 9 }} display={"flex"} justifyContent={"flex-end"} pt={2}>

                    <Typography
                        variant="h6"
                        color="base1.default"
                    >
                        View blogs
                    </Typography>
                </Grid2>
            </Grid2>

        </Container >
    );
};

export default SearchResults;