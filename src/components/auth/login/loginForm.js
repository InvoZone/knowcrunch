"use client";

// Import necessary dependencies and components
import { useGoogleLogin } from "@react-oauth/google";
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { Box, Divider, Typography, InputAdornment, IconButton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth";
import CustomCheckbox from "@/components/common/customCheckbox";
import { useState } from "react";

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

/**
 * LoginForm component handles user authentication through email/password and Google OAuth
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const LoginForm = ({ t, handleClose, handleOpenForgotPopup }) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

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
    const handleLogin = useGoogleLogin({});

    return (
        <form onSubmit={formik.handleSubmit} aria-label="Login form">
            {/* Email input field */}
            <CustomInput
                name={"email"}
                label={t("email")}
                formik={formik}
                mb={1}
                autoComplete="email"
                aria-label="Email input"
            />

            {/* Password input field */}
            <CustomInput
                name={"password"}
                label={t("password")}
                formik={formik}
                mb={1}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
                                    <Image src={"/icons/eye.svg"} alt='eye_icon' aria-label="show password" loading='lazy' height={20} width={20} />
                                ) : (
                                    <Image src={"/icons/eyeClose.svg"} alt='eye_close_icon' aria-label="hide password" loading='lazy' height={20} width={20} />

                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Box component='div' display={"flex"} justifyContent={"space-between"} height={24}>
                <CustomCheckbox
                    label={t("rememberMe")}
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    name={"rememberMe"}
                    aria-label="Remember me checkbox"
                />

                <Typography
                    onClick={handleOpenForgotPopup}
                    fontWeight={800}
                    variant="body"
                    color="link.light"
                    sx={{ cursor: "pointer" }}
                    aria-label="Forgot password link"
                >
                    {t("forgotPassword")}
                </Typography>
            </Box>


            {/* Submit button for email/password login */}
            <CustomBtn
                type="submit"
                title={t("signin")}
                variant="contained"
                loading={false}
                sx={{
                    backgroundColor: "accents.bubble1",
                    width: "100%",
                    mt: 3,
                    opacity:
                        !formik?.values?.email && !formik?.values?.password
                            ? 0.5
                            : 1,
                }}
                aria-label="Sign in button"
            />


            {/* Divider between login methods */}
            <Divider sx={{ py: 2, "&::before, &::after": { borderTop: "1px solid", borderColor: "neutral.neutral4" } }}>{t("or")}</Divider>

            {/* Google OAuth login button */}
            <CustomBtn
                type="button"
                title={t("continueWithGoogle")}
                variant="outlined"
                onClick={handleLogin}
                startIcon={
                    <Image
                        src="/icons/google.svg"
                        width={24}
                        height={24}
                        loading="lazy"
                        alt="google"
                        aria-label="Google icon"
                    />
                }
                sx={{
                    border: "1px solid",
                    borderColor: "neutral.neutral8",
                    width: "100%",
                    mb: 2,
                }}
                aria-label="Continue with Google button"
            />
        </form>
    );
};

export default LoginForm;
