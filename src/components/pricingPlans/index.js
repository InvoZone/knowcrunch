"use client";

import { useState } from "react";
import PricingCard from "./pricingCard";
import PricingToggle from "./pricingToggle";
import { Container, Grid2 } from "@mui/material";

const plans = [
    {
        id: "basic",
        title: "Basic",
        subTitle: "Extend access to all purchased courses for 1 year",
        price: "€200,00",
        benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
        borderColor: "#D4D292",
        buttonColor: "#D4D292",
        backgroundColor: "white",
        showMostPopular: true
    }
];

const PricingPlans = () => {
    const [period, setPeriod] = useState("annually");

    return (
        <Container maxWidth={"lg"}>
            <Grid2 container>
                <Grid2 size={{ xs: 12, sm: 12, md: 10, lg: 9 }}>

                    <Grid2 size={12}>
                        <PricingToggle period={period} setPeriod={setPeriod} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        {plans.map((plan) => (
                            <PricingCard
                                key={plan?.id}
                                plan={plan}
                                period={period}
                            />
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default PricingPlans;