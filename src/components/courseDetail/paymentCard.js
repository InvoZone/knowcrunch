"use client";
import * as React from "react";
import CustomBtn from "@/components/common/customBtn";
import * as styles from "./paymentCard.module.scss";
import Image from "next/image";
import {
    Box,
    Container,
    Grid2,
    Button,
    Typography,
    Tabs,
    Tab,
} from "@mui/material";
import EnrolCard from "../common/enrolCard";

const CourseDetail = () => {
    const [value, setValue] = React.useState(0);
    const [selectedCourse, setSelectedCourse] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Function to handle course selection
    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
    };

    return (
        <Container>
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: "secondary.main",
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor: "neutral.neutral8",
                    padding: "16px",
                }}
            >
                {/* <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginBottom: 2 }}
                >
                    -50% Black Friday Offer
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ color: "green", marginBottom: 2 }}
                >
                    01:59:15
                </Typography> */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0px 24px !important",
                        borderBottom: "2px solid",
                        borderColor: "neutral.neutral8",
                        "& .MuiTabs-indicator": {
                            backgroundColor: "base1.default", // Set the indicator color to red
                        },
                        "& .MuiTab-root": {
                            color: "black", // Default text color
                        },
                        "& .Mui-selected": {
                            color: "base1.default", // Selected tab text color
                            fontWeight: "bold",
                        },
                    }}
                >
                    <Tab label="Individual" sx={{ marginRight: "40px" }} />
                    <Tab label="Team" />
                </Tabs>
                {value === 0 ? (
                    <Grid2
                        container
                        spacing={1}
                        sx={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <EnrolCard
                            course="Regular"
                            price={550}
                            ticketsLeft={23}
                            selectedCourse={selectedCourse}
                            handleCourseSelect={handleCourseSelect}
                        />
                        <EnrolCard
                            course="Student/Unemployed"
                            price={450}
                            ticketsLeft={7}
                            selectedCourse={selectedCourse}
                            handleCourseSelect={handleCourseSelect}
                        />
                        <EnrolCard
                            course="Zoom"
                            price={250}
                            ticketsLeft={54}
                            selectedCourse={selectedCourse}
                            handleCourseSelect={handleCourseSelect}
                        />
                    </Grid2>
                ) : (
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" align="center">
                            For groups (2+ people)
                        </Typography>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{ color: "green", marginBottom: 2 }}
                        >
                            450€
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ marginBottom: 2 }}
                        >
                            per participant
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ marginBottom: 2 }}
                        >
                            7 tickets left
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Participant Email"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Participant Email"
                                required
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Enroll now
                            </Button>
                            <Typography variant="body2" align="center">
                                Up to 2 monthly installments
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="subtitle1">
                                INCLUDES
                            </Typography>
                            <ul>
                                <li>Lifetime alumni discounts</li>
                                <li>Access to our instructors</li>
                                <li>24h access to videos & files</li>
                            </ul>
                            <Typography
                                variant="body2"
                                align="center"
                                sx={{ marginTop: 2 }}
                            >
                                Available in Premium Plan
                            </Typography>
                        </Box>
                    </Box>
                )}
                <Box
                    sx={{
                        color: "neutral.neutral1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "8px",
                        mt: 1,
                    }}
                >
                    <Typography variant="titleLg" sx={{ color: "base1.dark4" }}>
                        INCLUDES
                    </Typography>

                    <Box
                        className={styles.tickMark}
                        sx={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={18}
                            height={18}
                            alt={"Tick"}
                        />
                        <Typography
                            variant="titleMd"
                            sx={{ color: "neutral.neutral1" }}
                        >
                            Lifetime alumni discounts
                        </Typography>
                    </Box>
                    <Box
                        className={styles.tickMark}
                        sx={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={18}
                            height={18}
                            alt={"Tick"}
                        />
                        <Typography
                            variant="titleMd"
                            sx={{ color: "neutral.neutral1" }}
                        >
                            Access to our instructors
                        </Typography>
                    </Box>
                    <Box
                        className={styles.tickMark}
                        sx={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            loading="lazy"
                            src="/icons/tick.svg"
                            width={18}
                            height={18}
                            alt={"Tick"}
                        />
                        <Typography
                            variant="titleMd"
                            sx={{ color: "neutral.neutral1" }}
                        >
                            24h access to videos & files
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <CustomBtn
                type="button"
                title={"Buy as a Gift"}
                variant="titleMd"
                color="base1.default"
                // onClick={handleLogin}
                startIcon={
                    <Image
                        src="/icons/store.svg"
                        width={18}
                        height={24}
                        loading="lazy"
                        alt="google"
                    />
                }
                sx={{
                    border: "1px solid",
                    borderColor: "base1.default",
                    width: "100%",
                    mb: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    mt: 2,
                }}
            />
        </Container>
    );
};

export default CourseDetail;
