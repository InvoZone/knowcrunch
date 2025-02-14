"use client";

// Import necessary dependencies and components
import CustomBtn from "@/components/common/customBtn";
import CustomInput from "@/components/common/customInput";
import { Box, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth";

// Define validation schema for the registration form
const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    surname: yup.string("Enter your surname").required("Surname is required"),
    mobile: yup.string("Enter your mobile phone").required("Mobile phone is required"),
    workTitle: yup.string("Enter your work title").required("Work title is required"),
    company: yup.string("Enter your company").required("Company is required"),
    city: yup.string("Enter your city").required("City is required"),
    terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

/**
 * CompleteRegistration component handles user registration
 * @param {Object} props - Component props
 * @param {Function} props.t - Translation function for internationalization
 */
const CompleteRegistration = ({ t, handleClose }) => {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;
    const dispatch = useDispatch();
    // Initialize formik for form handling and validation
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            mobile: "",
            workTitle: "",
            company: "",
            city: "",
            terms: false,
        },
        validationSchema,
        onSubmit: () => {
            dispatch(login(true));
            handleClose();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Name input field */}
            <CustomInput name={"name"}
                label={t("name")}
                formik={formik} mb={1}
            />

            {/* Surname input field */}
            <CustomInput name={"surname"}
                label={t("surname")}
                formik={formik} mb={1}
            />

            {/* Mobile phone input field */}
            <Box sx={{mb:0.8}}>
                <Typography sx={{mb:0.5, fontSize:'12px', color:neutral.neutral1}}>Mobile phone</Typography>
                <PhoneInput
                    country={"us"}
                    value={formik.values.mobile}
                    onChange={(phone) => formik.setFieldValue("mobile", phone)}
                    placeholder="Mobile number"
                    inputStyle={{
                        width: '100%',
                        height: '45px',
                        borderRadius: '8px',
                    }}
                />
            </Box>

            {/* Work title input field */}
            <CustomInput name={"workTitle"}
                label={t("work title")}
                formik={formik} mb={1}
            />

            {/* Company input field */}
            <CustomInput name={"company"}
                label={t("company")}
                formik={formik} mb={1}
            />

            {/* City input field */}
            <CustomInput name={"city"}
                label={t("city")}
                formik={formik} mb={3}
            />

            {/* Terms and conditions checkbox */}
            <Box sx={{display:'flex', gap:'8px', marginBottom:'8px'}}>
                <input
                    type="checkbox"
                    name="terms"
                    onChange={formik.handleChange}
                    checked={formik.values.terms}
                    style={{
                        width: '21px',
                        height: '21px',
                        border: `2px solid ${base1.dark4}`,
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                />
                <label> <Typography variant="body">{t("I agree to the")}</Typography> <a href="#" style={{color:base1.default}} ><Typography variant="titleMd">{t("Terms & Conditions")}</Typography></a></label>
            </Box>

            {/* Marketing emails checkbox */}
            <Box sx={{display:'flex', gap:'8px', marginBottom:'8px'}}>
                <input
                    type="checkbox"
                    name="marketing"
                    onChange={formik.handleChange}
                    style={{
                        width: '21px',
                        height: '21px',
                        border: `2px solid ${base1.dark4}`,
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                />
                <label><Typography variant="body" >{t("I want to receive marketing emails")}</Typography></label>
            </Box>

            {/* Submit button for registration */}
            <CustomBtn type='submit'
                title="Register"
                variant="contained"
                loading={false}
                sx={{
                    backgroundColor: "accents.bubble1",
                    width: "100%",
                    opacity: !formik?.values?.name || !formik?.values?.surname || !formik?.values?.mobile || !formik?.values?.workTitle || !formik?.values?.company || !formik?.values?.city || !formik?.values?.terms ? 0.5 : 1
                }}
            />
            
        </form>
    );
};

export default CompleteRegistration;