import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

const SearchField = ({ handleClose }) => {
    return (
        <TextField
            id="input-with-icon-textfield"
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined color="secondary" />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                            <CloseOutlined color="secondary" onClick={handleClose} />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                "& input": {
                    color: "secondary.main",
                    fontSize: 16,
                    fontWeight: 800
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: 0,
                        borderBottomWidth: "1px",
                        borderColor: "base1.dark2", // Default border color
                    },
                    "&:hover fieldset": {
                        border: 0,
                        borderBottomWidth: "1px",
                        borderColor: "base1.dark2", // Default border color
                    },
                    "&.Mui-focused fieldset": {
                        border: 0,
                        borderBottomWidth: "1px",
                        borderColor: "base1.dark2", // Default border color
                    }
                }
            }}
            variant="outlined"
        />
    );
};

export default SearchField;