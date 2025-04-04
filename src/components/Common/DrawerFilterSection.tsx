import { Box, FormGroup, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import CustomCheckbox from "./CustomCheckbox";
import { useState, type ChangeEvent, type FC } from "react";

interface DrawerFilterSectionProps {
    data: {
        id: string;
        value: string;
        filters: {
            id: string;
            value: string;
        }[];
    };
    handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
    selectedFilters: string[];
}

const DrawerFilterSection: FC<DrawerFilterSectionProps> = ({ data, handleChange, selectedFilters }) => {
    const t = useTranslations("general");
    const [showMore, setShowMore] = useState(false);

    return (
        <Box component={"div"} pb={1}>
            <Typography variant="h6" py={0.5} color="base1.dark4">
                {t(data?.value)}
            </Typography>
            <FormGroup>
                {showMore ? data?.filters?.map((e) => (
                    <CustomCheckbox
                        key={e?.id}
                        checked={selectedFilters?.includes(e?.value)}
                        label={t(`${e?.value}`)}
                        onChange={handleChange}
                        name={e?.value}
                    />
                )) : data?.filters?.slice(0, 5).map((e) => (
                    <CustomCheckbox
                        key={e?.id}
                        checked={selectedFilters?.includes(e?.value)}
                        label={t(`${e?.value}`)}
                        onChange={handleChange}
                        name={e?.value}
                    />
                ))}
            </FormGroup>
            {data?.filters?.length > 5 && (
                <Typography pt={1} variant="h6" color="base1.default" sx={{ cursor: "pointer" }} onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </Typography>
            )}
        </Box>
    );
};

export default DrawerFilterSection;