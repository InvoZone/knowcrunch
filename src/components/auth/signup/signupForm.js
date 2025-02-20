"use client";

// Import necessary dependencies and components
import { useGoogleLogin } from "@react-oauth/google";
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { Divider, InputAdornment, IconButton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useState } from "react";
import CompleteRegistration from "./completeRegistration";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
const SignupForm = ({ t, handleClose, handleSubmitForm }) => {
    const [showCompleteRegistration, setShowCompleteRegistration] =
        useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: () => {
            handleSubmitForm();
            setShowCompleteRegistration(true);
        },
    });

    // Initialize Google OAuth Signup handler
    const googleSignup = useGoogleLogin({});

    // Render CompleteRegistration form if state is true
    if (showCompleteRegistration) {
        return <CompleteRegistration t={t} handleClose={handleClose} />;
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Email input field */}
            <CustomInput
                name={"email"}
                label={t("email")}
                formik={formik}
                mb={1}
            />

            {/* Password input field */}
            <CustomInput
                name={"password"}
                label={t("password")}
                formik={formik}
                mb={1}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                color="primary"
                                sx={{ visibility: "visible" }}
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                    
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {/* Rewrite Password input field */}
            <CustomInput
                name={"confirmPassword"}
                label={t("rewritePassword")}
                formik={formik}
                mb={3}
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                edge="end"
                                color="primary"
                            >
                                {showConfirmPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                    
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
                loading={false}
                color="secondary"
                sx={{
                    backgroundColor: "base1.default",
                    width: "100%",
                    opacity:
                        !formik?.values?.email ||
                            !formik?.values?.password ||
                            !formik?.values?.confirmPassword
                            ? 0.5
                            : 1,
                }}
            />

            {/* Divider between signup methods */}
            <Divider sx={{ py: 2 }}>{t("or")}</Divider>

            {/* Google OAuth signup button */}
            <CustomBtn
                type="button"
                title={t("continueWithGoogle")}
                variant="outlined"
                onClick={googleSignup}
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
            />
        </form>
    );
};

export default SignupForm;
