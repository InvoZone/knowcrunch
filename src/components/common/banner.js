"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import styles from "./banner.module.scss";

export default function Banner() {
    const theme = useTheme();
    const { base2 } = theme.palette;

    return (
        <Box className={styles.main} sx={{ padding: "48px" }}>
            <Box
                maxWidth="xl"
                sx={{ padding: 0 }}
            >
                <Box className={styles.typo}>
                    <Typography variant="h1" sx={{ color: base2.light6 }}>
                        Professional educational courses & training
                    </Typography>
                    <Typography variant="h4" sx={{ color: base2.light6 }}>
                        Knowcrunch helps you learn, transform and thrive.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <Typography variant="h6" sx={{ color: "white" }}>4.8</Typography>{" "}
                        <Image
                            loading="lazy"
                            src="/icons/bannerstar.svg"
                            width={24}
                            height={24}
                            alt={"bannerstar"}
                        />{" "}
                        <Typography variant="h6" sx={{ color: "white" }}>
                            Trustpilot
                        </Typography>{" "}
                        <Image
                            loading="lazy"
                            src="/icons/leftaward.svg"
                            width={17}
                            height={52}
                            alt={"leftaward"}
                        />{" "}
                        <Typography variant="h6" sx={{ color: "white" }}>
                            23 Awards
                        </Typography>{" "}
                        <Image
                            loading="lazy"
                            src="/icons/rightaward.svg"
                            alt={"rightaward"}
                            width={19}
                            height={52}
                        />
                    </Box>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
}
