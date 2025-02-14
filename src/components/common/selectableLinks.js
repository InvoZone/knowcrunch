'use client'
import React, { useState } from 'react'
import * as styles from './selectableLinks.module.scss' // Import CSS for styling
import {
    Box,
    Container,
    Grid2,
    Menu,
    MenuItem,
    Typography,
    useTheme,
} from "@mui/material";

const logoAnimate = () => {
    const theme = useTheme();
    const { primary, base2, base1, neutral, background } = theme.palette;
    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        setSelected(index)
    }

    return (
        <Box>
            {/* Removed Marquee and replaced with a static layout */}
            <Box display="flex" flexDirection="row" overflow="auto" sx={{gap:'8px'}}>
                {['Content marketing', 'Social media marketing', 'Social engine optimization', 'Influencer marketing', 'Performance marketing', 'Email & mobile marketing'].map((item, index) => (
                    <Box 
                      sx={{ color: index == selected ? base2.light6 : neutral.neutral1, border: `1px solid ${neutral.neutral1}` }}
                      key={index}
                      className={`${styles.logoItem} ${index == selected ? styles.selected : ''}`}
                      onClick={() => handleSelect(index)}
                    >
                       <Typography sx={{width:'max-content'}}>{item}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default logoAnimate