// Import Material-UI components
import TextField from "@mui/material/TextField";
import { InputLabel, Stack, Typography } from "@mui/material";

/**
 * CustomInput component provides a styled text input field with label
 * @param {string} label - Label text for the input field
 * @param {string} name - Name attribute for the input field
 * @param {Object} formik - Formik instance for form handling
 * @param {number} mb - Margin bottom spacing (default: 0)
 * @param {string} type - Input type attribute (default: "text")
 */
export default function CustomInput({
    label,
    name,
    formik,
    mb = 0,
    type = "text",
}) {
    return (
        <Stack>
            {/* Input label */}
            <InputLabel>
                <Typography
                    color={"neutral.neutral1"}
                    variant="body2"
                    fontWeight={400}
                    pb={0.5}
                >
                    {label}
                </Typography>
            </InputLabel>

            {/* Text input field */}
            <TextField
                variant="outlined"
                name={name}
                type={type}
                value={formik.values?.[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched?.[name] && Boolean(formik.errors?.[name])}
                autoComplete={name}
                sx={{
                    mb,
                    // Input field styling
                    "& input": {
                        height: 29,
                        color: "neutral.neutral2",
                        fontSize: 16,
                        fontWeight: 400,
                        padding: "8px 10px",
                        // Add error background when field is touched and has error
                        background:
                            formik.touched?.[name] &&
                            Boolean(formik.errors?.[name]) &&
                            "#EF978F54",
                    },
                    // Outline styling for different states
                    "& .MuiOutlinedInput-root": {
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
            />
        </Stack>
    );
}
