import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Location from "@/assets/course/locationDetail.webp";

function Locationinfo() {

    return (
        <Box>
            <Typography variant="h4" sx={{ color: "base1.dark4", mt:3, marginBottom:"16px" }}>
                Location
            </Typography>
            <Box sx={{display:"flex", alignItems:"center", gap:"8px", paddingRight:"32px", mb:1}}>
                <Image src="/icons/location.svg" width={24} height={24} loading="lazy" alt="Map of OTE Academy"/>
                <Typography variant="titleLg" sx={{ color: "base1.default" }}>
                    OTE Academy - Πέλικα και Σπάρτης, Μαρούσι 151 22
                </Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", gap:"8px", mb:0.5}}>
                <Image src="/icons/locationinfo.svg" width={24} height={24} loading="lazy" alt="Map of OTE Academy info"/>
                <Typography variant="body" sx={{ color: "tertiary.main" }}>
                    Location description lorem ipsum dolor lorem ipsum
                </Typography>
            </Box>
            <Image src={Location} alt="Map of OTE Academy" layout="responsive" />
        </Box>
    );
}

export default Locationinfo;
