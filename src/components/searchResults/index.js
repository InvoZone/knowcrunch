import { Container, Grid2, Typography } from "@mui/material";
import SectionGenerator from "./sectionGenerator";

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
            <SectionGenerator
                heading={"E-Learning Courses"}
                type="course"
                linkTxt={"View courses"}
            />


            {/* Classroom Courses */}
            <SectionGenerator
                heading={"Classroom Courses"}
                type="classroom"
                linkTxt={"View courses"}
            />


            {/* Instructor */}
            <SectionGenerator
                heading={"Instructors"}
                type="instructor"
                linkTxt={"View instructors"}
                cardSizes={{ xs: 10, md: 9, lg: 8 }}
                linkSizes={{ xs: 10, md: 10, lg: 9 }}
            />


            {/* Blogs */}
            <SectionGenerator
                heading={"Blog"}
                type="blog"
                linkTxt={"View blogs"}
                cardSizes={{ xs: 10, md: 10, lg: 9 }}
                linkSizes={{ xs: 10, md: 10, lg: 9 }}
            />


            {/* Podcasts */}
            <SectionGenerator
                heading={"Podcasts"}
                type="podcasts"
                linkTxt={"View podcasts"}
                cardSizes={{ xs: 12, md: 12, lg: 10 }}
                linkSizes={{ xs: 10, md: 10, lg: 10 }}
            />
        </Container >
    );
};

export default SearchResults;