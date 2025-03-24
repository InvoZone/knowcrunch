"use client";

import TextField from "@mui/material/TextField";
import { InputLabel, Stack, Typography } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import type { FormikProps } from "formik";

// Define the props with a generic type <T>
interface CustomInputProps<T> {
    readonly label?: string;
    readonly name: keyof T;
    readonly formik: FormikProps<T>;
    readonly mb?: number;
    readonly type?: string;
    readonly placeholder?: string;
    readonly slotProps?: TextFieldProps["slotProps"];
}

// Define CustomInput as a generic component
export default function CustomInput<T>({
    label,
    name,
    formik,
    mb = 0,
    type = "text",
    placeholder,
    slotProps
}: CustomInputProps<T>) {
    return (
        <Stack>
            {label && (
                <InputLabel aria-label={`Label for ${String(name)}`}>
                    <Typography
                        color="neutral.neutral1"
                        variant="body2"
                        fontWeight={400}
                        pb={0.5}
                    >
                        {label}
                    </Typography>
                </InputLabel>
            )}

            <TextField
                variant="outlined"
                name={String(name)}
                type={type}
                value={formik.values?.[name] as string | number | undefined} // Ensure type safety
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched?.[name] && Boolean(formik.errors?.[name])}
                autoComplete={String(name)}
                placeholder={placeholder}
                aria-label={`Input field for ${String(name)}`}
                slotProps={slotProps}
                sx={{
                    mb,
                    "& input": {
                        height: 29,
                        background:
                            formik.touched?.[name] && Boolean(formik.errors?.[name])
                                ? "#EF978F54"
                                : undefined,
                        color: "neutral.neutral2",
                        fontSize: 16,
                        fontWeight: 400,
                        padding: "8px 10px",
                    },
                    "& .MuiOutlinedInput-root": {
                        "borderRadius": 2,
                        "overflow": "hidden",
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
