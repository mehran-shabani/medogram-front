import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// ------------ تم‌های روشن/تاریک ------------
const lightTheme = {
    background: 'rgba(255, 255, 255, 0.95)',
    text: '#333',
    primary: '#3498db',
    shadow: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
    background: 'rgba(30, 30, 30, 0.95)',
    text: '#f5f5f5',
    primary: '#4db6ff',
    shadow: 'rgba(0, 0, 0, 0.3)',
};

// ------------ استایل کلی Navbar ------------
const NavbarContainer = styled(motion.nav)`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* فاصله بین دو طرف منو */
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  z-index: 1000;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  backdrop-filter: blur(5px);
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* فاصله بین برند و دکمه ورود/خروج */
`;

// ------------ لوگو یا برند ------------
const Brand = styled(motion.h1)`
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: baseline;

  span:first-child {
    color: ${({ theme }) => theme.text};
    font-weight: 800;
  }

  span:last-child {
    color: ${({ theme }) => theme.primary};
    font-weight: 100;
  }
`;


const MenuIcon = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  &:focus {
    outline: none;
  }
`;

const MenuIconSVG = styled.svg`
  width: 24px;
  height: 24px;
`;

// ------------ منوی کشویی (سمت راست) ------------
const NavLinks = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  direction: rtl;
  background-color: ${({ theme }) => theme.background};
  padding: 5rem 2rem;
  box-shadow: -2px 0 10px ${({ theme }) => theme.shadow};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavItem = styled(motion.div)`
  position: relative;
`;

const NavLinkTitle = styled(motion.button)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SubNav = styled(motion.ul)`
  padding: 0.5rem 0 0.5rem 1rem;
  list-style: none;
`;

const SubNavItem = styled(motion.li)`
  padding: 0.5rem 1rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    display: block;
    transition: color 0.3s ease;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1003;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ------------ آیتم‌های منوی اصلی با متن جدید ------------
const navItems = [
    {
        title: 'ناحیه کاربری',
        subItems: [
            { title: 'صفحه‌ی اصلی', link: '/' },
        ],
    },
    {
        title: 'تشخیص هوشمند',
        subItems: [
            { title: 'تشخیص دیابت با هوش مصنوعی', link: '/diabetes-prediction' },
        ],
    },
    {
        title: 'نوبت‌دهی آنلاین',
        subItems: [
            { title: 'ثبت نوبت', link: '/visits' },
            { title: 'پرداخت آنلاین', link: '/payment-visit' },
            { title: 'نوبت‌های شما', link: '/user-visits' },
            { title: 'بلاگ سلامت', link: '/blogs' },
        ],
    },
    {
        title: 'اطلاعات بیشتر',
        subItems: [
            { title: 'درباره‌ی ما', link: '/about' },
            { title: 'ارتباط با ما', link: '/contact' },
            { title: ' خدمات خارج پوشش', link: '/excluded-services' },
        ],
    },
];

// ------------ کامپوننت اصلی Navbar ------------
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubNav, setOpenSubNav] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // بستن منوی کشویی
    const closeMenu = () => {
        setIsOpen(false);
        setOpenSubNav(null);
    };

    // باز/بسته‌کردن منوی کشویی
    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // باز/بسته کردن زیرمنو
    const toggleSubNav = (index) => {
        setOpenSubNav(openSubNav === index ? null : index);
    };

    // اگر بیرون از منو کلیک شد، منو بسته شود
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('nav')) {
                closeMenu();
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    // منطق پنهان/نمایان‌شدن بر اساس اسکرول
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY - lastScrollY > 10) {
                    setIsVisible(false);
                } else if (lastScrollY - currentScrollY > 10) {
                    setIsVisible(true);
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    // هندل تغییر تم روشن/تاریک
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AnimatePresence>
                {isVisible && (
                    <NavbarContainer
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    >
                        <NavLeft>
                            {/* برند (MEDOGRAM) */}
                            <Brand whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <span>MED</span>
                                <span style={{ color: 'lightblue', fontWeight: '300' }}>OGRAM</span>
                            </Brand>
                        </NavLeft>

                        {/* آیکون منوی همبرگری */}
                        <MenuIcon
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MenuIconSVG
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    color: 'lightblue',
                                    backdrop: 'blur(100px)',
                                    zIndex: 'auto',
                                }}
                            >
                                <rect x="20" y="30" width="60" height="8" rx="4" fill="currentColor" />
                                <rect x="20" y="46" width="60" height="8" rx="4" fill="currentColor" />
                                <rect x="20" y="62" width="60" height="8" rx="4" fill="currentColor" />
                            </MenuIconSVG>
                        </MenuIcon>
                    </NavbarContainer>
                )}
            </AnimatePresence>

            {/* منوی کشویی سمت راست */}
            <AnimatePresence>
                {isOpen && (
                    <NavLinks
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton
                            onClick={closeMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </CloseButton>
                        {navItems.map((item, index) => (
                            <NavItem key={index}>
                                <NavLinkTitle
                                    onClick={() => toggleSubNav(index)}
                                    whileHover={{
                                        color: isDarkMode ? darkTheme.primary : lightTheme.primary,
                                    }}
                                >
                                    {item.title}
                                </NavLinkTitle>
                                <AnimatePresence>
                                    {openSubNav === index && (
                                        <SubNav
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.subItems.map((subItem, subIndex) => (
                                                <SubNavItem key={subIndex} whileHover={{ x: 5 }}>
                                                    <NextLink href={subItem.link} onClick={closeMenu}>
                                                        {subItem.title}
                                                    </NextLink>
                                                </SubNavItem>
                                            ))}
                                        </SubNav>
                                    )}
                                </AnimatePresence>
                            </NavItem>
                        ))}

                        {/* دکمه تغییر تم روشن/تاریک */}
                        <ThemeToggle
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isDarkMode ? '🌞' : '🌙'}
                        </ThemeToggle>
                    </NavLinks>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
};

export default Navbar;
