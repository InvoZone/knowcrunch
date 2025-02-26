// Import Material-UI components
import TextField from "@mui/material/TextField";
import { InputLabel, Stack, Typography } from "@mui/material";

/**
 * CustomInput component provides a styled text input field with label
 * @param {string} label - Label text for the input field
 * @param {string} name - Name attribute for the input field
 * @param {number} mb - Margin bottom spacing (default: 0)
 * @param {string} type - Input type attribute (default: "text")
 * @param {string} placeholder - Placeholder text for the input field
 * @param {string} value - Value of the input field
 * @param {function} onChange - Handler function for input field changes
 */
export default function CustomInput1({
    label,
    name,
    mb = 0,
    type = "text",
    placeholder,
    value,
    onChange
}) {
    return (
        <Stack>
            {/* Input label */}
            {label && < InputLabel >
                <Typography
                    color={"neutral.neutral1"}
                    variant="body2"
                    fontWeight={400}
                    pb={0.5}
                >
                    {label}
                </Typography>
            </InputLabel>}

            {/* Text input field */}
            <TextField
                variant="outlined"
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete={name}
                placeholder={placeholder}
                sx={{
                    mb,
                    // Input field styling
                    "& input": {
                        height: 29,
                        color: "neutral.neutral2",
                        fontSize: 16,
                        fontWeight: 400,
                        padding: "8px 10px",
                    },
                    // Outline styling for different states
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "& fieldset": {
                            border: "1px solid",
                            borderColor: "neutral.neutral7",
                        },
                        "&:hover fieldset": {
                            border: "1px solid",
                            borderColor: "neutral.neutral7",
                        },
                        "&.Mui-focused fieldset": {
                            border: "1px solid",
                            borderColor: "neutral.neutral7",
                        },
                    },
                }}
                aria-label={`Input field for ${label}`}
            />
        </Stack >
    );
}
