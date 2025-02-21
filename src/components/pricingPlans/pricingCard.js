import { Typography, Box } from "@mui/material"; // Import necessary dependencies from MUI
import Image from "next/image"; // Import Image component from next/image for image rendering
import CustomBtn from "../common/customBtn"; // Import custom button component

// PricingCard component definition
const PricingCard = ({ plan, period, width = "100%" }) => (
    <Box
        component="div"
        sx={{
            p: 2, // Padding
            pt: 3, // Padding top
            border: "2px solid", // Border
            width: width, // Max width based on screen size
            minWidth: 301,
            borderColor: plan?.mostPopular ? "accents.bubble1" : "neutral.neutral9", // Border color based on mostPopular flag
            borderRadius: 4, // Border radius
            position: "relative", // Position relative
            boxShadow: plan?.mostPopular && "0px 4px 24px 0px rgba(0, 0, 0, 0.10)" // Box shadow for most popular plan
        }}
    >
        {plan?.mostPopular && (
            <Box component="div" width="100%" className="centerX"> {/* Centered box for most popular label */}
                <Box component="div"
                    sx={{
                        height: 34, // Height
                        padding: "6px", // Padding
                        borderRadius: 2, // Border radius
                        backgroundColor: "accents.bubble1", // Background color
                        width: "fit-content", // Width
                        position: "absolute", // Position absolute
                        top: -18 // Top position
                    }}
                >
                    <Typography color="tertiary" variant="titleLg">MOST POPULAR</Typography> {/* Most popular label */}
                </Box>
            </Box>
        )}
        <Typography variant="h3" color="tertiary" pb={1}>{plan?.title}</Typography> {/* Plan title */}
        <Typography variant="titleLg" color="neutral.neutral1">{plan?.subTitle}</Typography> {/* Plan subtitle */}
        <Typography
            variant="h2"
            color="tertiary"
            py={3}
            className="centerY"
        >
            {plan?.price} {/* Plan price */}
            <Typography component="span" variant="h5" color="tertiary" pl={1}>
                / {period === "annually" ? "year" : "month"} {/* Period label */}
            </Typography>
        </Typography>
        <Box component="div" pb={3}> {/* Box for plan benefits */}
            {plan?.benefits?.map((el) => (
                <Box component="div" key={el} className='centerY' gap={0.5} pb={2}>
                    <Image src={"icons/checkIcon.svg"} alt='checkIcon' loading="lazy" width={24} height={24} /> {/* Check icon */}
                    <Typography variant="titleMd" color="neutral.neutral1">{el}</Typography> {/* Benefit text */}
                </Box>
            ))}
        </Box>
        <CustomBtn
            title="Subscribe"
            sx={{ backgroundColor: plan?.mostPopular ? "accents.bubble1" : "base1.default", width: "100%" }}
            color={plan?.mostPopular ? "tertiary" : "secondary"}
        /> {/* Subscribe button */}
    </Box>
);

export default PricingCard;
