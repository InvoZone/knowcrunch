"use client";

// Import necessary dependencies and components
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import CustomBtn from "@/components/Common/CustomBtn";
import CustomInput from "@/components/Common/CustomInput";
import { Divider, InputAdornment, IconButton } from "@mui/material";
import { useFormik } from "formik";
import type { FormikHelpers } from "formik";
import * as yup from "yup";
import Image from "next/image";
import CompleteRegistration from "./CompleteRegistration";

// Define validation schema for the signup form
const validationSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .min(1, "Password should be of minimum 1 characters length")
        .required("Password is required"),
});

interface SignupFormProps {
    t: (_key: string) => string;
    handleClose: () => void;
    handleSubmitForm: () => void;
}

/**
 * SignupForm component handles user authentication through email/password and Google OAuth
 */
const SignupForm: React.FC<SignupFormProps> = ({ t, handleClose, handleSubmitForm }) => {
    const [showCompleteRegistration, setShowCompleteRegistration] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: (
            values: { email: string; password: string; confirmPassword: string },
            {
                setSubmitting,
            }: FormikHelpers<{ email: string; password: string; confirmPassword: string }>
        ) => {
            handleSubmitForm();
            setShowCompleteRegistration(true);
            setSubmitting(false);
        },
    });

    // Initialize Google OAuth Signup handler
    const googleSignup = useGoogleLogin({});

    // Render CompleteRegistration form if state is true
    if (showCompleteRegistration) {
        return <CompleteRegistration t={t} handleClose={handleClose} />;
    }

    return (
        <form onSubmit={formik.handleSubmit} aria-label="Signup form">
            {/* Email input field */}
            <CustomInput
                name="email"
                label={t("email")}
                formik={formik}
                mb={1}
                aria-label="Email input"
            />

            {/* Password input field */}
            <CustomInput
                name="password"
                label={t("password")}
                formik={formik}
                mb={1}
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                color="primary"
                                sx={{ visibility: "visible" }}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? (
                                    <Image
                                        src="/icons/eye.svg"
                                        alt="eye_icon"
                                        aria-label="show password"
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                    />
                                ) : (
                                    <Image
                                        src="/icons/eyeClose.svg"
                                        alt="eye_close_icon"
                                        aria-label="hide password"
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                    />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {/* Rewrite Password input field */}
            <CustomInput
                name="confirmPassword"
                label={t("rewritePassword")}
                formik={formik}
                mb={3}
                type={showConfirmPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                edge="end"
                                color="primary"
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? (
                                    <Image
                                        src="/icons/eye.svg"
                                        alt="eye_icon"
                                        aria-label="show confirm password"
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                    />
                                ) : (
                                    <Image
                                        src="/icons/eyeClose.svg"
                                        alt="eye_close_icon"
                                        aria-label="hide confirm password"
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                    />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {/* Submit button for email/password signup */}
            <CustomBtn
                type="submit"
                title={t("continue")}
                variant="contained"
                loading={formik.isSubmitting}
                color="secondary"
                sx={{
                    backgroundColor: "base1.default",
                    width: "100%",
                    opacity:
                        !formik.values.email ||
                        !formik.values.password ||
                        !formik.values.confirmPassword
                            ? 0.5
                            : 1,
                }}
                aria-label="Continue with email/password"
            />

            {/* Divider between signup methods */}
            <Divider
                sx={{
                    "py": 2,
                    "&::before, &::after": {
                        borderTop: "1px solid",
                        borderColor: "neutral.neutral4",
                    },
                }}
            >
                {t("or")}
            </Divider>

            {/* Google OAuth signup button */}
            <CustomBtn
                type="button"
                title={t("continueWithGoogle")}
                variant="outlined"
                onClick={() => googleSignup()}
                startIcon={
                    <Image
                        src="/icons/google.svg"
                        width={24}
                        height={24}
                        loading="lazy"
                        alt="google"
                    />
                }
                sx={{
                    border: "1px solid",
                    borderColor: "neutral.neutral8",
                    width: "100%",
                    mb: 2,
                }}
                aria-label="Continue with Google"
            />
        </form>
    );
};

export default SignupForm;
