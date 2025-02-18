"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import { Container, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ResetForm from "./resetForm";

/**
 * Reset Password component that handles the reset password dialog and button
 */
const ResetPassword = () => {
    // Get translations for account-related text
    const t = useTranslations("account");


    return (
        <Container maxWidth="lg">
            <Grid2 container justifyContent={"center"}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 5 }}>
                    {/* heading */}
                    <Typography variant="h4" color="tertiary" pb={1}>
                        {t("resetAccountPassword")}
                    </Typography>

                    {/* sub heading */}
                    <Typography variant="body1" color="secondary.dark" pb={3}>
                        {t("resetPasswordInstruction")}
                    </Typography>

                    {/* Reset password form */}
                    <ResetForm t={t} />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default ResetPassword;
