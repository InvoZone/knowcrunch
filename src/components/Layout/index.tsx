// Import necessary components from Material-UI and local components
import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ForgotPassword from "../Auth/ForgotPassword";

// Layout component that wraps the entire application
// Provides consistent structure with navigation and main content area
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box component={"div"} aria-label="Application Layout">
            {/* Navigation bar component */}
            <Navbar aria-label="Navigation Bar" />
            {/* Main content wrapper */}
            <Box component={"main"} aria-label="Main Content">
                {children}
                {/* Popups  component */}
                <ForgotPassword aria-label="Forgot Password" />
            </Box>
            {/* Footer  component */}
            <Footer aria-label="Footer" />
        </Box>
    );
};

export default Layout;
