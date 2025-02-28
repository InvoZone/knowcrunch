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
                    <Typography variant="h1" sx={{ color: base2.light6, marginBottom: "8px", letterSpacing:0 }}>
                        Professional educational courses & training
                    </Typography>
                    <Typography variant="h4" sx={{ color: base2.light6, marginBottom: "32px" }} component={"h2"}>
                        Knowcrunch helps you learn, transform and thrive.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h6" sx={{ color: "white", mr: 0.5 }} component={"p"}>4.8</Typography>{" "}
                        <Image
                            loading="lazy"
                            src="/icons/bannerstar.svg"
                            width={24}
                            height={24}
                            alt={"bannerstar"}
                        />{" "}
                        <Typography variant="h6" sx={{ color: "white", ml: 0.5, marginRight: "32px" }} component={"p"}>
                            Trustpilot
                        </Typography>{" "}
                        <Image
                            loading="lazy"
                            src="/icons/leftaward.svg"
                            width={17}
                            height={52}
                            alt={"leftaward"}
                        />{" "}
                        <Typography variant="h6" sx={{ color: "white" }} component={"p"}>
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
