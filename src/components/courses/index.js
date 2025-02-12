"use client";
import { Box, Container, Grid2, Typography } from "@mui/material";
import CustomBtn from "../common/customBtn";
import { useTranslations } from "next-intl";
import CourseCard from "../common/courseCard";
import SelectField from "../common/selectField";
import { courseSortFilters } from "@/utils/courses";
import CustomPagination from "../common/customPagination";
import { CloseOutlined, TuneOutlined } from "@mui/icons-material";
import FilterDrawer from "../common/filterDrawer";
import { useDispatch, useSelector } from "react-redux";
import { filterStatus } from "@/store/slices/course";

const Courses = () => {
    const dispatch = useDispatch();
    const { filterOpen, filters } = useSelector(state => state.course);
    const t = useTranslations("general");
    const t1 = useTranslations("courses");

    const handleOpen = () => {
        dispatch(filterStatus(!filterOpen));
    };

    return (
        <Container maxWidth='lg'>
            <FilterDrawer open={filterOpen} t={t} filters={filters}>

                <Typography variant="h2" color="base1.dark4">{t1("allCourses")}</Typography>
                <Box component='div' py={3} justifyContent={"space-between"} display={"flex"}>
                    <CustomBtn variant="outlined" title={t("filters")} startIcon={<TuneOutlined color={filterOpen ? "secondary" : "neutral.neutral1"} />} sx={{ borderRadius: 8, borderColor: "neutral.neutral1", backgroundColor: filterOpen && "neutral.neutral1" }} txtVariant={"titleLg"} fontWeight="400" color={filterOpen ? "secondary" : "neutral.neutral1"} onClick={handleOpen} />
                    <SelectField options={courseSortFilters} />
                </Box>
                <Box component='div' pb={3} gap={2} display={"flex"} flexWrap={"wrap"}>
                    {[...new Array(3).fill()]?.map((el, ind) => <CustomBtn key={`filter_${ind}`} variant="outlined" title={t("filters")} endIcon={<CloseOutlined sx={{ color: "base1.default" }} />} sx={{ borderRadius: 8, borderColor: "base1.default" }} txtVariant={"titleLg"} fontWeight="400" color="base1.default" />)}
                    <CustomBtn variant="text" title={t("cleatFilters")} sx={{ borderRadius: 8, borderColor: "base1.default" }} txtVariant={"h6"} color="base1.default" />
                </Box>
                <Grid2 container justifyContent={"center"}>
                    <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: filterOpen ? 12 : 9 }} spacing={2}>
                        {
                            [...new Array(9).fill()]?.map((el, ind) => < Grid2 key={`course_${ind}`} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                                <CourseCard />
                            </Grid2>)
                        }
                        <Grid2 size={12} justifyContent={"center"} display={"flex"}>
                            <CustomPagination />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </FilterDrawer >
        </Container >
    );
};

export default Courses;