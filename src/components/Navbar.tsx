"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, Container, alpha } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../i18n/LanguageContext';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../theme/ThemeProvider';
import { useSpring as useReactSpring } from 'react-spring';
import anime from 'animejs';
import EnhancedLanguageToggle from './EnhancedLanguageToggle';
import Link from 'next/link';

// Enhanced SVG icons with animations
const MenuIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ rotate: isHovered ? [0, 5, -5, 0] : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.path
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        initial={false}
        animate={{
          pathLength: 1,
          pathOffset: 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};

const LanguageIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
        initial={false}
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

// Enhanced Logo component with advanced animations
const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  // React Spring animation for hover effect
  const [springProps, api] = useReactSpring(() => ({
    scale: 1,
    rotateZ: 0,
    config: { mass: 1, tension: 180, friction: 12 }
  }));

  // Use AnimeJS for text animation on mount
  useEffect(() => {
    if (logoRef.current) {
      const animation = anime({
        targets: logoRef.current,
        opacity: [0, 1],
        translateY: [-30, 0],
        scale: [0.9, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 300
      });

      return () => {
        if (animation && typeof animation.pause === 'function') {
          animation.pause();
        }
      };
    }
  }, []);

  // Handle hover interactions
  const handleMouseEnter = () => {
    api.start({
      scale: 1.05,
      rotateZ: 2,
      immediate: false
    });
  };

  const handleMouseLeave = () => {
    api.start({
      scale: 1,
      rotateZ: 0,
      immediate: false
    });
  };

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <div
        ref={logoRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          transform: `scale(${springProps.scale}) rotate(${springProps.rotateZ}deg)`
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src="/venymgreen.png" 
          alt="Venym Labs" 
          style={{ 
            height: '40px',
            marginRight: '10px'
          }} 
        />
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #28b715, #5fea3d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          <span>Venym Labs</span>
          <motion.div
            style={{
              position: 'absolute',
              bottom: -2,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #28b715, #5fea3d, #28b715)',
              backgroundSize: '200% 100%',
              opacity: 0.7
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </Link>
  );
};

// Navigation links
const navLinks = [
  { id: 'blockchain-develop', path: '/blockchain-develop', isPage: true },
  { id: 'pricing', path: '#pricing' },
  { id: 'contact', path: '#contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useMuiTheme();
  const { isDarkMode } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleLanguage, locale } = useLanguage();
  const navbarRef = useRef(null);

  // Framer Motion scroll animations
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 100], [0, 1]);
  const opacity = useTransform(scrollProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollProgress, [0, 1], [0, 10]);
  const navbarY = useTransform(scrollY, [0, 50], [0, -5]);
  const navbarYSpring = useSpring(navbarY, { stiffness: 100, damping: 20 });

  // Handle scroll effect with enhanced detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const validSections = sections.filter(section => section !== null);

      if (validSections.length > 0) {
        const currentSection = validSections.reduce((nearest, section) => {
          const rect = section.getBoundingClientRect();
          const offset = rect.top + window.scrollY;
          const distance = Math.abs(window.scrollY - offset + 100);

          return distance < Math.abs(window.scrollY - (nearest?.offset || 0) + 100)
            ? { id: section.id, offset }
            : nearest;
        }, { id: validSections[0].id, offset: validSections[0].getBoundingClientRect().top + window.scrollY });

        if (currentSection.id !== activeSection) {
          setActiveSection(currentSection.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check for active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  // Apply anime.js animation to navbar on mount
  useEffect(() => {
    if (navbarRef.current) {
      anime({
        targets: navbarRef.current,
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 200
      });
    }
  }, []);

  // Enhanced drawer toggle with animation
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);

    // Add haptic-like animation effect to the navbar
    if (navbarRef.current && !drawerOpen) {
      anime({
        targets: navbarRef.current,
        translateX: [0, -3, 3, -2, 2, -1, 1, 0],
        duration: 400,
        easing: 'easeInOutSine'
      });
    }
  };

  // Enhanced scroll to section with animation or page navigation
  const scrollToSection = (sectionId: string) => {
    // Find the link object for this section
    const link = navLinks.find(l => l.id === sectionId);
    
    // If it's a page link, navigate to that page
    if (link?.isPage) {
      window.location.href = link.path;
      return;
    }
    
    // Otherwise, scroll to the section on the current page
    const element = document.getElementById(sectionId);
    if (element) {
      // Set active section immediately for better UX
      setActiveSection(sectionId);

      // Animate scroll with spring physics
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;

      anime({
        targets: { scrollPos: startPosition },
        scrollPos: elementPosition,
        duration: 1000,
        easing: 'spring(1, 80, 10, 0)',
        update: function(anim: any) {
          if (anim.animations && anim.animations[0]) {
            window.scrollTo(0, anim.animations[0].currentValue);
          }
        },
        complete: () => {
          if (drawerOpen) setDrawerOpen(false);
        }
      });
    }
  };

  // Generate dynamic glassmorphism styles based on scroll and theme
  const getGlassmorphismStyles = () => {
    const baseOpacity = scrolled ? (isDarkMode ? 0.85 : 0.75) : 0;
    const baseShadow = scrolled
      ? `0 10px 30px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
      : 'none';

    return {
      backgroundColor: scrolled
        ? alpha(theme.palette.background.default, baseOpacity)
        : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
      boxShadow: baseShadow,
      borderBottom: scrolled
        ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
        : 'none',
    };
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 1100,
        y: navbarYSpring
      }}
      ref={navbarRef}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          ...getGlassmorphismStyles(),
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          color: scrolled ? 'text.primary' : 'white',
          '& .MuiToolbar-root': {
            padding: { xs: '0.7rem 1rem', md: '0.7rem 2rem' },
          },
          borderRadius: scrolled ? '0 0 16px 16px' : 0,
          overflow: 'hidden',
        }}
      >
        {/* Animated progress indicator */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #28b715, #5fea3d, #6c63ff)',
            backgroundSize: '200% 100%',
            scaleX: scrollProgress,
            transformOrigin: 'left',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Enhanced Logo */}
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Logo />
            </Box>

            {/* Enhanced Desktop Navigation */}
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              position: 'relative',
            }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <Box key={link.id} sx={{ position: 'relative' }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => scrollToSection(link.id)}
                        sx={{
                          mx: 1,
                          px: 2,
                          color: scrolled ? (isActive ? 'primary.main' : 'text.primary') : 'white',
                          position: 'relative',
                          fontWeight: isActive ? 700 : 500,
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <FormattedMessage id={`nav.${link.id}`} />
                      </Button>
                    </motion.div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: 8,
                          right: 8,
                          height: '3px',
                          borderRadius: '2px',
                          background: 'linear-gradient(90deg, #28b715, #5fea3d)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Enhanced Language Toggle */}
            <Box sx={{ ml: 2 }}>
              <EnhancedLanguageToggle
                value={locale === 'en'}
                onChange={toggleLanguage}
              />
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {/* Mobile Drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                component: motion.div,
                initial: { x: '100%' },
                animate: { x: 0 },
                exit: { x: '100%' },
                transition: { type: 'spring', stiffness: 300, damping: 30 },
                sx: {
                  width: '80%',
                  maxWidth: '300px',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navLinks.map((link) => (
                  <ListItem
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{ cursor: 'pointer' }}
                  >
                    <ListItemText
                      primary={<FormattedMessage id={`nav.${link.id}`} />}
                      sx={{ color: 'text.primary' }}
                    />
                  </ListItem>
                ))}
                <ListItem
                  onClick={toggleLanguage}
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    mt: 2,
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    pt: 2,
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    <LanguageIcon />
                  </Box>
                  <ListItemText
                    primary={<FormattedMessage id="common.languageToggle" />}
                    sx={{ color: 'primary.main' }}
                  />
                </ListItem>
              </List>
            </Drawer>
          )}
        </AnimatePresence>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
