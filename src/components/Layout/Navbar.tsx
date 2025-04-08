'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Badge from '@mui/material/Badge';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CustomBtn from '../Common/CustomBtn';
import SearchField from './SearchField';
import Link from 'next/link';
import { navbarMenu } from '@/constants/navbarMenu';
import type { NavbarMenu, Menu, SubMenu } from '@/constants/navbarMenu';
import { useTranslations } from 'next-intl';
import SuperMenu from './SuperMenu';
import SuperMenuMobile from './SuperMenuMobile';
import { useRouter, usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { logout } from '@/lib/slices/auth';
import stripeLogo from '@/assets/Navbar/stripeLogo.webp';
import Login from '../Auth/Login';
import Signup from '../Auth/SignUp';
import type { MouseEvent } from 'react';
import { useState, useEffect } from 'react';

export interface MenuItem {
  id: string;
  title: string;
  link: string;
  menu?: Menu[];
  subMenu?: SubMenu[];
}

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const t = useTranslations('navbar');
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElSuperMenu, setAnchorElSuperMenu] = useState<null | HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [menu, setMenu] = useState<object | MenuItem>({});
  const [subMenu, setSubMenu] = useState<MenuItem | object>({});
  const [subMenu1, setSubMenu1] = useState<MenuItem | object>({});
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenMobileMenu = (event: MouseEvent<HTMLElement>) => {
    setMobileMenu((prevState) => !prevState);
    setMenu({});
    setSubMenu({});
    setSubMenu1({});
    setAnchorElSuperMenu(!mobileMenu ? event.currentTarget : null);
  };

  const handleOpenSuperMenu = (event: MouseEvent<HTMLElement>, page: NavbarMenu | object) => {
    if (!page) return;

    setMenu(page);

    if (isLg) {
      setAnchorElSuperMenu(event.currentTarget);
    }

    setSubMenu({});
    setSubMenu1({});
  };

  const handleCloseSuperMenu = () => {
    setAnchorElSuperMenu(null);
    setMenu({});
    setSubMenu({});
    setSubMenu1({});
    setMobileMenu(false);
  };

  const handleSearchField = () => {
    setSearchActive(!searchActive);
  };

  const handleSubMenu = (menu: MenuItem) => {
    if (!menu?.subMenu) return;

    setSubMenu(menu);
    setSubMenu1({});
  };

  const handleSubMenu1 = (menu: MenuItem) => {
    setSubMenu1(menu);
  };

  const goBack = () => {
    if ((subMenu as MenuItem)?.id) {
      setSubMenu({});
    } else {
      setMenu({});
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isCheckout = pathname === '/checkout';

  return (
    <AppBar
      color={scrollY >= 10 ? 'primary' : pathname === '/' ? 'transparent' : 'primary'}
      sx={{ zIndex: 1310, boxShadow: 'none' }}
      aria-label="Main Navigation"
    >
      <Container maxWidth="xl">
        <Toolbar component="nav" disableGutters sx={{ height: 80, display: 'flex', gap: '10px' }}>
          {searchActive && isSm && !isCheckout ? (
            <SearchField handleClose={handleSearchField} aria-label="Search Field" />
          ) : (
            <>
              <Box sx={{ display: { xs: isCheckout ? 'none' : 'flex', lg: 'none' } }}>
                <IconButton onClick={handleOpenMobileMenu} aria-label="Open mobile navigation menu">
                  <Image
                    src="/icons/header/menu.svg"
                    width={24}
                    height={24}
                    alt="Open menu"
                    priority
                  />
                </IconButton>
                {!isLg && !isCheckout && (
                  <SuperMenuMobile
                    handleOpenSuperMenu={handleOpenSuperMenu}
                    handleSubMenu={handleSubMenu}
                    anchorElSuperMenu={anchorElSuperMenu}
                    handleCloseSuperMenu={handleCloseSuperMenu}
                    superMenu={navbarMenu}
                    menu={menu}
                    subMenu={subMenu}
                    t={t}
                    handleOpenMobileMenu={handleOpenMobileMenu}
                    isLoggedIn={isLoggedIn}
                    goBack={goBack}
                    handleLogout={handleLogout}
                    aria-label="Mobile navigation menu"
                  />
                )}
              </Box>

              <Box
                flexGrow={{ xs: 1, lg: isCheckout ? 1 : 0 }}
                aria-label="Website Logo"
              >
                <Link href="/" passHref>
                  <Image
                    src="/icons/header/logo.svg"
                    alt="Your Website Logo"
                    width={135}
                    height={40}
                    priority
                    unoptimized={true}
                  />
                </Link>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', lg: isCheckout ? 'none' : 'flex' },
                  pl: 3
                }}
              >
                <Box
                  onMouseLeave={handleCloseSuperMenu}
                  component={'ul'}
                  display={'flex'}
                  gap={'24px'}
                  alignItems={'center'}
                >
                  {navbarMenu.map((el: NavbarMenu) => (
                    <CustomBtn
                      key={el?.id}
                      onMouseEnter={(e: MouseEvent<HTMLButtonElement>) =>
                        el?.menu ? handleOpenSuperMenu(e, el) : handleCloseSuperMenu()
                      }
                      title={t(el?.title)}
                      onClick={() => router.push(el?.link)}
                      color="secondary"
                      sx={{
                        minWidth: 30,
                        height: (menu as Menu)?.id === el?.id ? 80 : 45
                      }}
                      aria-label={`Go to ${el?.title}`}
                      component={'li'}
                    />
                  ))}

                  {isLg && (
                    <SuperMenu
                      handleSubMenu={handleSubMenu}
                      handleSubMenu1={handleSubMenu1}
                      anchorElSuperMenu={anchorElSuperMenu}
                      handleCloseSuperMenu={handleCloseSuperMenu}
                      menu={menu}
                      subMenu={subMenu}
                      subMenu1={subMenu1}
                      t={t}
                      aria-label="Expanded navigation menu"
                    />
                  )}
                </Box>
              </Box>

              {!isCheckout && (
                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                  {!searchActive && (
                    <IconButton onClick={handleSearchField} aria-label="Open search">
                      <Image
                        loading="lazy"
                        src="/icons/header/search.svg"
                        width={24}
                        height={24}
                        alt="Search icon"
                      />
                    </IconButton>
                  )}

                  {searchActive && <SearchField handleClose={handleSearchField} />}

                  {isLoggedIn && !searchActive ? (
                    <>
                      <IconButton
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                        aria-label="View cart"
                      >
                        <Badge
                          sx={{
                            '& .MuiBadge-dot': {
                              backgroundColor: 'accents.bubble1'
                            }
                          }}
                          variant="dot"
                          invisible={false}
                        >
                          <Image
                            src="/icons/header/cart.svg"
                            width={24}
                            height={24}
                            alt="Shopping cart"
                            loading="lazy"
                          />
                        </Badge>
                      </IconButton>

                      <IconButton aria-label="View notifications">
                        <Badge color="error" variant="dot" invisible={false}>
                          <Image
                            src="/icons/header/notification.svg"
                            width={24}
                            height={24}
                            alt="Notifications"
                            loading="lazy"
                          />
                        </Badge>
                      </IconButton>

                      <IconButton onClick={handleLogout} aria-label="Logout">
                        <Image
                          src="/icons/header/person.svg"
                          width={24}
                          height={24}
                          alt="User profile"
                          loading="lazy"
                        />
                      </IconButton>
                    </>
                  ) : (
                    isLg &&
                    !isCheckout &&
                    !searchActive && (
                      <>
                        <Login aria-label="Login to your account" />
                        <Signup aria-label="Sign up for an account" />
                      </>
                    )
                  )}
                </Box>
              )}

              {isCheckout && (
                <Box
                  sx={{ flexGrow: 0, display: 'flex', gap: 2 }}
                  aria-label="Checkout icons"
                >
                  <Image
                    src="/icons/header/secured.svg"
                    width={32}
                    height={32}
                    alt="Secure checkout"
                    loading="lazy"
                  />
                  <Image
                    src={stripeLogo}
                    width={146}
                    height={32}
                    alt="Stripe payment logo"
                    loading="lazy"
                  />
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
