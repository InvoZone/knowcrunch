import { Box, Container, Typography } from "@mui/material";
import CourseCard from "../common/courseCard";
import TickMark from "../common/TickMark";
import SelectableLinks from "./selectableLinks";
import CustomBtn from "../common/customBtn";

// Define the data for TickMarks
const tickMarkData = [
    { id: "1", text: "Design and manage influencer campaigns to enhance brand visibility and engagement." },
    { id: "2", text: "Expertise in social media, content trends, analytics, and influencer relationship-building." },
    { id: "3", text: "High demand across industries as brands prioritise influencer partnerships." }
];

const CareerPath = () => {
    return (
        <Box
            component={"div"}
            backgroundColor="neutral.neutral10"
        >
            <Container
                maxWidth={"lg"}
            >
                <Box
                    component={"div"}
                    backgroundColor="neutral.neutral10"
                    py={{ xs: 4, md: 6 }}
                    px={{ xs: 0, sm: 0, md: 3 }}
                >
                    <Typography variant="h2" color={"base1.dark4"} component={"h3"} pb={3}>
                        Find your career path
                    </Typography>
                    <Box component={"div"} pb={2}>
                        <SelectableLinks />
                    </Box>
                    <Box
                        component={"div"}
                        sx={{ display: { xs: "block", md: "flex" }, gap: { xs: 1, md: 1, lg: 6 } }}
                    >

                        <Box
                            sx={{ width: { lg: 547 } }}
                        >
                            <Box
                                component={"div"}
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    gap: "8px",
                                }}
                            >
                                {/* Content Marketing Section */}
                                <Box
                                    component={"div"}
                                    sx={{
                                        borderRadius: "8px",
                                        display: "flex",
                                        flexDirection: "column",
                                        px: { xs: 1, md: 2, lg: 3 },
                                        py: { xs: 1, lg: 3 }
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        color="base1.dark4"
                                        pb={"4px"}
                                        component={"h4"}
                                    >
                                        Content Marketing
                                    </Typography>
                                    <Typography
                                        variant="body"
                                        color="neutral.neutral1"
                                        pb={2}
                                    >
                                        Define and develop digital
                                        strategies to deliver business
                                        growth through online channels.
                                    </Typography>
                                    <Box
                                        component={"div"}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "link.main", pb: "4px" }}
                                        >
                                            37.000€
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            component={"p"}
                                            color="neutral.neutral1"
                                            pb={"12px"}
                                        >
                                            median salary in Greece, for
                                            this career path in 2023
                                        </Typography>
                                    </Box>
                                    <Box
                                        component={"div"}
                                        pb={"4px"}
                                    >
                                        <Typography
                                            variant="h5"
                                            color="link.main"
                                        >
                                            85%
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            color="neutral.neutral1"
                                            pb={2}
                                        >
                                            of course graduates report
                                            positive career impact
                                        </Typography>
                                    </Box>
                                    <Box
                                        component={"div"}
                                        sx={{
                                            color: "neutral.neutral1",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "16px",
                                            marginTop: "16px"
                                        }}
                                    >
                                        {tickMarkData.map((item) => (
                                            <TickMark key={item.id} text={item.text} />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            component={"div"}
                            sx={{ width: { lg: 612 } }}
                        >
                            <Box component={"div"} sx={{ display: "flex", gap: 2, py: { xs: 3, lg: 3 }, justifyContent: "center" }}>
                                <CourseCard
                                    customClass={true}
                                    newtag={true}
                                    discountTag={true}
                                    width={"298px"}
                                />
                                <Box component={"div"} display={{ xs: "none", lg: "block" }}>
                                    <CourseCard
                                        CustomButton={false}
                                        customClass={true}
                                        discountTag={true}
                                        width={"298px"}
                                    />
                                </Box>
                            </Box>
                            <Box
                                component={"div"}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    cursor: "pointer",
                                }}>
                                <CustomBtn color="link.main" title={"View courses"} txtVariant="h6" sx={{ px: "20px" }} variant="text" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
};

export default CareerPath;