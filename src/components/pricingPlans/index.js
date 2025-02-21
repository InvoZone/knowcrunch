"use client";

import { useState } from "react"; // Import useState hook for state management
import PricingCard from "./pricingCard"; // Import PricingCard component
import PricingToggle from "./pricingToggle"; // Import PricingToggle component
import { Container, Grid2, Typography } from "@mui/material"; // Import necessary components from MUI

// Define the pricing plans array
const plans = [
    {
        id: "basic",
        title: "Basic",
        subTitle: "Extend access to all purchased courses for 1 year",
        price: "€100,00",
        benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
        mostPopular: false
    },
    {
        id: "pro",
        title: "Pro",
        subTitle: "Extend access to all purchased courses for 1 year",
        price: "€200,00",
        benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
        mostPopular: true
    },
    {
        id: "premium",
        title: "Premium",
        subTitle: "Extend access to all purchased courses for 1 year",
        price: "€400,00",
        benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
        mostPopular: false
    },
];

// Define the PricingPlans component
const PricingPlans = () => {
    // Use useState to manage the period state
    const [period, setPeriod] = useState("annually");

    return (
        <Container maxWidth={"lg"}>
            <Grid2 container justifyContent={"center"}>
                <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 10 }}>
                    <Grid2 size={12}>
                        <Typography variant="h2" color="tertiary" pb={1}>Pricing Plans</Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="h4" color="tertiary" pb={2}>
                            Choose a plan
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="body" color="tertiary" component={"p"} pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Typography>

                        <Grid2 size={12} textAlign={"center"} pb={4}>
                            <PricingToggle period={period} setPeriod={setPeriod} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container size={{ xs: 12, sm: 12, md: 10, lg: 10 }} rowSpacing={3} columnSpacing={{ xs: 0, sm: 3 }} justifyContent={"center"}>
                    <Grid2 container size={12} display={{ xs: "flex", lg: "none" }} justifyContent='center'>
                        <Grid2 size={{ xs: 10, sm: 6 }} justifyContent={"center"} display={"flex"}>

                            {/* Pricing card */}
                            <PricingCard
                                plan={plans?.[1]}
                                period={period}
                            />
                        </Grid2>
                    </Grid2>
                    {plans.map((plan) => (
                        <Grid2 size={{ xs: 10, sm: 6, md: 6, lg: 4 }} key={plan?.id} display={{ xs: plan?.mostPopular ? "none" : "flex", lg: "flex" }} justifyContent={"center"}>
                            {/* Pricing card */}
                            <PricingCard
                                plan={plan}
                                period={period}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>
        </Container >
    );
};

export default PricingPlans;