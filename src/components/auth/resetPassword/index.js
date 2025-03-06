"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import { Box, Container, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ResetForm from "./resetForm";

/**
 * Reset Password component that handles the reset password dialog and button
 */
const ResetPassword = () => {
    // Get translations for account-related text
    const t = useTranslations("account");


    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex", justifyContent: "center",
                alignItems: "center",
                height: { xs: 336, lg: 384 }
            }}
            aria-label="Reset password container"
        >
            <Box sx={{ px: { xs: 1, md: 4, lg: 4 }, width: { xs: "100%", md: 480 } }} aria-label="Reset password grid">
                {/* heading */}
                <Typography variant="h4" color="tertiary" pb={1} aria-label="Reset password heading">
                    {t("resetAccountPassword")}
                </Typography>

                {/* sub heading */}
                <Typography variant="body1" color="secondary.dark" pb={3} aria-label="Reset password subheading">
                    {t("resetPasswordInstruction")}
                </Typography>

                {/* Reset password form */}
                <ResetForm t={t} />
            </Box>
        </Container>
    );
};

export default ResetPassword;
