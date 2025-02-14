"use client";
import Image from "next/image";
import { Box, Grid2, Typography, useTheme } from "@mui/material";
import diploma from "@/assets/course/diploma.svg";
import styles from "./banner.module.scss";
import rightaward from "@/assets/icons/rightaward.svg";
import leftaward from "@/assets/icons/leftaward.svg";
import bannerstar from "@/assets/icons/bannerstar.svg";


export default function ProfileCard({ profileImage, name, title, company }) {
    const theme = useTheme();
    const { primary, base2, base1, link, neutral } = theme.palette;

    return (
        <Box className={styles.main} sx={{ padding: "48px",  }}>
            <Box className={styles.typo} >
                <Typography variant="h1" sx={{ color: base2.light6 }}>
                    Professional educational courses & training
                </Typography>
                <Typography variant="h4" sx={{ color: base2.light6 }}>
                Knowcrunch helps you learn, transform and thrive.
                </Typography>
                <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'8px'}}>
                    <Typography sx={{color:'white'}}>4.8</Typography> <Image loading="lazy" src={bannerstar} width={24} height={24} alt={"bannerstar"} /> <Typography sx={{color:'white'}}>Trustpilot</Typography>  <Image loading="lazy" src={leftaward} alt={"leftaward"} /> <Typography sx={{color:'white'}}>23 Awards</Typography> <Image loading="lazy" src={rightaward} alt={"rightaward"} />
                </Box>
            </Box>
            <Box></Box>
        </Box>
    );
}
