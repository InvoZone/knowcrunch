"use client";

// Import necessary dependencies
import { Box, Container, Divider, Grid2, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import CustomBtn from "../common/customBtn";
import CustomInput from "../common/customInput";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslations } from "next-intl";
import { colors } from "@/utils/colors";
/**
 * personalData Component
 * Main component for displaying course listings
 */

// Define validation schema for the login form
const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
    rememberMe: yup
        .boolean(),
});
const personalData = ({ title, cardsLength, buttonTitle }) => {
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

    return (
        // <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, mt: 4 }}>
        <Grid2 sx={{ mt: 2 }}> {/* width: "400px" */}
            <form onSubmit={formik.handleSubmit}>
                {/* Personal Information */}
                <Box mb={2}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Personal information
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", md: "row" }, mb: 0.5 }}>
                        <CustomInput
                            name="name"
                            formik={formik}
                            type="input"
                            placeholder="Name"
                        />
                        <CustomInput
                            name="surname"
                            formik={formik}
                            type="input"
                            placeholder="Surname"
                        />
                    </Box>
                    <CustomInput
                        name="dateOfBirth"
                        formik={formik}
                        type="input"
                        placeholder="Date of Birth"
                    />
                </Box>

                {/* Contact Details */}
                <Box mb={2}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Contact details
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", md: "row" }, mb: 0.5 }}>
                        <CustomInput
                            name="email"
                            formik={formik}
                            type="email"
                            placeholder="Email"
                        />
                        <CustomInput
                            name="mobile"
                            formik={formik}
                            type="input"
                            placeholder="Mobile"
                            startAdornment={
                                <Image
                                    src="/images/flags/us.png"
                                    alt="Country Flag"
                                    width={24}
                                    height={16}
                                />
                            }
                        />
                    </Box>
                    <CustomInput
                        name="dateOfBirth"
                        formik={formik}
                        type="input"
                        placeholder="Date of Birth"
                    />
                </Box>

                {/* Career Info */}
                <Box>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Career info
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mb: 0.5 }}>
                        <CustomInput
                            name="townCity"
                            formik={formik}
                            type="input"
                            placeholder="Town/ City"
                        />
                        <CustomInput
                            name="company"
                            formik={formik}
                            type="input"
                            placeholder="Company/ Employer"
                        />
                    </Box>
                    <CustomInput
                        name="occupation"
                        formik={formik}
                        type="input"
                        placeholder="Occupation/ Title"
                    />
                </Box>

                <CustomBtn type="submit" variant="contained" color="" txtVariant="h6" title={"Update"} sx={{
                    mt: 2,
                    // background
                    backgroundColor: colors.link.main,
                    color: colors.base2.light6,
                }} />
            </form>
        </Grid2>
        // </Container>
    );
};

export default personalData;
