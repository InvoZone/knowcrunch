"use client";

// Import necessary dependencies and components
import CustomBtn from "@/components/Common/CustomBtn";
import CustomInput from "@/components/Common/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";

// Define validation schema for the login form
const validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
});

interface ForgotFormProps {
    t: (_key: string) => string;
    handleClose: () => void;
}

const ForgotPasswordForm: React.FC<ForgotFormProps> = ({ t, handleClose }) => {
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
        <form onSubmit={formik.handleSubmit} aria-label="Forgot Password Form">
            {/* Email input field */}
            <CustomInput
                name={"email"}
                label={t("email")}
                formik={formik}
                mb={1}
                aria-label="Email input"
            />

            {/* Submit button for email/password login */}
            <CustomBtn
                type="submit"
                title={t("sendResetLink")}
                variant="contained"
                loading={false}
                color="base2.light6"
                sx={{
                    backgroundColor: "base1.default",
                    width: "100%",
                    mt: 3
                }}
                aria-label="Send Reset Link"
            />

        </form>
    );
};

export default ForgotPasswordForm;
