"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { filterStatus } from "@/store/slices/course";
import { useDispatch } from "react-redux";
import { FormGroup, Typography } from "@mui/material";
import CustomCheckbox from "./customCheckbox";

const drawerWidth = 311;

function FilterDrawer(props) {
    const dispatch = useDispatch();
    const { window, children, open, t, filters } = props;

    const handleClose = () => {
        dispatch(filterStatus(false));
    };

    const drawer = (
        <div>
            <Typography variant="h4" pb={1} color="base1.dark4">{t("filterBy")}</Typography>
            {
                filters?.map(el => <div key={el?.id}>
                    <Typography variant="h6" py={0.5} color="base1.dark4">{t(el?.value)}</Typography>
                    <FormGroup pb={1}>
                        {
                            el?.filters?.map(e => <CustomCheckbox t={t} label={e?.value} key={e?.id} />)
                        }
                    </FormGroup>
                    {el?.filters?.length > 5 && <Typography py={1} variant="h6" color="base1.default">Show more</Typography>}

                </div>)
            }
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", columnGap: 2 }}>

            <Box
                component="div"
                sx={{ width: { lg: drawerWidth }, flexShrink: { md: 0, display: open ? "block" : "none" } }}
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="permanent"
                    open={open}
                    onClose={handleClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "block", md: "block", lg: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, px: 5, pt: "128px" },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="persistent"
                    sx={{
                        display: { xs: "none", sm: "none", md: "none", lg: "block" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, position: "relative", borderRight: 0 },
                    }}
                    open={open}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
            >
                {children}
            </Box>
        </Box >
    );
}

FilterDrawer.propTypes = {
    window: PropTypes.func,
};

export default FilterDrawer;
