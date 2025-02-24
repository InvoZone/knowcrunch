import { Box, Container, Grid2, Typography } from "@mui/material"; // Import necessary components from Material-UI
import React from "react"; // Import React
import CustomCheckbox from "../common/customCheckbox"; // Import custom checkbox component
import TermsPopup from "./termsPopup"; // Import TermsPopup component

// Define the Terms component
const Terms = () => {
    return (
        <Container maxWidth='xl'> {/* Container with max width set to 'xl' */}
            <Grid2
                container
                justifyContent={"center"}
            >
                <Grid2
                    size={{ xs: 12, lg: 10, xl: 11 }}
                >
                    <Typography variant="h2" color="tertiary">Title H2</Typography> {/* H2 title */}
                    <Typography variant="h4" color="tertiary" pt={1} pb={2}>Subtitle</Typography> {/* H4 subtitle */}
                    <Typography variant="body" color="tertiary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </Typography> {/* Body text */}

                    <Typography variant="h3" color="tertiary" pb={2} pt={4}>Title H3</Typography> {/* H3 title */}
                    <Typography variant="body" color="tertiary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </Typography> {/* Body text */}

                    <Typography variant="h3" color="tertiary" pb={2} pt={4}>Title H3</Typography> {/* H3 title */}
                    <Typography variant="body" color="tertiary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </Typography> {/* Body text */}

                    <Box pt={4} pb={2}> {/* Box with padding */}
                        <CustomCheckbox label='Lorem ipsum dolor' /> {/* Custom checkbox */}
                    </Box>

                    <TermsPopup /> {/* TermsPopup component */}

                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Terms;