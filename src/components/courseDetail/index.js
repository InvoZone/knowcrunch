"use client";
import * as React from "react";
import * as styles from "./course.module.scss";
import { Box, Container, Grid2 } from "@mui/material";
import Banner from "./banner";
import PaymentCard from "./paymentCard";
import ABOUT from "./about";
import Learn from "./learn";

const CourseDetail = () => {
    return (
        <Box sx={{ padding: 0, margin: 0 }} className={styles.mainconatiner}>
            {/* Bannner section */}
            <Box>
                <Banner />
            </Box>
            <Container
                maxWidth="lg"
                sx={{ padding: 0 }}
                className={styles.mainconatiner}
            >
                <Box className={styles.conatiner} sx={{ padding: "48px 0px" }}>
                    <Grid2
                        container
                        spacing={3}
                        sx={{ display: "flex", padding: "32px  0px" }}
                    >
                        <Grid2
                            size={{ xs: 12, sm: 8.5, md: 8, lg: 8 }}
                            item="true"
                        >
                            <Grid2
                                container
                                spacing={4}
                                sx={{ display: "flex" }}
                            >
                                <Grid2
                                    item="true"
                                    size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                >
                                    <ABOUT />
                                    <Learn />
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2
                            size={{ xs: 12, sm: 3.5, md: 4, lg: 4 }}
                            item="true"
                        >
                            <PaymentCard />
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Box>
    );
};

export default CourseDetail;
