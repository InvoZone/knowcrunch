import { Box, Container, Grid2, Typography } from "@mui/material";
import CourseCard from "../common/courseCard";
import * as styles from "./style.module.scss";
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
                    className={styles.conatiner}
                    backgroundColor="neutral.neutral10"
                    py={6}
                >
                    <Typography variant="h2" color={"base1.dark4"} component={"h3"} pb={3}>
                        Find your career path
                    </Typography>
                    <Box component={"div"} pb={2}>
                        <SelectableLinks />
                    </Box>
                    <Grid2
                        container
                        spacing={6}
                    >

                        <Grid2
                            size={{ xs: 12, md: 5 }}
                        >
                            <Box
                                className={styles.content}
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    gap: "8px",
                                }}
                            >
                                {/* Content Marketing Section */}
                                <Box
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
                                        sx={{
                                            color: "base1.dark4",
                                            marginBottom: "8px"
                                        }}
                                        component={"h4"}
                                    >
                                        Content Marketing
                                    </Typography>
                                    <Typography
                                        variant="body"
                                        sx={{
                                            color: "neutral.neutral1",
                                            marginBottom: "16px"
                                        }}
                                    >
                                        Define and develop digital
                                        strategies to deliver business
                                        growth through online channels.
                                    </Typography>
                                    <Box
                                        className={styles.markValue}
                                        sx={{ mt: -1 }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "link.main" }}
                                        >
                                            37.000€
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            sx={{ color: "neutral.neutral1", marginBottom: "12px" }}
                                        >
                                            median salary in Greece, for
                                            this career path in 2023
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={styles.markValue}
                                        sx={{ marginTop: "12px" }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ color: "link.main" }}
                                        >
                                            85%
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            sx={{ color: "neutral.neutral1", marginBottom: "16px" }}
                                        >
                                            of course graduates report
                                            positive career impact
                                        </Typography>
                                    </Box>
                                    <Box
                                        className={styles.basicTypo}
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
                        </Grid2>
                        <Grid2
                            container
                            py={{ xs: 1, lg: 3 }}
                            size={{ xs: 12, md: 7 }}
                            spacing={2}
                        >
                            <Grid2
                                size={{ xs: 12, lg: 6 }}
                            >
                                <CourseCard
                                    customClass={true}
                                    newtag={true}
                                    discountTag={true}
                                    width={"298px"}
                                />
                            </Grid2>
                            <Grid2
                                size={{ xs: 12, lg: 6 }}
                            >
                                <Box display={{ xs: "none", lg: "block" }}>
                                    <CourseCard
                                        CustomButton={false}
                                        customClass={true}
                                        discountTag={true}
                                        width={"298px"}
                                    />
                                </Box>
                            </Grid2>

                        </Grid2>
                        {/* <Grid2 item size={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    cursor: "pointer",
                                }}>
                                <CustomBtn color="link.main" title={"View courses"} txtVariant="h6" sx={{ px: "20px" }} variant="text" />
                            </Box>
                        </Grid2> */}
                    </Grid2>
                </Box>
            </Container >
        </Box >
    );
};

export default CareerPath;