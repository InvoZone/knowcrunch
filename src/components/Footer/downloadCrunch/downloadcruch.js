import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import "../footer.scss";

export default function CrunchCard() {
    return (
        <Box className="downloadCruch">
            <Typography variant="titleLg" sx={{ mb: 1.2 }}>
                Download KnowCrunch
            </Typography>
            <Image width={134} height={44} loading="lazy" src={"/icons/googleplay.svg"} alt={"googleplay"} />
            <Image width={134} height={44} loading="lazy" src={"/icons/appstore.svg"} alt={"googleplay"} />
        </Box>
    );
}
