import { Avatar, Box, Rating, Typography } from "@mui/material";
import Image from "next/image";

const FeedbackCard = (
    width = "100%"
) => {
    return (
        <Box
            component={"div"}
            p={2}
            sx={{ border: "1px solid", borderColor: "neutral.neutral9", borderRadius: 4, width }}
        >
            <Box component={"div"} className="centerY" gap={1}>
                <Avatar sx={{ width: 110, height: 110 }} />
                <Box component={"div"}>
                    <Rating value={5} readOnly sx={{ color: "base1.default" }} />
                    <Typography variant="titleMd" color="secondary.dark" component={"div"}>
                        Maria Karapanagioti
                    </Typography>
                    <Typography variant="body" color="tertiary" >
                        Digital Marketing Specialist
                    </Typography>
                    <Box component={"div"} gap={1} display={"flex"} alignItems={"center"}>
                        <Image src="/icons/fb.svg" width={20} height={20} alt='fb' />
                        <Image src="/icons/insta.svg" width={20} height={20} alt='insta' />
                        <Image src="/icons/lin.svg" width={20} height={20} alt='lin' />
                        <Image src="/icons/twitter.svg" width={17} height={17} alt='twitter' />
                    </Box>
                </Box>
            </Box>
            <Box component={"div"} pt={2} sx={{ height: 84 }}>
                <Typography variant="subtitleSm" color="secondary.dark" textOverflow={"ellipsis"}>
                    Being taught by professionals who are so passionate about what they do and eager to transmit their knowledge a...
                </Typography>...
            </Box>
        </Box>
    );
};

export default FeedbackCard;