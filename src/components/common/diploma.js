"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import diploma from "@/assets/course/diploma.svg";
import styles from "./diploma.module.scss";

export default function Diploma() {
    const theme = useTheme();
    const {  base1, neutral } = theme.palette;

    return (
        <Box className={styles.main}>
            <Image className={styles.img} src={diploma}  alt="diploma" />
            <Box className={styles.typo} >
                <Typography variant="h2" sx={{ color: base1.dark4 }}>
                    Earn your professional certification or diploma
                </Typography>
                <Typography variant="body" sx={{ color: neutral.neutral1 }}>
                    Demonstrate your expertise with our professional
                    certification options. Successfully pass exams to achieve a
                    prestigious Professional Diploma or receive a Professional
                    Certificate upon completing any of our other courses.
                </Typography>
            </Box>
        </Box>
    );
}
