"use client";
import { Box, Typography } from "@mui/material"; // Import necessary components from Material-UI
import CustomBtn from "../common/customBtn"; // Import custom button component
import CustomDialog from "../common/customDialog"; // Import custom dialog component
import { useState } from "react"; // Import useState hook from React
import CustomCheckbox from "../common/customCheckbox"; // Import custom checkbox component

// Define the TermsPopup component
const TermsPopup = () => {
    // State to manage the dialog open state
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Custom button to open the dialog */}
            <CustomBtn
                title='Submit'
                variant="contain"
                sx={{ backgroundColor: "base1.default", width: 204, paddingX: "20px", borderRadius: 2 }}
                color="secondary"
                onClick={() => setOpen(true)}
            />
            {/* Custom dialog component */}
            <CustomDialog
                open={open}
                handleClose={() => setOpen(false)}
                width={{ xs: 360, sm: 480, lg: 800 }}
                px={{ xs: 3, md: 4 }}
                py={4}
            >
                {/* Dialog content */}
                <Typography variant="h2" color="tertiary">Page Title</Typography>
                <Typography variant="h4" color="tertiary" py={1.5}>Page Subtitle</Typography>
                <Box component={"div"} sx={{ overflowY: "auto", maxHeight: 260, minHeight: 100 }}>

                    <Typography variant="body" color="tertiary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </Typography>

                    <Box component={"div"} my={4} className='center' backgroundColor='#D9D9D9' height={200}>
                        <Typography variant="h2" color='tertiary'>Page Builder Blocks</Typography>
                    </Box>
                </Box>

                {/* Variant 2 */}
                {/* <Divider /> */}
                {/* Variant 2 */}

                <Box component={"div"} pt={1}>
                    <CustomCheckbox label='Lorem ipsum dolor' />
                </Box>

                <Box component={"div"} display={"flex"} gap={2} pt={2}>
                    {/* Variant 2 */}
                    {/* <CustomBtn
                        title='Cancel'
                        variant="contain"
                        sx={{ backgroundColor: "base2.light6", width: 102, paddingX: "20px", borderRadius: 2, border: "1px solid", borderColor: "base1.default" }}
                        color="base1.default"
                        onClick={() => setOpen(false)}
                    /> */}
                    {/* Variant 2 */}

                    {/* Custom button to close the dialog */}
                    <CustomBtn
                        title='Submit'
                        variant="contain"
                        sx={{ backgroundColor: "base1.default", width: 204, paddingX: "20px", borderRadius: 2 }}
                        color="secondary"
                        onClick={() => setOpen(false)}
                    />
                </Box>
            </CustomDialog>
        </>
    );
};

export default TermsPopup;