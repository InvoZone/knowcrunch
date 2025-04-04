import { Typography } from "@mui/material";
import type { FC } from "react";

interface PageHeadingDescProps {
    heading: string;
    subHeading?: string;
}

const PageHeadingDesc: FC<PageHeadingDescProps> = ({ heading, subHeading }) => {
    return (
        <>
            <Typography variant="h2" color="base1.dark4" component={"h1"}>
                {heading}
            </Typography>
            <Typography variant="titleMd" color="base1.dark4">
                {subHeading}
            </Typography>
        </>
    );
};

export default PageHeadingDesc;
