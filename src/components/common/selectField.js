"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import CustomBtn from "./customBtn";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { Typography } from "@mui/material";

export default function TransitionsPopper({ options }) {
    const t = useTranslations("sort");
    const [open, setOpen] = React.useState(false);
    const [anchorElSelect, setAnchorElSelect] = React.useState(null);
    const [sort, setSort] = React.useState("popularity");

    const handleClick = (event) => {
        setAnchorElSelect(anchorElSelect ? null : event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const onSelect = (e) => {
        setSort(e);
        setAnchorElSelect(null);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorElSelect);
    const id = canBeOpen ? "transition-popper" : undefined;

    return (
        <div aria-label="Sort Options">
            <CustomBtn
                variant="outlined"
                onClick={handleClick}
                title={`${t("sortBy")} : ${t(sort)}`}
                endIcon={
                    <Image
                        src={open ? "/icons/chevDown.svg" : "/icons/chevUp.svg"}
                        alt="filter"
                        width={24}
                        height={24}
                    />
                }
                sx={{
                    borderRadius: 8,
                    borderColor: "neutral.neutral1",
                    backgroundColor: open && "neutral.neutral1",
                }}
                txtVariant={"titleLg"}
                fontWeight="400"
                color={open ? "secondary" : "neutral.neutral1"}
                aria-label={`Sort by ${t(sort)}`}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorElSelect}
                onClose={handleClick}
                disableScrollLock={true}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                }}
                sx={{
                    mt: 13.5,
                    minHeight: 100,
                    "& .MuiPaper-root": {
                        border: "1px solid",
                        borderColor: "neutral.neutral9",
                        boxShadow: "none",
                        borderRadius: 2,
                    },
                }}
                aria-label="Sort Options Popover"
            >
                <Box
                    sx={{
                        py: 3,
                        px: 4,
                        bgcolor: "secondary",
                    }}
                    component={"div"}
                    aria-label="Sort Options List"
                >
                    {options?.map((el) => (
                        <Box
                            key={el?.id}
                            sx={{
                                cursor: "pointer",
                                alignItems: "center",
                                display: "flex",
                            }}
                            component={"div"}
                            height={40}
                            minWidth={200}
                            onClick={() => onSelect(el?.value)}
                            aria-label={`Select ${el?.value}`}
                        >
                            <Typography
                                variant="titleLg"
                                color="neutral.neutral1"
                                fontWeight={400}
                            >
                                {el?.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Popover>
        </div>
    );
}
