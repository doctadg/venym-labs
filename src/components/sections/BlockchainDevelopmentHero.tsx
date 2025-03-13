'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const BlockchainDevelopmentHero = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <Box
      sx={{
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(to bottom right, ${theme.palette.background.default}, ${theme.palette.background.paper})`
          : `linear-gradient(to bottom right, ${theme.palette.primary.main}11, ${theme.palette.primary.light}22)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}22, transparent 70%)`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}22, transparent 70%)`,
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              ref={ref}
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <FormattedMessage id="blockchainDevelopment.title" />
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  maxWidth: '600px',
                }}
              >
                <FormattedMessage id="blockchainDevelopment.subtitle" />
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                }}
              >
                <FormattedMessage id="blockchainDevelopment.description" />
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: '0 8px 20px rgba(40, 183, 21, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 25px rgba(40, 183, 21, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FormattedMessage id="contact.requestDemo" />
                </Button>
                
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FormattedMessage id="nav.contact" />
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Blockchain illustration/animation */}
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Central node */}
                <Box
                  component={motion.div}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 20px rgba(40, 183, 21, 0.3)',
                      '0 0 30px rgba(40, 183, 21, 0.5)',
                      '0 0 20px rgba(40, 183, 21, 0.3)'
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3
                  }}
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main,
                    boxShadow: '0 0 20px rgba(40, 183, 21, 0.3)',
                    zIndex: 2,
                  }}
                />
                
                {/* Blockchain nodes */}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 20 + index * 2,
                      ease: 'linear'
                    }}
                    sx={{
                      position: 'absolute',
                      width: `${200 + index * 40}px`,
                      height: `${200 + index * 40}px`,
                      borderRadius: '50%',
                      border: `1px dashed ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 10px rgba(40, 183, 21, 0.2)',
                          '0 0 15px rgba(40, 183, 21, 0.3)',
                          '0 0 10px rgba(40, 183, 21, 0.2)'
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.3
                      }}
                      sx={{
                        position: 'absolute',
                        top: '0%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                        boxShadow: '0 0 10px rgba(40, 183, 21, 0.2)',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlockchainDevelopmentHero;
