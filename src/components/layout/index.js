// Import necessary components from Material-UI and local components
import { Box, Toolbar } from "@mui/material";
import Navbar from "./navbar";

// Layout component that wraps the entire application
// Provides consistent structure with navigation and main content area
const Layout = ({ children }) => {
    return (
        <Box>
            {/* Navigation bar component */}
            <Navbar />
            {/* Main content wrapper */}
            <Toolbar />
            <Box component={"main"} mt={{ xs: 3, sm: 2, md: 2, lg: 2 }} py={{ xs: 4, sm: 4, md: 4, lg: 6 }} px={{ xs: 0, sm: 0, md: 3, lg: 3 }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;