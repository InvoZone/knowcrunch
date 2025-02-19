import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

// Define the PricingToggle component
const PricingToggle = ({ setPeriod, period }) => {
    // Function to handle the change event of the toggle button
    const handleChange = (_event, billing) => {
        // If billing is not undefined, set the period to the billing value
        billing && setPeriod(billing);
    };

    // Return the ToggleButtonGroup component
    return (
        <ToggleButtonGroup
            value={period} // Set the value of the ToggleButtonGroup to the current period
            exclusive // Make the selection exclusive
            onChange={handleChange} // Handle change event
            sx={{
                // Styles for the ToggleButtonGroup
                border: "2px solid",
                borderColor: "base1.default",
                borderRadius: 6,
                overflow: "hidden",
                "& .MuiToggleButton-root": {
                    // Styles for the ToggleButton
                    color: "base1.default",
                    textTransform: "none",
                    borderRadius: 6,
                    margin: "2px",
                    transition: "all 0.3s",
                    height: 34,
                    width: 99,
                    py: 0.5,
                    px: 2,
                    border: 0,
                    boxShadow: "none",
                    "&.Mui-selected": {
                        // Styles for the selected ToggleButton
                        backgroundColor: "base1.default",
                        color: "secondary.main",
                        "&:hover": {
                            // Styles for the selected ToggleButton on hover
                            backgroundColor: "base1.default",
                        }
                    },
                },
            }}
        >
            <ToggleButton value="annually"><Typography variant="titleLg" fontWeight={400}>Annually</Typography></ToggleButton>
            <ToggleButton value="monthly"><Typography variant="titleLg" fontWeight={400}>Monthly</Typography></ToggleButton>
        </ToggleButtonGroup>
    );
};

// Export the PricingToggle component
export default PricingToggle;
