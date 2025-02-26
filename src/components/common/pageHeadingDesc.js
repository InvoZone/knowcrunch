import { Typography } from "@mui/material";

const PageHeadingDesc = ({ heading, subHeading }) => {
    return (
        <>
            {/* Main content header */}
            <Typography variant="h2" color="base1.dark4" aria-label="Page heading">
                {heading}
            </Typography>
            <Typography variant="titleMd" color="base1.dark4" aria-label="Page subheading">
                {subHeading}
            </Typography>
        </>
    );
};

export default PageHeadingDesc;
