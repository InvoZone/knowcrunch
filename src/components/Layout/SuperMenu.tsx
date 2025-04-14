import type { Menu as MenuType } from '@/constants/navbarMenu';
import type { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CourseCard from '../Common/CourseCard';

interface MenuItemType {
  id?: string;
  title?: string;
  menu?: MenuItemType[];
  subMenu?: MenuItemType[];
}

interface SuperMenuProps {
  anchorElSuperMenu: HTMLElement | null;
  handleCloseSuperMenu: () => void;
  handleSubMenu: (_menu: MenuType) => void;
  handleSubMenu1: (_menu: MenuType) => void;
  menu: MenuItemType;
  subMenu: MenuItemType;
  subMenu1: MenuItemType;
  t: (_key: string | undefined) => string;
}

const SuperMenu: FC<SuperMenuProps> = ({
  anchorElSuperMenu,
  handleCloseSuperMenu,
  handleSubMenu,
  handleSubMenu1,
  menu,
  subMenu,
  subMenu1,
  t
}) => {
  const theme = useTheme();
  const { base2, base1 } = theme.palette;

  return (
    <Box position={'relative'}>
      <Menu
        sx={{
          'mt': '80px',
          'position': 'fixed',
          '& .MuiMenu-paper': {
            minHeight: 100,
            width: '100%',
            maxWidth: '100% !important',
            left: '0px !important',
            top: '0px !important',
            backgroundColor: 'primary.main'
          }
        }}
        id="menu-appbar"
        anchorEl={anchorElSuperMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(anchorElSuperMenu)}
        onClose={handleCloseSuperMenu}
        autoFocus={false}
        closeAfterTransition={false}
        disableScrollLock={true}
        slotProps={{ list: { onMouseLeave: handleCloseSuperMenu } }}
        aria-hidden={'false'}
        aria-label={'Super Menu'}
      >
        <Container maxWidth={'xl'} sx={{ py: 5 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ md: 4, lg: 4, xl: 3 }}>
              {menu?.menu?.map((menu) => (
                <MenuItem
                  key={menu?.id}
                  onMouseEnter={() => handleSubMenu(menu as MenuType)}
                  sx={{
                    'height': 56,
                    'display': 'flex',
                    'justifyContent': 'space-between',
                    'mb': 1,
                    ':last-child': {
                      mb: 0
                    },
                    'borderRadius': 1,
                    'background': subMenu?.id === menu?.id ? `${base2.light5} !important` : ''
                  }}
                  aria-label={`Menu item ${menu?.title}`}
                >
                  <Typography
                    variant="subtitleLg"
                    color={subMenu?.id === menu?.id ? base1.dark4 : 'secondary'}
                  >
                    {t(menu?.title)}{' '}
                  </Typography>{' '}
                  <Image
                    src={
                      subMenu?.id === menu?.id
                        ? '/icons/header/chevRightBlack.svg'
                        : '/icons/header/chevRight.svg'
                    }
                    alt="chevRightIcon"
                    width={24}
                    height={24}
                    aria-label="Chevron right icon"
                  />
                </MenuItem>
              ))}
            </Grid2>
            {subMenu?.subMenu && (
              <Grid2
                size={{ md: 6, lg: 5, xl: 6 }}
                sx={{
                  borderLeft: `2px solid ${base1.dark2}`,
                  px: 2
                }}
              >
                {subMenu?.subMenu?.map((el) => (
                  <MenuItem
                    key={el?.id}
                    onMouseEnter={() => handleSubMenu1(el as MenuType)}
                    sx={{
                      'height': 56,
                      'display': 'flex',
                      'justifyContent': 'space-between',
                      'borderRadius': 1,
                      'mb': 1,
                      ':last-child': {
                        mb: 0
                      },
                      'background': subMenu1?.id === el?.id ? `${base2.light4} !important` : ''
                    }}
                    aria-label={`Submenu item ${el?.title}`}
                  >
                    <Typography
                      variant="subtitleLg"
                      color={subMenu1?.id === el?.id ? base1.dark4 : 'secondary'}
                    >
                      {t(el?.title)}{' '}
                    </Typography>
                  </MenuItem>
                ))}
              </Grid2>
            )}
            {subMenu1?.id && (
              <Grid2 size={{ md: 3, lg: 3 }}>
                <CourseCard
                  enrollButton={false}
                  discountTag={true}
                  width={298}
                  aria-label="Course card"
                />
              </Grid2>
            )}
          </Grid2>
        </Container>
      </Menu>
    </Box>
  );
};

export default SuperMenu;
