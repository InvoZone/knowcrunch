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
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth";

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
});

/**
 * LoginForm component handles user authentication through email/password and Google OAuth
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const LoginForm = ({ t, handleClose }) => {
    const dispatch = useDispatch();
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
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
        <form onSubmit={formik.handleSubmit}>
            {/* Email input field */}
            <CustomInput
                name={"email"}
                label={t("email")}
                formik={formik}
                mb={1}
                autoComplete="email"
            />

            {/* Password input field */}
            <CustomInput
                name={"password"}
                label={t("password")}
                formik={formik}
                mb={3}
                type="password"
                autoComplete="current-password"
            />

            {/* Submit button for email/password login */}
            <CustomBtn
                type="submit"
                title={t("signin")}
                variant="contained"
                loading={false}
                sx={{
                    backgroundColor: "accents.bubble1",
                    width: "100%",
                    opacity:
                        !formik?.values?.email && !formik?.values?.password
                            ? 0.5
                            : 1,
                }}
            />

            {/* Divider between login methods */}
            <Divider sx={{ py: 2 }}>{t("or")}</Divider>

            {/* Google OAuth login button */}
            <CustomBtn
                type="button"
                title={t("continueWithGoogle")}
                variant="outlined"
                onClick={handleLogin}
                startIcon={
                    <Image
                        src={googleIcon}
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

export default LoginForm;
