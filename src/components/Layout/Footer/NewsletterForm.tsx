import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomBtn from "@/components/Common/CustomBtn";
import styles from "./footer.module.css";
import PhoneInput from "react-phone-input-2";
import CustomInput from "./CustomInput";

// Define the validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

// NewsletterForm component
const NewsletterForm: React.FC = () => {
    // Initialize formik
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            surname: ""
        },
        validationSchema,
        onSubmit: (values) => {
            // eslint-disable-next-line no-console
            console.log(`Submitted email: ${values.email}`);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box component={"div"} position={"relative"}>
                <Typography component={"span"} color="error.light" sx={{ position: "absolute", left: 58, top: 14, zIndex: 1 }}>*</Typography>
                <CustomInput
                    name="email"
                    value={formik?.values?.email}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    touched={formik?.touched?.email}
                    errors={formik?.errors?.email}
                    placeholder="E-mail"
                    aria-label="Email"
                />
            </Box>
            <CustomInput
                name="firstName"
                value={formik?.values?.firstName}
                handleChange={formik.handleChange}
                placeholder="First name"
                aria-label="First name"
            />
            <CustomInput
                name="surname"
                value={formik?.values?.surname}
                handleChange={formik.handleChange}
                placeholder="Surname"
                aria-label="Surname"
            />
            <Box className='centerY' sx={{ backgroundColor: "base1.dark3", px: "10px", height: 45, borderRadius: 2, width: { xs: 352, md: 290 } }}>
                <PhoneInput placeholder="Mobile number" country="us" aria-label="Mobile number" inputClass={styles.phone_input} buttonClass={styles.phone_dropdown_button} dropdownClass={styles.dropdown} />
            </Box>
            <CustomBtn
                sx={{
                    marginTop: "10px",
                    backgroundColor: "base1.default",
                    color: "secondary.main",
                    borderRadius: "8px",
                    width: "100%"
                }}
                color="secondary"
                title="Subscribe"
                type="submit"
            />
        </form>
    );
};

export default NewsletterForm;
