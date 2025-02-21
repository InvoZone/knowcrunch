// Enable client-side rendering
"use client";

// Import necessary dependencies
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FormGroup, Typography } from "@mui/material";
import CustomCheckbox from "./customCheckbox";
import { CloseOutlined } from "@mui/icons-material";



/**
 * FilterDrawer Component
 * A responsive drawer component that displays filter options
 *
 * @param {Object} props - Component props
 * @param {Function} props.window - Window function for mobile drawer
 * @param {ReactNode} props.children - Child components to render
 * @param {boolean} props.open - Controls drawer open state
 * @param {Function} props.t - Translation function
 * @param {Array} props.filters - Array of filter options
 * @param {Function} props.handleChange - Handler for filter changes
 */
function FilterDrawer(props) {
    const {
        window,
        children,
        open,
        t,
        filters,
        handleChange,
        selectedFilters,
        drawerWidth = 311,
        closeFilterBar
    } = props;

    // Handle drawer close action
    const handleClose = () => {
        closeFilterBar();
    };

    // Drawer content component
    const drawer = (
        <div>
            {/* Header section with title and close button */}
            <Box
                component={"div"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography variant="h4" pb={1} color="base1.dark4">
                    {t("filterBy")}
                </Typography>
                <CloseOutlined
                    sx={{
                        color: "base1.dark4",
                        display: { xs: "block", lg: "none" },
                    }}
                    onClick={handleClose}
                />
            </Box>
            {/* Filter options mapping */}
            {filters?.map((el) => (
                <Box component={"div"} key={el?.id} pb={1}>
                    <Typography variant="h6" py={0.5} color="base1.dark4">
                        {t(el?.value)}
                    </Typography>
                    <FormGroup pb={1}>
                        {el?.filters?.map((e) => (
                            <CustomCheckbox
                                key={e?.id}
                                checked={selectedFilters?.includes(e?.value)}
                                label={t(`${e?.value}`)}
                                onChange={(event) => handleChange(event, e)}
                                name={e?.value}
                            />
                        ))}
                    </FormGroup>
                    {el?.filters?.length > 5 && (
                        <Typography pt={1} variant="h6" color="base1.default">
                            Show more
                        </Typography>
                    )}
                </Box>
            ))}
        </div>
    );

    // Container for mobile drawer
    const container =
        typeof window !== "undefined" ? () => window.document.body : undefined;

    return (
        <Box sx={{ display: "flex", columnGap: 2 }}>
            {/* Drawer wrapper */}
            <Box
                component="div"
                sx={{
                    width: { lg: drawerWidth },
                    flexShrink: { md: 0, display: open ? "block" : "none" },
                }}
            >
                {/* Mobile drawer implementation */}
                <Drawer
                    container={container}
                    variant="permanent"
                    open={open}
                    onClose={handleClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "block",
                            lg: "none",
                        },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            px: 6,
                            pt: "128px",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                {/* Desktop drawer implementation */}
                <Drawer
                    variant="persistent"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "none",
                            lg: "block",
                        },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            position: "relative",
                            borderRight: 0,
                        },
                    }}
                    open={open}
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* Main content area */}
            <Box component={"div"} width={"100%"}>{children}</Box>
        </Box>
    );
}

// PropTypes validation
FilterDrawer.propTypes = {
    window: PropTypes.func,
};

export default FilterDrawer;
