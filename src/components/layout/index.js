// Import necessary components from Material-UI and local components
import { Box } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./Footer";

// Layout component that wraps the entire application
// Provides consistent structure with navigation and main content area
const Layout = ({ children }) => {
    return (
        <Box>
            {/* Navigation bar component */}
            <Navbar />
            {/* Main content wrapper */}
            <Box
                component={"main"}
            >
                {children}
            </Box>
            {/* Footer  component */}
            <Footer />
        </Box>
    );
};

export default Layout;
