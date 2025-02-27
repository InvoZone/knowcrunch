"use client";

// Import necessary dependencies
import { Box, Container } from "@mui/material";
import CustomBtn from "../common/customBtn";
import { useTranslations } from "next-intl";
import CourseCard from "../common/courseCard";
import SelectField from "../common/selectField";
import { courseFilters, courseSortFilters } from "@/utils/courses";
import CustomPagination from "../common/customPagination";
import { CloseOutlined, TuneOutlined } from "@mui/icons-material";
import FilterDrawer from "../common/filterDrawer";
import { useDispatch, useSelector } from "react-redux";
import { filterStatus, selectFilter } from "@/store/slices/course";
import PageHeadingDesc from "../common/pageHeadingDesc";

/**
 * Courses Component
 * Main component for displaying course listings with filtering functionality
 */
const Courses = () => {
    const dispatch = useDispatch();
    // Get filter state from Redux store
    const { filterOpen, selectedFilters } = useSelector(
        (state) => state.course
    );
    // Initialize translation functions
    const t = useTranslations("general");
    const t1 = useTranslations("courses");

    /**
     * Toggle filter drawer open/close state
     */
    const handleOpen = () => {
        dispatch(filterStatus(!filterOpen));
    };

    /**
     * Clear all selected filters
     */
    const handleClearFilters = () => {
        dispatch(selectFilter([]));
    };

    /**
     * Remove a specific filter by name
     * @param {string} name - Name of filter to remove
     */
    const removeFilter = (name) => {
        const updatedFilters = selectedFilters?.filter((el) => el !== name);
        dispatch(selectFilter(updatedFilters));
    };

    /**
     * Handle filter checkbox changes
     * @param {Event} e - Change event from checkbox
     */
    const handleFilterChange = (e) => {
        const isChecked = e.target.checked;
        const name = e.target.name;

        if (isChecked) {
            // Add new filter to selected filters
            dispatch(selectFilter([...selectedFilters, name]));
        } else {
            // Remove filter from selected filters
            removeFilter(name);
        }
    };

    const closeFilterBar = () => {
        dispatch(filterStatus(false));
    };

    return (
        <Container maxWidth="lg" aria-label="Course Listings Container">
            {/* Filter drawer component */}
            <FilterDrawer
                open={filterOpen}
                t={t}
                filters={courseFilters}
                selectedFilters={selectedFilters}
                handleChange={handleFilterChange}
                closeFilterBar={closeFilterBar}
                mobileWidth={215}
                aria-label="Filter Drawer"
            >
                <PageHeadingDesc heading={t1("allCourses")} aria-label="All Courses Heading" />

                {/* Filter and sort controls */}
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
                                        ? "secondary"
                                        : "neutral.neutral1",
                                }}
                            />
                        }
                        sx={{
                            borderRadius: 8,
                            borderColor: "neutral.neutral1",
                            backgroundColor: filterOpen && "neutral.neutral1",
                        }}
                        txtVariant={"titleLg"}
                        fontWeight="400"
                        color={filterOpen ? "secondary" : "neutral.neutral1"}
                        onClick={handleOpen}
                        aria-label="Toggle Filter Button"
                    />
                    <SelectField options={courseSortFilters} aria-label="Sort Courses Select" />
                </Box>

                {/* Active filters display */}
                {selectedFilters?.length > 0 && (
                    <Box
                        component="div"
                        pb={3}
                        gap={2}
                        display={"flex"}
                        flexWrap={"wrap"}
                        aria-label="Active Filters Display"
                    >
                        {/* Display selected filter buttons */}
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
                        {/* Clear all filters button */}
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

                {/* Course grid layout */}

                <Box component={"div"} sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                    {[...new Array(12).fill()]?.map((el, ind) => (

                        <CourseCard discountTag={true} width={298}
                            key={`course_${ind}`}
                        />
                    ))}
                </Box>

                {/* Custom Pagination component for navigating through pages */}
                <Box component={"div"} display={"flex"} justifyContent={"center"} pt={3}>
                    <CustomPagination />
                </Box>

                {/* Component to display when no data is found */}
                {/* <Box component={"div"} display={"flex"} justifyContent={"center"}>
                    <NoDataFound />
                </Box> */}

            </FilterDrawer>
        </Container>
    );
};

export default Courses;
