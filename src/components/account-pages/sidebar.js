import { useState } from "react";
import { Box, List, ListItem, Typography, Menu, MenuItem, Button, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const Sidebar = ({ sideBarItems, img, active, setActive }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (index) => {
        setActive(index);
        setAnchorEl(null);
    };

    return (
        <>
            {isMobile ? (
                // Small screen - Dropdown
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image className="styles.img" src={img} alt="diploma" />
                    <Typography variant="h6">Name Surname</Typography>
                    <Typography variant="body2">Subtitle</Typography>
                    <Button
                        variant=""
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={handleClick}
                        sx={{ mt: 2, borderRadius: 10, border: 0.5, maxWidth: "361px", width: "100%" }}
                    >
                        {sideBarItems[active]}
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} sx={{maxWidth: "361px", width: "100%"}}>
                        {sideBarItems.map((item, ind) => (
                            <MenuItem key={ind} onClick={() => handleClose(ind)} sx={{width: "361px"}}>
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ) : (
                // Large screen - Sidebar
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "100%" }}>
                    <Image className="styles.img" src={img} alt="diploma" />
                    <Typography variant="h6">Name Surname</Typography>
                    <Typography variant="body2" textAlign={"center"}>Subtitle</Typography>
                    <List sx={{ textAlign: "left", alignSelf: "self-start" }}>
                        {sideBarItems.map((item, ind) => (
                            <ListItem key={ind} sx={{ mb: 1, px: 2 }}>
                                <Typography
                                    variant={active === ind ? "body2" : "body1"}
                                    padding={1}
                                    borderRadius={2}
                                    bgcolor={active === ind ? "#f0f0f0" : ""}
                                    onClick={() => setActive(ind)}
                                >
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </>
    );
};

export default Sidebar;
