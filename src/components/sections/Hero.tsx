"use client";

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Animated background component
const AnimatedBackground = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1,
        backgroundColor: 'background.default',
      }}
    >
      {/* Animated gradient overlay */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}22 0%, ${theme.palette.primary.main}11 50%, ${theme.palette.primary.light}22 100%)`,
          zIndex: 1,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: { xs: '50px', md: '100px' },
            height: { xs: '50px', md: '100px' },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}22 0%, transparent 70%)`,
          }}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </Box>
  );
};

const Hero = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: { xs: 8, md: 0 },
      }}
    >
      <AnimatedBackground />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    background: `linear-gradient(90deg, #ffffff, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <FormattedMessage id="hero.title" />
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '600px',
                  }}
                >
                  <FormattedMessage id="hero.subtitle" />
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 10px 20px rgba(40, 183, 21, 0.3)',
                  }}
                  onClick={() => {
                    const element = document.getElementById('agents');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <FormattedMessage id="hero.cta" />
                </Button>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'relative',
              }}
            >
              {/* Abstract AI visualization */}
              <Box
                component={motion.div}
                animate={{
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                sx={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, transparent 70%)`,
                  position: 'relative',
                  mx: 'auto',
                }}
              >
                {/* Neural network nodes */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    initial={{
                      x: Math.cos((i / 8) * Math.PI * 2) * 150,
                      y: Math.sin((i / 8) * Math.PI * 2) * 150,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                    sx={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: theme.palette.primary.main,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                    }}
                  />
                ))}
                
                {/* Connection lines */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <Box
                    key={`line-${i}`}
                    component={motion.div}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                    sx={{
                      width: '200px',
                      height: '1px',
                      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${(i / 12) * 360}deg)`,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
