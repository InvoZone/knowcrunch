// Import necessary Material-UI components
import { Checkbox, FormControlLabel } from "@mui/material";

/**
 * CustomCheckbox Component
 * A customized checkbox component with consistent styling
 *
 * @param {string} label - The label text to display next to checkbox
 * @param {function} t - Translation function for the label
 * @param {boolean} checked - The checked state of the checkbox
 * @param {function} onChange - Handler function for checkbox state changes
 */
const CustomCheckbox = ({ label, checked, onChange, name }) => {
    return (
        <FormControlLabel
            sx={{
                height: 32,
                mr: 0,
                // Style customization for the checkbox label
                "& .MuiFormControlLabel-label": {
                    color: "neutral.neutral1",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 3,
                    letterSpacing: 0.016,
                },
            }}
            control={
                // Custom styled checkbox with ripple effect disabled
                <Checkbox
                    disableRipple
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    sx={{
                        color: "base1.dark4", // Unchecked color
                        "&.Mui-checked": {
                            color: "base1.default", // Checked color
                        },
                    }}
                />
            }
            label={label}
        />
    );
};

export default CustomCheckbox;
