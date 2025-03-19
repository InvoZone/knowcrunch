import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import certification from "@/assets/home/professional-diploma.webp";

// Certification component
const Certification: React.FC = () => {
    return (
        <Box component={"section"} sx={{ backgroundColor: "neutral.neutral10" }}>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", py: { xs: 4, md: 6 } }}>
                <Box
                    component={"div"}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        columnGap: 6,
                        maxWidth: 1136,
                        rowGap: 3,
                        px: { xs: 4, sm: 4, md: "58px", lg: 6 },
                        flexWrap: { xs: "wrap", lg: "unset" },
                    }}
                >
                    <Box
                        component={"div"}
                        sx={{
                            width: { xs: 327, md: 358 },
                            height: { xs: 237, md: 249 },
                            position: "relative",
                        }}
                        className="centerX"
                    >
                        <Image
                            src={certification}
                            alt="certification"
                            title="certification"
                            loading="lazy"
                            priority={false}
                            height={249}
                            sizes="(max-width: 575px) 336px, (max-width: 1279px) 354px, 354px"
                        />
                    </Box>
                    <Box
                        component={"div"}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: { xs: "center", lg: "start" },
                        }}
                    >
                        <Typography
                            variant="h2"
                            color="base1.dark4"
                            component={"h2"}
                            pb={2}
                            pr={{ xs: 1, sm: 4 }}
                            pl={{ xs: 1, sm: 0, md: 2, lg: 0 }}
                        >
                            Earn your professional certification or diploma
                        </Typography>
                        <Typography
                            variant="body"
                            color="neutral.neutral1"
                            pr={{ xs: 1, sm: 2 }}
                            pl={{ xs: 1, sm: 0 }}
                        >
                            Demonstrate your expertise with our professional certification options.
                            Successfully pass exams to achieve a prestigious Professional Diploma or
                            receive a Professional Certificate upon completing any of our other
                            courses.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

// Exporting the Certification component
export default Certification;
