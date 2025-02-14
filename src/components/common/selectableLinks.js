'use client'
import React, { useState } from 'react'
import * as styles from './selectableLinks.module.scss' // Import CSS for styling
import {
    Box,
    Typography,
    useTheme,
} from "@mui/material";

const links = () => {
    const theme = useTheme();
    const {  base2, neutral } = theme.palette;
    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        setSelected(index)
    }

    return (
        <Box>
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

export default links