import { Box } from "@mui/material";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Box component={"main"}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;