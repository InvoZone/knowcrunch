import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ label, t }) => {
    return (
        <FormControlLabel sx={{
            height: 32, "& .MuiFormControlLabel-label": {
                color: "neutral.neutral1",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 24,
                letterSpacing: 0.016
            }
        }} control={<Checkbox disableRipple sx={{
            color: "base1.dark4",
            "&.Mui-checked": {
                color: "base1.default",
            },
        }} />} label={t(label)} />
    );
};

export default CustomCheckbox;
