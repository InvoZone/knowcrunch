"use client";
import { Box, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomBtn from "../common/customBtn";
import CustomInput1 from "../common/customInput1";
import { CloseOutlined } from "@mui/icons-material";

const CheckoutSummaryCard = () => {
    const [coupon, setCoupon] = useState("");
    return (
        <Box
            component='div'
            sx={{
                border: "0.75px solid",
                borderColor: "neutral.neutral9",
                borderRadius: 4,
                p: 2
            }}
        >
            <Typography variant="h4" color="base1.dark4" pb={2}>Summary</Typography>

            <Box component={"div"} py={2} sx={{ borderTop: "1px solid", borderBottom: "1px solid", minHeight: 160 }}>
                <Grid2 container columnSpacing={2} rowSpacing={0.5}>
                    <Grid2 size={8}>
                        <Typography variant="h6" color="base1.dark4" >Masterclass in Digital Marketing</Typography>
                    </Grid2>
                    <Grid2 size={4} display={"flex"} justifyContent={"flex-end"}>
                        <Typography variant="h5" color="base1.dark4" >550€</Typography>
                    </Grid2>

                    <Grid2 size={12}>
                        <Box
                            sx={{
                                border: "1px solid",
                                borderColor: "neutral.neutral9",
                                borderRadius: 1,
                                width: "fit-content",
                                px: "5px", height: 24,
                                alignItems: "center",
                                display: "flex",

                            }}
                        >
                            <Typography variant="body2" color="neutral.neutral2" >Regular</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={12} pt={1}>
                        <Typography variant="body1" color="error" >Remove from cart</Typography>
                    </Grid2>

                </Grid2>
            </Box>
            <Box component={"div"} py={2} className="centerY" justifyContent={"space-between"}>
                <Typography variant="h4" color="base1.dark4">Total:</Typography>
                <Typography variant="h4" color="base1.dark4">550€</Typography>
            </Box>

            <CustomBtn
                title='Checkout'
                variant="contain"
                sx={{ backgroundColor: "base1.default", width: "100%", paddingX: "20px", borderRadius: 2 }}
                color="secondary"
                txtVariant="h6"
                type="submit"
            />

            {coupon && < Box
                component={"div"}
                className="centerY"
                sx={{ border: "1px dashed", borderColor: "neutral.neutral9", borderRadius: 2, justifyContent: "space-between" }} px={1} py={2} mt={2}
            >
                <Typography variant="titleLg" color="neutral.neutral5">Applied coupon: {coupon}</Typography>
                <CloseOutlined color="tertiary" onClick={() => setCoupon("")} sx={{ cursor: "pointer" }} />
            </Box>}

            <Box component={"div"} display={"flex"} gap={2} pt={2}>
                <Box component={"div"} flexGrow={1}>
                    <CustomInput1
                        name={"coupon"}
                        placeholder={"Coupon"}
                    />
                </Box>
                <CustomBtn
                    title='Apply'
                    variant="contain"
                    sx={{ backgroundColor: "base2.light6", width: 91, paddingX: "20px", borderRadius: 2, border: "1px solid", borderColor: "base1.default" }}
                    color="base1.default"
                    onClick={() => setCoupon("AJWRDSQW")}
                />
            </Box>

        </Box >
    );
};

export default CheckoutSummaryCard;