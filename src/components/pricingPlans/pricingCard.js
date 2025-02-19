
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import CustomBtn from "../common/customBtn";

const PricingCard = ({
    plan,
    period
}) => {
    return (
        <Box
            component={"div"}
            sx={{
                p: 2,
                pt: 3,
                border: "2px solid",
                borderColor: plan?.mostPopular ? "accents.bubble1" : "neutral.neutral9",
                borderRadius: 2,
                position: "relative"
            }}
        >
            {plan?.mostPopular && <Box component={"div"} width={"100%"} className="centerX">
                <Box component={"div"}
                    sx={{
                        height: 34,
                        padding: "6px",
                        borderRadius: 2,
                        backgroundColor: "accents.bubble1",
                        width: "fit-content",
                        position: "absolute",
                        top: -18
                    }}
                >
                    <Typography color="tertiary" variant="titleLg">MOST POPULAR</Typography>
                </Box>
            </Box>}

            <Typography variant="h3" color="tertiary" pb={1}>{plan?.title}</Typography>
            <Typography variant="titleLg" color="neutral.neutral1">{plan?.subTitle}</Typography>
            <Typography variant="h2" color="tertiary" py={3}>{
                plan?.price}
                <Typography component={"span"} variant="h5" color="tertiary">
                    / {period === "annually" ? "year" : "month"}
                </Typography>
            </Typography>

            <Box component={"div"} pb={3}>
                {
                    plan?.benefits?.map(el =>
                        <Box component={"div"} key={el} className='centerY' gap={0.5} pb={2}>
                            <Image src={"icons/checkIcon.svg"} alt='checkIcon' loading={"lazy"} width={24} height={24} />
                            <Typography variant="titleMd" color="neutral.neutral1">{el}</Typography>
                        </Box>
                    )
                }
            </Box>

            <CustomBtn
                title={"Subscribe"}
                sx={{ backgroundColor: plan?.mostPopular ? "accents.bubble1" : "base1.default", width: "100%" }}
                color={plan?.mostPopular ? "tertiary" : "secondary"}
            />

        </Box>
    );
};

export default PricingCard;
