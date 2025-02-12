import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomPagination() {
    return (
        <Stack spacing={2}>
            <Pagination
                count={4}
                hideNextButton={true}
                hidePrevButton={true}
                size="large"
                sx={{
                    "& .MuiPagination-text": {
                        color: "base1.dark4",
                        fontSize: 16,
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: 20, /* 125% */
                    },
                    "& .Mui-selected": {
                        bgcolor: "base2.light6",
                        border: "1px solid",
                        borderColor: "base1.default",
                    }
                }}
            />
        </Stack>
    );
}
