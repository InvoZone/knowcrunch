"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import diploma from "@/assets/course/professional-diploma.webp";
import styles from "./diploma.module.scss";

export default function Diploma( props ) {
    const theme = useTheme();
    const { base1, neutral } = theme.palette;

    return (
        <Box className={styles.main} sx={{flexDirection: props.customStyle ?  {sx: "column" , sm:"column", md:"column", lg:"row"}: ""}}>
            <Image className={styles.img} src={diploma} alt="diploma" />
            <Box className={styles.typo} sx={{textAlign: props.customStyle ? "center" :"" }}>
                <Typography variant= {props?.variant ? "h4" : "h2"} sx={{ color: base1.dark4 }}>
                {props?.heading ? props?.heading : 
                    "Earn your professional certification or diploma"
                }
                </Typography>
                <Typography variant="body" sx={{ color: neutral.neutral1 }}>
                {props?.desp ? props?.desp : 
                    `Demonstrate your expertise with our professional certification options. 
                    Successfully pass exams to achieve a prestigious Professional Diploma or 
                    receive a Professional Certificate upon completing any of our other courses.`
                }
                </Typography>
            </Box>
        </Box>
    );
}
