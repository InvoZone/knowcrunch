import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import googleplayimage from "@/assets/footer/googleplay.svg";
import appstoreimage from "@/assets/footer/appstore.svg";
import "../footer.scss";

export default function CrunchCard() {
    return (
        <Box className="downloadCruch">
            <Typography variant="titleLg" sx={{ mb: 1.2 }}>
                Download KnowCrunch
            </Typography>
            <Image loading="lazy" src={appstoreimage} alt={"appstoreimage"} />
            <Image
                loading="lazy"
                src={googleplayimage}
                alt={"googleplayimage"}
            />
        </Box>
    );
}
