"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import type { FC, ChangeEvent, ReactNode } from 'react';
import { useTranslations } from "next-intl";
import type { DrawerFilter } from "@/constants/courses";
import DrawerFilterSection from "./DrawerFilterSection";

interface FilterDrawerProps {
    children: ReactNode;
    open: boolean;
    filters: DrawerFilter[];
    handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
    selectedFilters: string[];
    drawerWidth?: number;
    closeFilterBar: () => void;
    mobileWidth?: number;
}

const FilterDrawer: FC<FilterDrawerProps> = (
    { children, open, filters, handleChange, selectedFilters, drawerWidth = 233, closeFilterBar, mobileWidth = 211 }
) => {
    const t = useTranslations("general");

    const handleClose = () => {
        closeFilterBar();
    };

    const drawer = (
        <div>
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
            {filters?.map((el) => (
                <DrawerFilterSection key={el?.id} data={el} handleChange={handleChange} selectedFilters={selectedFilters} />
            ))}
        </div>
    );

    return (
        <Box sx={{ display: "flex", columnGap: { md: 0, lg: 2 } }}>
            <Box
                component="div"
                sx={{
                    width: { lg: drawerWidth },
                    flexShrink: { md: 0, display: open ? "block" : "none" },
                }}
            >
                <Drawer
                    variant="permanent"
                    open={open}
                    onClose={handleClose}
                    ModalProps={{
                        keepMounted: true,
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
                            width: mobileWidth,
                            px: 6,
                            pt: "128px",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
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
            <Box component={"div"} width={"100%"}>{children}</Box>
        </Box>
    );
};

export default FilterDrawer;
