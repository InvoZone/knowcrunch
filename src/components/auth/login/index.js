"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import CustomBtn from "@/components/common/customBtn";
import CustomDialog from "@/components/common/customDialog";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LoginForm from "./loginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

/**
 * Login component that handles the login dialog and button
 * Provides Google OAuth functionality and login form
 */
const Login = () => {
    // Get translations for account-related text
    const t = useTranslations("account");
    // State to control dialog open/close
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Login button that triggers the dialog */}
            <CustomBtn
                title={"Log In"}
                color="secondary"
                sx={{ minWidth: 100 }}
                onClick={() => setOpen(true)}
            />

            {/* Login dialog containing the form */}
            <CustomDialog
                open={open}
                handleClose={() => setOpen(false)}
                shouldCloseOutside={false}
            >
                {/* Dialog heading */}
                <Typography variant="h4" color="tertiary" pb={3}>{t("loginHeading")}</Typography>
                {/* Wrap login form with Google OAuth provider */}
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                    <LoginForm t={t} handleClose={() => setOpen(false)} />
                </GoogleOAuthProvider>
            </CustomDialog>
        </>
    );
};

export default Login;