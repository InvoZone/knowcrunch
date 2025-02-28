"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import diploma from "@/assets/course/professional-diploma.webp";
import styles from "./diploma.module.scss";

export default function Diploma() {

    return (
        <Box component={"div"}
            sx={{
                display: "flex", justifyContent: "center",
                columnGap: 6, maxWidth: 1136, rowGap: 2,
                px: { xs: 4, sm: 4, md: "58px", lg: 6 },
                flexWrap: { xs: "wrap", lg: "unset" },
            }}
        >
            <Image className={styles.img} src={diploma} alt="diploma" loading="lazy" />
            <Box
                component={"div"}
                sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: { xs: "center", lg: "start" } }}
            >
                <Typography variant="h2" color="base1.dark4" component={"h4"} pb={2} px={{ xs: 2, sm: 0 }}>
                    Earn your professional certification or diploma
                </Typography>
                <Typography variant="body" color="neutral.neutral1" px={{ xs: 1, sm: 0 }}>
                    Demonstrate your expertise with our professional
                    certification options. Successfully pass exams to achieve a
                    prestigious Professional Diploma or receive a Professional
                    Certificate upon completing any of our other courses.
                </Typography>
            </Box>
        </Box >
    );
}
