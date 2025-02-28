import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const ScrollBtn = ({ onClick, src, alt, leftArrowPosition, rightArrowPosition }) => {
    return (
        <Box component={"div"}
            sx={{
                position: "absolute",
                zIndex: 1,
                border: "1px solid",
                borderColor: "neutral.neutral2",
                borderRadius: 6,
                width: 40,
                height: 40,
                boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
                backgroundColor: "secondary.main",
                cursor: "pointer",
                ...leftArrowPosition,
                ...rightArrowPosition
            }}
            className="center"
            onClick={onClick}
        >
            <Image src={src} alt={alt} height={24} width={24} loading="lazy" aria-label={alt} />
        </Box>
    );
};

export default ScrollBtn;

