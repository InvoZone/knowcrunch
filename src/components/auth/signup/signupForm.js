"use client";

// Import necessary dependencies and components
import { useGoogleLogin } from "@react-oauth/google";
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { Divider } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import googleIcon from "@/assets/icons/google.svg";
import Image from "next/image";

// Define validation schema for the signup form
const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
    confirmPassword: yup
        .string("Enter your password")
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
});

/**
 * signupForm component handles user authentication through email/password and Google OAuth
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const SignupForm = ({ t, handleClose }) => {
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: () => {
            handleClose();
        },
    });

    // Initialize Google OAuth Signup handler
    const googleSignup = useGoogleLogin({
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Email input field */}
            <CustomInput name={"email"}
                label={t("email")}
                formik={formik} mb={1}
            />

            {/* Password input field */}
            <CustomInput name={"password"}
                label={t("password")}
                formik={formik} mb={1}
                type='password' />

            {/* Rewrite Password input field */}
            <CustomInput name={"confirmPassword"}
                label={t("rewritePassword")}
                formik={formik} mb={3}
                type='password' />

            {/* Submit button for email/password signup */}
            <CustomBtn type='submit'
                title={t("continue")}
                variant="contained"
                loading={false}
                color="secondary"
                sx={{
                    backgroundColor: "base1.default",
                    width: "100%",
                    opacity: (!formik?.values?.email || !formik?.values?.password || !formik?.values?.confirmPassword) ? 0.5 : 1
                }}
            />

            {/* Divider between signup methods */}
            <Divider sx={{ py: 2 }}>{t("or")}</Divider>

            {/* Google OAuth signup button */}
            <CustomBtn type='button'
                title={t("continueWithGoogle")}
                variant="outlined"
                onClick={googleSignup}
                startIcon={<Image src={googleIcon} width={24} height={24} loading="lazy" alt="google" />}
                sx={{
                    border: "1px solid",
                    borderColor: "neutral.neutral8",
                    width: "100%", mb: 2
                }}
            />
        </form>
    );
};

export default SignupForm;