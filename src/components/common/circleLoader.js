import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
    circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

// Inspired by the former Facebook spinners.
function CustomCircularProgress(props) {
    return (
        <Box sx={{ position: "relative" }}>
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: "tertiary",
                    ...theme.applyStyles("dark", {
                        color: "blue",
                    }),
                })}
                size={props.size}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={(theme) => ({
                    color: "neutral.neutral8",
                    animationDuration: "550ms",
                    position: "absolute",
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: "round",
                    },
                    ...theme.applyStyles("dark", {
                        color: "#308fe8",
                    }),
                })}
                size={props.size}
                thickness={4}
                {...props}
            />
        </Box>
    );
}

export default function CircleLoader({ size = 24 }) {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1, pt: 1 }}>
            <CustomCircularProgress size={size} />
        </Stack>
    );
}
