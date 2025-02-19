"use client";

// Import necessary dependencies
import { Box, Container, Divider, Grid2, Input, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import CustomBtn from "../common/customBtn";
import CustomInput from "../common/customInput";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslations } from "next-intl";
import { colors } from "@/utils/colors";
/**
 * password Component
 * Main component for displaying course listings
 */

// Define validation schema for the login form
const validationSchema = yup.object({
    password: yup
        .string("Enter your password")
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
    confirmPassword: yup.object({
        password: yup.string().oneOf([yup.ref("password")], "Passwords do not match"),
    }),
});
const publicProfile = ({ title, cardsLength, buttonTitle }) => {
    const theme = useTheme();
    const { neutral } = theme.palette;
    const dispatch = useDispatch();
    const t = useTranslations("account");
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema,
        onSubmit: () => {
            dispatch(login(true));
            handleClose();
        },
    });

    // Initialize Google OAuth login handler
    const handleLogin = (data) => {
        // Google OAuth login logic
        console.log("Google OAuth login triggered", data);
    };
    console.log(formik)
    return (
        <Grid2 spacing={2}>
            {/* Social Links and About Section */}
            <Grid2 container spacing={2}>
                <Grid2 xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Social Links
                    </Typography>
                    <CustomInput name="linkedin" label="LinkedIn URL" formik={formik} />
                    <CustomInput name="facebook" label="Facebook URL" formik={formik} />
                    <CustomInput name="instagram" label="Instagram URL" formik={formik} />
                </Grid2>
                <Grid2 xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        About
                    </Typography>
                    <CustomInput
                        name="about"
                        label="About"
                        formik={formik}
                        multiline
                        rows={6}
                    />
                </Grid2>
            </Grid2>

            {/* Work Availability and Working Location */}
            <Grid2 sm={12} spacing={2} container>
                <Box xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 1, justifyContent: "flex-start" }}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Work availability
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workAvailability" label="Full time" type="radio" formik={formik} />
                        <label>Full time</label>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workAvailability" label="Part time" type="radio" formik={formik} />
                        <label>Part time</label>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workAvailability" label="Freelance" type="radio" formik={formik} />
                        <label>Freelance</label>
                    </Box>
                </Box>
                <Grid2 xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Working location
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workingLocation" label="On site" type="radio" formik={formik} />
                        <label>On site</label>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workingLocation" label="Hybrid" type="radio" formik={formik} />
                        <label>Hybrid</label>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <input name="workingLocation" label="Remote" type="radio" formik={formik} />
                        <label>Remote</label>
                    </Box>
                </Grid2>
            </Grid2>

            {/* Skills and Career Path */}
            <Grid2 xs={12}>
                <CustomInput name="skills" label="Select skills" formik={formik} />
            </Grid2>
            <Grid2 xs={12}>
                <CustomInput name="careerPath" label="Select career path" formik={formik} />
            </Grid2>

            {/* Experience Level */}
            <Grid2 xs={12}>
                <Typography variant="subtitle1" fontWeight={700}>
                    Experience
                </Typography>
                <CustomInput name="experience" label="Junior level (0-5 years)" type="radio" formik={formik} />
                <CustomInput name="experience" label="Mid level (5-15 years)" type="radio" formik={formik} />
                <CustomInput name="experience" label="Senior level (15-30 years)" type="radio" formik={formik} />
            </Grid2>

            {/* Privacy and Submit */}
            <Grid2 xs={12}>
                <CustomInput
                    name="privacy"
                    label="I consent to the Privacy Policy Agreement"
                    type="checkbox"
                    formik={formik}
                />
            </Grid2>
            <Grid2 xs={12}>
                <CustomBtn type="submit" variant="contained" title="Submit" />
            </Grid2>
        </Grid2>
    );
};

export default publicProfile;
