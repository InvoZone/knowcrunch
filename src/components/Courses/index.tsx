"use client";

import { Box, Container } from "@mui/material";
import { useTranslations } from "next-intl";
import { courseFilters, courseSortFilters } from "@/constants/courses";
import { filterStatus, selectFilter } from "@/lib/slices/course";
import PageHeadingDesc from "../Common/PageHeadingDesc";
import FilterDrawer from "../Common/FilterDrawer";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import type { ChangeEvent } from "react";
import CustomBtn from "../Common/CustomBtn";
import { CloseOutlined, TuneOutlined } from "@mui/icons-material";
import SelectField from "../Common/SelectField";

const Courses = () => {
    const dispatch = useAppDispatch();
    const { filterOpen, selectedFilters } = useAppSelector(
        (state) => state.course
    );

    const t = useTranslations('general');
    const t1 = useTranslations("courses");

    const handleOpen = () => {
        dispatch(filterStatus(!filterOpen));
    };

    const handleClearFilters = () => {
        dispatch(selectFilter([]));
    };

    const removeFilter = (name: string) => {
        const updatedFilters = selectedFilters?.filter((el) => el !== name);
        dispatch(selectFilter(updatedFilters));
    };

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const { name } = e.target;

        if (isChecked) {
            dispatch(selectFilter([...selectedFilters, name]));
        } else {
            removeFilter(name);
        }
    };

    const closeFilterBar = () => {
        dispatch(filterStatus(false));
    };

    return (
        <Container maxWidth="lg" aria-label="Course Listings Container">
            <FilterDrawer
                open={filterOpen}
                filters={courseFilters}
                selectedFilters={selectedFilters}
                handleChange={handleFilterChange}
                closeFilterBar={closeFilterBar}
                mobileWidth={311}
                aria-label="Filter Drawer"
            >
                <PageHeadingDesc heading={t1("allCourses")} aria-label="All Courses Heading" />

                <Box
                    component="div"
                    py={3}
                    justifyContent={"space-between"}
                    display={"flex"}
                    aria-label="Filter and Sort Controls"
                >
                    <CustomBtn
                        variant="outlined"
                        title={t("filters")}
                        startIcon={
                            <TuneOutlined
                                sx={{
                                    color: filterOpen
                                        ? "secondary.main"
                                        : "neutral.neutral1",
                                }}
                            />
                        }
                        sx={{
                            borderRadius: 8,
                            borderColor: "neutral.neutral1",
                            backgroundColor: filterOpen ? "neutral.neutral1" : "transparent",
                        }}
                        txtVariant={"titleLg"}
                        fontWeight="400"
                        color={filterOpen ? "secondary" : "neutral.neutral1"}
                        onClick={handleOpen}
                        aria-label="Toggle Filter Button"
                    />
                    <SelectField options={courseSortFilters} aria-label="Sort Courses Select" />
                </Box>

                {selectedFilters?.length > 0 && (
                    <Box
                        component="div"
                        pb={3}
                        gap={2}
                        display={"flex"}
                        flexWrap={"wrap"}
                        aria-label="Active Filters Display"
                    >
                        {selectedFilters?.map((el) => (
                            <CustomBtn
                                key={`filter_${el}`}
                                variant="outlined"
                                title={t(el)}
                                endIcon={
                                    <CloseOutlined
                                        sx={{ color: "base1.default" }}
                                    />
                                }
                                sx={{
                                    borderRadius: 8,
                                    borderColor: "base1.default",
                                }}
                                txtVariant={"titleLg"}
                                fontWeight="400"
                                color="base1.default"
                                name={t(el)}
                                onClick={() => removeFilter(el)}
                                aria-label={`Remove ${t(el)} Filter Button`}
                            />
                        ))}
                        <CustomBtn
                            variant="text"
                            title={t("cleatFilters")}
                            sx={{
                                borderRadius: 8,
                                borderColor: "base1.default",
                            }}
                            txtVariant={"h6"}
                            color="base1.default"
                            onClick={handleClearFilters}
                            aria-label="Clear All Filters Button"
                        />
                    </Box>
                )}

                {/*   <Box component={"div"} sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                    {[...new Array(12).fill()]?.map((el, ind) => (

                        <CourseCard discountTag={true} width={298}
                            key={`course_${ind}`}
                        />
                    ))}
                </Box>

                <Box component={"div"} display={"flex"} justifyContent={"center"} pt={3}>
                    <CustomPagination />
                </Box> */}

                {/* Component to display when no data is found */}
                {/* <Box component={"div"} display={"flex"} justifyContent={"center"}>
                    <NoDataFound />
                </Box> */}

            </FilterDrawer>
        </Container>
    );
};

export default Courses;
