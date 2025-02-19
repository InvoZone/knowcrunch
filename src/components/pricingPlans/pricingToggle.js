import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const PricingToggle = ({ setPeriod, period }) => {
    const handleChange = (_event, billing) => {
        setPeriod(billing);
    };

    return (
        <ToggleButtonGroup
            value={period}
            exclusive
            onChange={handleChange}
            sx={{
                border: "2px solid",
                borderColor: "base1.default",
                borderRadius: 6,
                overflow: "hidden",
                "& .MuiToggleButton-root": {
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
                        backgroundColor: "base1.default",
                        color: "secondary.main",
                        "&:hover": {
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

export default PricingToggle;
