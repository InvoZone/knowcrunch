"use client";
import { Grid2, Typography } from "@mui/material";
import Link from "next/link";
import CustomInput from "../common/customInput";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomCheckbox from "../common/customCheckbox";
import CheckoutSummaryCard from "./checkoutSummaryCard";

// Define validation schema for the login form
const validationSchema = yup.object({
    firstName: yup
        .string("Enter your First name")
        .required("First name is required"),
    lastName: yup
        .string("Enter your Last name ")
        .required("Last name is required"),
    email: yup
        .string("Enter your email")
        .email("Enter your email")
        .required("Email is required"),
    phone: yup
        .number("Enter your Phone number")
        .required("Phone is required"),
    city: yup
        .string("Enter your City")
        .required("City is required"),
    company: yup
        .string("Enter your Company")
        .required("Company is required"),
    occupation: yup
        .string("Enter your Occupation")
        .required("Occupation is required"),
    terms: yup
        .boolean()
        .oneOf([true], "You must accept the terms and conditions") // Must be true
        .required("Accept terms is required"), // Ensures it's provided

    payment: yup
        .boolean()
        .oneOf([true], "You must accept the payment terms") // Must be true
        .required("Accepting payment terms is required"), // Ensures it's provided
});

const CheckoutForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            company: "",
            occupation: "",
            terms: false,
            payment: false
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid2 container spacing={6}>

                <Grid2 container size={{ xs: 12, md: 6, lg: 8, xl: 8 }} spacing={1}>
                    <Grid2 size={12}>
                        <Typography component={Link} href="/" variant="h6" color="base1.default">{"< Back to course"}</Typography>
                        <Typography variant="h3" color="tertiary" pt={4} pb={1}>Registration</Typography>
                        <Typography variant="h5" color="tertiary" pb={1}>Fill in your account information</Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <CustomInput
                            name={"firstName"}
                            placeholder={"First Name"}
                            formik={formik}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <CustomInput
                            name={"lastName"}
                            placeholder={"Last Name"}
                            formik={formik}
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <CustomInput
                            name={"email"}
                            placeholder={"Email Address"}
                            formik={formik}
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <CustomInput
                            name={"phone"}
                            placeholder={"Phone number"}
                            formik={formik}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <CustomInput
                            name={"city"}
                            placeholder={"Town/ city"}
                            formik={formik}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <CustomInput
                            name={"company"}
                            placeholder={"Company/ Employer"}
                            formik={formik}
                        />
                    </Grid2>
                    <Grid2 size={12} pb={2}>
                        <CustomInput
                            name={"occupation"}
                            placeholder={"Occupation/ Title"}
                            formik={formik}
                        />
                    </Grid2>

                    <Grid2 size={12} pb={1}>
                        <CustomCheckbox checked={formik.values?.["terms"]} onChange={formik.handleChange} name='terms' label="I accept the Terms & Conditions and I confirm that I have read the Data Privacy Policy" />
                    </Grid2>
                    <Grid2 size={12}>
                        <CustomCheckbox checked={formik.values?.["payment"]} onChange={formik.handleChange} name='payment' label="I accept that by accessing this course, I can’t withdraw from payment." />
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 4 }} color={"tertiary"} >
                    <CheckoutSummaryCard />
                </Grid2>
            </Grid2>

        </form>

    );
};

export default CheckoutForm;