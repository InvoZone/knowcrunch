import searchIcon from "@/assets/icons/search.svg";
import cancelIcon from "@/assets/icons/cross.svg";

import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

const SearchField = ({ handleClose }) => {
    return (
        <TextField
            id="input-with-icon-textfield"
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <Image
                                src={searchIcon}
                                width={24}
                                height={24}
                                alt={"searchIcon"}
                                loading="lazy"
                            />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            sx={{ cursor: "pointer" }}
                        >
                            <Image
                                src={cancelIcon}
                                width={24}
                                height={24}
                                alt={"cancelIcon"}
                                onClick={handleClose}
                                loading="lazy"
                            />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                "& input": {
                    color: "secondary.main",
                    fontSize: 16,
                    fontWeight: 800,
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
                    },
                },
            }}
            variant="outlined"
        />
    );
};

export default SearchField;
