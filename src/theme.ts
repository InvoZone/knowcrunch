"use client";
import { createTheme } from "@mui/material/styles";
import type { Base1, Base2, Neutral, Accents } from "@/constants/colors";
import { colors } from "@/constants/colors";

// Extend the MUI theme to include custom palette and typography options
declare module "@mui/material/styles" {
    // Custom palette and typography options
    interface Palette {
        tertiary: Palette["primary"];
        base1: Base1;
        base2: Base2;
        neutral: Neutral;
        accents: Accents;
    }
    interface PaletteOptions {
        tertiary?: PaletteOptions["primary"];
        base1?: Base1;
        base2?: Base2;
        neutral?: Neutral;
        accents?: Accents;
    }
    interface TypographyVariants {
        titleLg: React.CSSProperties;
        titleMd: React.CSSProperties;
        titleSmall: React.CSSProperties;
        titleSm: React.CSSProperties;
        subtitleLg: React.CSSProperties;
        subtitleSm: React.CSSProperties;
        body: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        titleLg?: React.CSSProperties;
        titleMd?: React.CSSProperties;
        titleSmall?: React.CSSProperties;
        titleSm?: React.CSSProperties;
        subtitleLg?: React.CSSProperties;
        subtitleSm?: React.CSSProperties;
        body?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options to include custom variants
declare module "@mui/material/Typography" {
    // Allow custom variants
    interface TypographyPropsVariantOverrides {
        titleLg: true;
        titleMd: true;
        titleSmall: true;
        titleSm: true;
        subtitleLg: true;
        subtitleSm: true;
        body: true;
    }
}

// Create a custom theme with extended palette and typography options
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 834,
            lg: 1280,
            xl: 1728,
        },
    },
    cssVariables: true,
    palette: {
        mode: "light",
        primary: {
            main: "#152B56",
        },
        secondary: {
            main: "#FFFFFF",
            light: "#F4F5F6",
            dark: "#383C42",
        },
        tertiary: {
            main: "#000000",
        },
        ...colors,
    },
});

// Define custom typography options
theme.typography = {
    fontFamily: "Foco",
    fontSize: 16,
    htmlFontSize: 16,
    pxToRem: (px: number) => `${px / 16}rem`,
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightLight: 500,
    fontWeightRegular: 400,
    h1: {
        fontSize: 50,
        fontWeight: 800,
        lineHeight: "60px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 40,
            lineHeight: "48px",
        },
    },
    h2: {
        fontSize: 40,
        fontWeight: 800,
        lineHeight: "48px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
            lineHeight: "40px",
        },
    },
    h3: {
        fontSize: 32,
        fontWeight: 800,
        lineHeight: "40px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 28,
            lineHeight: "36px",
        },
    },
    h4: {
        fontSize: 28,
        fontWeight: 800,
        lineHeight: "36px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
            lineHeight: "32px",
        },
    },
    h5: {
        fontSize: 24,
        fontWeight: 800,
        lineHeight: "32px",
    },
    h6: {
        fontSize: 20,
        fontWeight: 800,
        lineHeight: "28px",
    },
    titleLg: {
        fontSize: 18,
        fontWeight: 800,
        lineHeight: "24px",
        letterSpacing: "0.0015em",
    },
    titleMd: {
        fontSize: 16,
        fontWeight: 800,
        lineHeight: "20px",
        letterSpacing: "0.001em",
    },
    titleSmall: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.0017em",
    },
    titleSm: {
        fontSize: 14,
        fontWeight: 800,
        lineHeight: "18px",
        letterSpacing: "0.004em",
    },
    subtitleLg: {
        fontSize: 24,
        fontWeight: 400,
        lineHeight: "22px",
        letterSpacing: "0.004em",
    },
    subtitleSm: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "22px",
        letterSpacing: "0.004em",
    },
    body: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.001em",
    },
    body1: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.005em",
    },
    body2: {
        fontSize: 12,
        fontWeight: 800,
        lineHeight: "16px",
        letterSpacing: "0.005em",
    },
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {},
};

export default theme;
