"use client"; // Enable client-side rendering
import { Container, Grid2, Typography } from "@mui/material"; // Import necessary dependencies
import SectionGenerator from "./sectionGenerator"; // Import custom component for section generation
import { useState } from "react"; // Import useState hook for state management

const SearchResults = () => {
    const [specific, setSpecific] = useState(false); // State to manage specific search detail visibility

    // Function to handle specific search detail visibility
    const handleSpecificSearch = (detail) => {
        setSpecific(detail);
    };

    return (
        <Container maxWidth={"lg"}> {/* Container for search results */}
            <Grid2 container justifyContent={"center"}> {/* Grid container for center alignment */}
                <Grid2 size={{ xs: 12, md: 12, lg: 10 }}> {/* Grid size adjustments for different screen sizes */}
                    <Typography variant="h1" color="tertiary" pb={2}> {/* Search results heading */}
                        Search results for{" "}
                        <Typography component={"span"} variant="h1" color="base1.default">
                            masterclass
                        </Typography>
                    </Typography>
                    <Typography variant="h5" color="secondary.dark" pb={3}> {/* Search results description */}
                        <Typography component={"span"} variant="h5" color="base1.default">3 result(s) {" "}</Typography>
                        were found containing the term
                        <Typography
                            component={"span"} variant="h5"
                            color="base1.default">{" "}masterclass.{" "}
                        </Typography>
                        <Typography
                            component={"span"} variant="h5"
                            color="secondary.dark" sx={{ cursor: "pointer" }}
                            onClick={() => setSpecific(false)}> {/* Link to try again */}
                            Try again.
                        </Typography>
                    </Typography>
                </Grid2>
            </Grid2>
            {!specific ? <> {/* Conditional rendering for specific search detail */}
                {/* E-Learning Courses */}
                <SectionGenerator
                    heading={"E-Learning Courses"}
                    type="course"
                    linkTxt={"View courses"}
                    data={3}
                    handleSpecificSearch={handleSpecificSearch}
                />

                {/* Classroom Courses */}
                <SectionGenerator
                    heading={"Classroom Courses"}
                    type="classroom"
                    linkTxt={"View courses"}
                    data={3}
                    handleSpecificSearch={handleSpecificSearch}
                />

                {/* Instructor */}
                <SectionGenerator
                    heading={"Instructors"}
                    type="instructor"
                    linkTxt={"View instructors"}
                    cardSizes={{ xs: 10, md: 9, lg: 8 }}
                    linkSizes={{ xs: 10, md: 10, lg: 9 }}
                    data={3}
                    handleSpecificSearch={handleSpecificSearch}
                />

                {/* Blogs */}
                <SectionGenerator
                    heading={"Blog"}
                    type="blog"
                    linkTxt={"View blogs"}
                    cardSizes={{ xs: 10, md: 10, lg: 9 }}
                    linkSizes={{ xs: 10, md: 10, lg: 9 }}
                    data={3}
                    handleSpecificSearch={handleSpecificSearch}
                />

                {/* Podcasts */}
                <SectionGenerator
                    heading={"Podcasts"}
                    type="podcasts"
                    linkTxt={"View podcasts"}
                    cardSizes={{ xs: 12, md: 12, lg: 10 }}
                    linkSizes={{ xs: 10, md: 10, lg: 10 }}
                    data={3}
                    handleSpecificSearch={handleSpecificSearch}
                />
            </> :
                <SectionGenerator
                    heading={specific?.heading}
                    type={specific?.type}
                    linkTxt={""}
                    data={9}
                />
            }

        </Container >
    );
};

export default SearchResults;