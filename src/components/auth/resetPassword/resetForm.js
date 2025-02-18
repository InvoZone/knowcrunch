"use client";

// Import necessary dependencies and components
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { useFormik } from "formik";
import * as yup from "yup";

// Define validation schema for the reset password form
const validationSchema = yup.object({
    password: yup
        .string("Enter your password")
        .required("Password is required"),
    confirmPassword: yup
        .string("Confirm your password")
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

/**
 * ResetPasswordForm component handles user password reset
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const ResetPasswordForm = ({ t }) => {
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Password input field */}
            <CustomInput
                name={"password"}
                label={t("password")}
                formik={formik}
                mb={1}
                autoComplete="new-password"
                type="password"
            />

            {/* Confirm Password input field */}
            <CustomInput
                name={"confirmPassword"}
                label={t("confirmPassword")}
                formik={formik}
                mb={1}
                autoComplete="new-password"
                type="password"
            />

            {/* Submit button for password reset */}
            <CustomBtn
                type="submit"
                title={t("resetPassword")}
                variant="contained"
                loading={false}
                color="common.white"
                sx={{
                    backgroundColor: "base1.default",
                    width: "100%",
                    mt: 3
                }}
            />
        </form>
    );
};

export default ResetPasswordForm;
