"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const TickMark = ({ text }) => {
    return (
        <Box sx={{display:"flex", gap:"6px"}}>
            <Image
                loading="lazy"
                src="/icons/tick.svg"
                width={24}
                height={24}
                alt={"Tick"}
            />
            <Typography variant="body">
                {text}
            </Typography>
        </Box>
    );
};

export default TickMark;