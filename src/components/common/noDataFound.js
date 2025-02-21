import { Box, Typography } from "@mui/material"; // Import necessary dependencies from MUI
import Image from "next/image"; // Import Image component from next/image for image rendering

// NoDataFound component definition
const NoDataFound = ({ message }) => {
    // Return JSX for the component
    return (
        <Box component={"div"} textAlign={"center"} py={6}> {/* Center-aligned box with padding */}
            <Image src={"/icons/searchNotFound.svg"} alt='not found' loading="lazy" width={24} height={24} /> {/* Image for not found icon */}
            <Typography pt={0.5} component={"div"} variant="subtitleSm" color="secondary.dark">
                {/* Display message or default message if no message is provided */}
                {message || "No courses found with the selected criteria. Please refine your search"}
            </Typography>
        </Box>
    );
};

export default NoDataFound; // Export the NoDataFound component