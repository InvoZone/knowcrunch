"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import CustomDialog from "@/components/common/customDialog";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ForgotForm from "./forgotForm";
import { useDispatch, useSelector } from "react-redux";
import { openForgotPopup } from "@/store/slices/auth";

/**
 * Forgot Password component that handles the forgot password dialog and button
 */
const ForgotPassword = () => {
    const dispatch = useDispatch();
    // Get translations for account-related text
    const t = useTranslations("account");
    const { forgotPopup } = useSelector((state) => state.auth);

    const handleClose = () => {
        dispatch(
            openForgotPopup({
                forgotPopup: false,
            })
        );
    };

    return (
        <>
            {/* Forgot Password dialog containing the form */}
            <CustomDialog
                open={forgotPopup}
                handleClose={handleClose}
            >
                {/* Dialog heading */}
                <Typography variant="h4" color="tertiary" pb={1}>
                    {t("resetYourPassword")}
                </Typography>
                <Typography variant="body1" color="secondary.dark" pb={3}>
                    {t("resetInstruction")}
                </Typography>

                <ForgotForm
                    t={t}
                    handleClose={handleClose}
                />

            </CustomDialog>
        </>
    );
};

export default ForgotPassword;
