"use client";

// Import necessary dependencies and components
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { useFormik } from "formik";
import * as yup from "yup";

// Define validation schema for the login form
const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
});

/**
 * ForgotPasswordForm component handles user authentication through email/password and Google OAuth
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const ForgotPasswordForm = ({ t, handleClose }) => {
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: () => {
            handleClose();
        },
    });


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

            {/* Submit button for email/password login */}
            <CustomBtn
                type="submit"
                title={t("sendResetLink")}
                variant="contained"
                loading={false}
                sx={{
                    backgroundColor: "accents.bubble1",
                    width: "100%",
                    mt: 3,
                    opacity:
                        !formik?.values?.email
                            ? 0.5
                            : 1,
                }}
            />


        </form>
    );
};

export default ForgotPasswordForm;
