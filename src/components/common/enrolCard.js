"use client";
import * as React from "react";
import {
    Box,
    Container,
    Grid2,
    Button,
    Typography,
    Tabs,
    Tab,
    Radio,
} from "@mui/material";

const enrolCard = ({
    course,
    price,
    ticketsLeft,
    selectedCourse,
    handleCourseSelect,
}) => {
    return (
        <Grid2
            item="true"
            xs={12}
            sm={12}
            sx={{
                backgroundColor: "base2.light6",
                padding: "16px  8px",
                alignItems: "center",
                gap: "8px",
                borderRadius: "8px",

                border: selectedCourse === course ? "2px solid" : "1px solid",
                borderColor:
                    selectedCourse === course
                        ? "base1.default"
                        : "neutral.neutral8",
            }}
        >
            <Box
                sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 0,
                        alignItems: "baseline",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Radio
                            checked={selectedCourse === course}
                            onChange={() => handleCourseSelect(course)}
                            value={course}
                            name="course-radio-group"
                            sx={{
                                width: "24px",
                                height: "24px",
                                color: "base1.dark4",
                                "&.Mui-checked": {
                                    color: "base1.default",
                                },
                            }}
                        />
                        <Typography
                            variant="body"
                            sx={{ color: "neutral.neutral1" }}
                        >
                            {course}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{ color: "base1.dark4" }}>
                            {price}€
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "base1.dark4" }}
                        >
                            {ticketsLeft} tickets left
                        </Typography>
                    </Box>
                </Box>
                {selectedCourse === course && (
                    <Box sx={{ marginTop: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            sx={{
                                color: "base2.light6",
                                borderRadius: "8px",
                                backgroundColor: "base1.default",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "base2.light6",
                                    backgroundColor: "base1.default",
                                }}
                                variant="h6"
                            >
                                Enroll now
                            </Typography>
                        </Button>
                        <Typography
                            sx={{ color: "base1.dark4", mt: 1 }}
                            variant="body1"
                            align="center"
                        >
                            Up to 2 monthly installments
                        </Typography>
                    </Box>
                )}
            </Box>
        </Grid2>
    );
};

export default enrolCard;
