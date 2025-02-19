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
const password = ({ title, cardsLength, buttonTitle }) => {
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
                <CustomInput
                    name="password"
                    formik={formik}
                    type="password"
                    placeholder={t("password")}
                    mb={2}
                />
                <CustomInput
                    name="confirmPassword"
                    formik={formik}
                    type="password"
                    placeholder={t("confirmPassword")}
                    mb={2}
                />

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

export default password;
