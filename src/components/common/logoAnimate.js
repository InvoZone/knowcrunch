'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Marquee from 'react-fast-marquee' // Import Marquee
import * as styles from './logoAnimate.module.scss' // Import CSS for styling
import {
    Box,
    Container,
    Grid2,
    Menu,
    MenuItem,
    Typography,
    useTheme,
} from "@mui/material";
import skodalogo from "@/assets/icons/skodalogo.svg";
import emiratelogo from "@/assets/icons/emiratelogo.svg";
import audilogo from "@/assets/icons/audilogo.svg";
import ingrouplogo from "@/assets/icons/ingrouplogo.svg";
import volklogo from "@/assets/icons/volklogo.svg";
import ddlogo from "@/assets/icons/ddlogo.svg";
import knowcrunchlogo from "@/assets/icons/knowcrunchlogo.svg";
import pepsilogo from "@/assets/icons/pepsilogo.svg";
import sarantislogo from "@/assets/icons/sarantislogo.svg";
import trainedlogo from "@/assets/icons/trainedlogo.svg";

const logoAnimate = () => {
    const theme = useTheme();
    const { primary, base2, base1, neutral, background } = theme.palette;
  const [selected, setSelected] = useState(0)

  const handleSelect = (index) => {
    setSelected(index)
  }

  return (
    <Box className={styles.LogoAnimate} sx={{padding:'4px 48px',display:'flex', background:'white', alignItems:'center', justifyContent:'start', border:`1px solid ${neutral.neutral9}` , borderRadius:'48px'}}>
       <Typography variant='titleMd' sx={{width:'150px', color:base1.dark4}}>Trusted by</Typography>
      <Marquee>
        {[skodalogo, emiratelogo, audilogo, ingrouplogo, volklogo, ddlogo, knowcrunchlogo, pepsilogo, sarantislogo, trainedlogo].map((item, index) => (
          <Box 
            key={index} sx={{padding: '0 24px'}}
          >
            <Image loading="lazy" src={item} alt={"item"} />
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}

export default logoAnimate