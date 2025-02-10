"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "./utils/colors";

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: "light",
        primary: {
            main: "#152B56",
        },
        secondary: {
            main: "#FFFFFF",
            light: "#F4F5F6",
            dark: "#383C42"
        },
        tertiary: {
            main: "#000000",
        },
        ...colors
    },

});

theme.typography = {
    h1: {
        fontFamily: "Foco",
        fontSize: 50,
        fontWeight: 800,
        lineHeight: "60px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 40,
            lineHeight: "48px",
        }
    },
    h2: {
        fontFamily: "Foco",
        fontSize: 40,
        fontWeight: 800,
        lineHeight: "48px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
            lineHeight: "40px",
        }
    },
    h3: {
        fontFamily: "Foco",
        fontSize: 32,
        fontWeight: 800,
        lineHeight: "40px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 28,
            lineHeight: "36px",
        }
    },
    h4: {
        fontFamily: "Foco",
        fontSize: 28,
        fontWeight: 800,
        lineHeight: "36px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
            lineHeight: "32px",
        }
    },
    h5: {
        fontFamily: "Foco",
        fontSize: 24,
        fontWeight: 800,
        lineHeight: "32px"
    },
    h6: {
        fontFamily: "Foco",
        fontSize: 20,
        fontWeight: 800,
        lineHeight: "28px"
    },
    titleLg: {
        fontFamily: "Foco",
        fontSize: 18,
        fontWeight: 800,
        lineHeight: "24px",
        letterSpacing: "0.0015em",
    },
    titleMd: {
        fontFamily: "Foco",
        fontSize: 16,
        fontWeight: 800,
        lineHeight: "20px",
        letterSpacing: "0.001em"
    },
    titleSm: {
        fontFamily: "Foco",
        fontSize: 14,
        fontWeight: 800,
        lineHeight: "18px",
        letterSpacing: "0.004em"
    },
    subtitleLg: {
        fontFamily: "Foco",
        fontSize: 24,
        fontWeight: 400,
        lineHeight: "22px",
        letterSpacing: "0.004em",
    },
    subtitleSm: {
        fontFamily: "Foco",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "22px",
        letterSpacing: "0.004em"
    },
    body: {
        fontFamily: "Foco",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.001em"
    },
    body1: {
        fontFamily: "Foco",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.005em"
    },
    body2: {
        fontFamily: "Foco",
        fontSize: 12,
        fontWeight: 800,
        lineHeight: "16px",
        letterSpacing: "0.005em"
    },
};

export default theme;