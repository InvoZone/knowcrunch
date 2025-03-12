import { memo } from "react";
import { Box } from "@mui/material";
import Certification from "./Certification";

const Home: React.FC = () => {
    return (
        <Box component="div">
            {/* Certification */}
            <Certification />
        </Box>
    );
};

export default memo(Home);
