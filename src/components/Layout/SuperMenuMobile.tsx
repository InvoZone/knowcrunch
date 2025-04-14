import { useRouter } from 'next/navigation';
import type { MenuItem as MenuItemsType } from './Navbar';
import type { SubMenu, NavbarMenu } from '@/constants/navbarMenu';
import type { FC, MouseEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CustomBtn from '../Common/CustomBtn';
import Login from '../Auth/Login';
import Signup from '../Auth/SignUp';
import IconButton from '@mui/material/IconButton';

interface MenuItemType {
  id?: string;
  title?: string;
  link?: string;
  menu?: MenuItemType[];
  subMenu?: SubMenu[];
}

interface SuperMenuMobileProps {
  anchorElSuperMenu: HTMLElement | null;
  handleCloseSuperMenu: () => void;
  handleSubMenu: (_menu: MenuItemsType) => void;
  menu: MenuItemType;
  subMenu: SubMenu | object;
  t: (_key: string) => string;
  superMenu: MenuItemType[];
  isLoggedIn: boolean;
  handleOpenSuperMenu: (_event: MouseEvent<HTMLElement>, _menu: NavbarMenu | object) => void;
  handleOpenMobileMenu: (_event: MouseEvent<HTMLElement>) => void;
  goBack: () => void;
  handleLogout: () => void;
}

const SuperMenuMobile: FC<SuperMenuMobileProps> = ({
  anchorElSuperMenu,
  handleCloseSuperMenu,
  handleSubMenu,
  menu,
  subMenu,
  t,
  superMenu,
  isLoggedIn,
  handleOpenSuperMenu,
  handleOpenMobileMenu,
  goBack,
  handleLogout
}) => {
  const router = useRouter();
  const theme = useTheme();
  const { primary } = theme.palette;

  return (
    <Box position={'relative'}>
      <Menu
        sx={{
          'position': 'fixed',
          '& .MuiMenu-paper': {
            width: '100%',
            maxWidth: '100% !important',
            left: '0px !important',
            top: '0px !important',
            background: primary.main,
            padding: 0
          },
          '& .MuiMenu-list': { padding: 0 },
          'zIndex': 1310
        }}
        id="menu-appbar-mobile"
        disableScrollLock={false}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        closeAfterTransition={false}
        open={Boolean(anchorElSuperMenu)}
        onClose={handleCloseSuperMenu}
        anchorEl={anchorElSuperMenu}
        aria-label="Super Menu"
      >
        <Container maxWidth={'xl'} sx={{ py: 4, minHeight: 569 }}>
          <Grid2 container>
            <Grid2 size={12}>
              <Box
                sx={{
                  height: 54,
                  display: 'flex',
                  justifyContent:
                    !(menu && 'id' in menu) && !(subMenu && 'id' in subMenu)
                      ? 'flex-end'
                      : 'space-between',
                  borderRadius: 1,
                  p: 0
                }}
              >
                {('id' in menu || 'id' in subMenu) && (
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={1}
                    onClick={goBack}
                    aria-label="Go back"
                  >
                    <Image
                      src={'/icons/header/chevLeft.svg'}
                      alt="chevLeftIcon"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                    <Typography variant="titleLg" color={'secondary'}>
                      {t((subMenu as SubMenu)?.title || (menu as SubMenu)?.title || '')}
                    </Typography>
                  </Box>
                )}
                <IconButton onClick={handleOpenMobileMenu}>
                  <Image
                    src={'/icons/header/cross.svg'}
                    alt="cancel"
                    width={48}
                    height={48}
                    aria-label="Close menu"
                  />
                </IconButton>
              </Box>
            </Grid2>

            {!('id' in menu) && !('id' in subMenu) && (
              <Grid2 size={12}>
                {isLoggedIn && (
                  <MenuItem
                    onClick={(e) => handleOpenSuperMenu(e, menu)}
                    sx={{ height: 54, borderRadius: 1 }}
                    aria-label="My Profile"
                  >
                    <Typography variant="h6" color={'secondary'} component={'p'}>
                      {t('myProfile')}{' '}
                    </Typography>
                  </MenuItem>
                )}
                {superMenu?.map((menu) => (
                  <MenuItem
                    key={menu?.id}
                    onClick={(e) => {
                      if (menu?.link) {
                        router.push(menu?.link);
                      }
                      handleOpenSuperMenu(e, menu);
                    }}
                    sx={{ height: 54, borderRadius: 1 }}
                    aria-label={`Menu item ${menu?.title}`}
                  >
                    <Typography variant="h6" color={'secondary'} component={'p'}>
                      {t(menu?.title ?? '')}
                    </Typography>
                  </MenuItem>
                ))}

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    width: '100%',
                    right: { xs: 0, md: 32 }
                  }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={{
                      xs: 'center',
                      sm: 'center',
                      md: 'flex-end'
                    }}
                    gap={3}
                  >
                    {isLoggedIn ? (
                      <CustomBtn
                        title={'Log out'}
                        color="secondary"
                        sx={{ minWidth: 100 }}
                        onClick={handleLogout}
                        aria-label="Log out"
                      />
                    ) : (
                      <>
                        <Login onClick={handleOpenMobileMenu} aria-label="Login" />
                        <Signup onClick={handleOpenMobileMenu} aria-label="Sign up" />
                      </>
                    )}
                  </Box>
                </Box>
              </Grid2>
            )}

            {!('id' in subMenu) && (
              <Grid2 size={12}>
                {menu?.menu?.map((menu) => (
                  <MenuItem
                    key={menu?.id}
                    onClick={() => handleSubMenu(menu as MenuItemsType)}
                    sx={{
                      height: 54,
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderRadius: 1,
                      p: 0
                    }}
                    aria-label={`Submenu item ${menu?.title}`}
                  >
                    <Typography variant="body" color={'secondary'}>
                      {t(menu?.title ?? '')}{' '}
                    </Typography>{' '}
                    <Image
                      src={'/icons/header/chevRight.svg'}
                      alt="chevRightIcon"
                      width={24}
                      height={24}
                    />
                  </MenuItem>
                ))}
              </Grid2>
            )}

            {'subMenu' in subMenu && (
              <Grid2 size={{ md: 5, lg: 5 }}>
                {Array.isArray(subMenu?.subMenu) &&
                  subMenu.subMenu.map((el: SubMenu) => (
                    <MenuItem
                      key={el?.id}
                      sx={{
                        height: 54,
                        borderRadius: 1,
                        p: 0
                      }}
                      aria-label={`Subsubmenu item ${el?.title}`}
                    >
                      <Typography variant="body" color={'secondary'}>
                        {t(el?.title || '')}{' '}
                      </Typography>
                    </MenuItem>
                  ))}
              </Grid2>
            )}
          </Grid2>
        </Container>
      </Menu>
    </Box>
  );
};

export default SuperMenuMobile;
