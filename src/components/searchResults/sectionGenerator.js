import { Grid2, Typography } from "@mui/material";
import CourseCard from "../common/courseCard";
import ClassroomCard from "../common/classroomCard";
import InstructorCard from "../common/istructors";
import img1 from "@/assets/home/instructoroThumb.webp";
import BlogCard from "../common/blogCard";

const SectionGenerator = ({
    heading,
    type,
    linkTxt,
    cardSizes = { xs: 10, md: 10, lg: 9 },
    linkSizes = { xs: 10, md: 10, lg: 9 }
}) => {
    return (
        <Grid2 container justifyContent={"center"} pb={3}>
            <Grid2 size={{ xs: 12, md: 12, lg: 10 }}>
                <Typography variant={"h3"} color={"tertiary"} pb={3}>{heading}</Typography>
            </Grid2>
            <Grid2 container size={cardSizes} justifyContent={"center"} columnSpacing={3} rowSpacing={2}>
                {[...new Array(3).fill()]?.map((el, ind) => (
                    <Grid2
                        key={`course_${ind}`}
                        size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                        display={{ xs: ind === 2 ? "none" : "flex", lg: "flex" }}
                    >
                        {
                            type === "course" ? <CourseCard discountTag={true} /> : type === "classroom" ? <ClassroomCard /> : type === "instructor" ?
                                <InstructorCard
                                    profileImage={img1}
                                    title="Managing Director"
                                    company="Olive Creative Marketing House"
                                    name="Jonathan Martin Johnson"
                                /> :
                                type === "blog" ? <BlogCard /> : <BlogCard />
                        }
                    </Grid2>
                ))}
            </Grid2>
            <Grid2 size={linkSizes} display={"flex"} justifyContent={"flex-end"} pt={2}>

                <Typography
                    variant="h6"
                    color="base1.default"
                >
                    {linkTxt}
                </Typography>
            </Grid2>
        </Grid2>
    );
};

export default SectionGenerator;