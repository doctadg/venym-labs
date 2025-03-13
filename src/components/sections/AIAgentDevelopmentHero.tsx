'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, alpha } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const AIAgentDevelopmentHero = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <Box
      sx={{
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(135deg, ${theme.palette.background.default}, ${alpha(theme.palette.background.paper, 0.9)})`
          : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.primary.light, 0.1)})`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced background elements */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at center, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />
      
      {/* Subtle flowing light effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Box
          key={`light-flow-${i}`}
          component={motion.div}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 3,
          }}
          sx={{
            position: 'absolute',
            width: '50%',
            height: '2px',
            background: `linear-gradient(90deg, 
              transparent, 
              ${alpha(theme.palette.primary.main, 0.3)}, 
              transparent)`,
            top: `${20 + i * 15}%`,
            left: 0,
            zIndex: 0,
          }}
        />
      ))}
      
      {/* Modern dot pattern background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(${theme.palette.primary.main} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
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
              {/* Enhanced title with gradient and animation */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <Box
                  component={motion.span}
                  sx={{
                    background: `linear-gradient(90deg, 
                      ${theme.palette.primary.main}, 
                      ${theme.palette.primary.light}, 
                      ${alpha(theme.palette.primary.main, 0.8)}, 
                      ${theme.palette.primary.main})`,
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <FormattedMessage id="aiAgentDevelopment.title" defaultMessage="AI Agent Development" />
                </Box>
                
                {/* Animated underline */}
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    height: '3px',
                    width: '100%',
                    background: `linear-gradient(90deg, 
                      transparent, 
                      ${theme.palette.primary.main}, 
                      ${theme.palette.primary.light}, 
                      transparent)`,
                    backgroundSize: '200% 100%',
                    borderRadius: '2px',
                  }}
                  animate={{
                    backgroundPosition: ['200% center', '0% center', '-200% center'],
                    boxShadow: [
                      `0 0 10px ${alpha(theme.palette.primary.main, 0.3)}`,
                      `0 0 20px ${alpha(theme.palette.primary.main, 0.6)}`,
                      `0 0 10px ${alpha(theme.palette.primary.main, 0.3)}`
                    ]
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </Typography>
              
              <Typography
                variant="h5"
                component={motion.h5}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  maxWidth: '600px',
                  textShadow: theme.palette.mode === 'dark' ? '0 0 20px rgba(0,0,0,0.3)' : 'none',
                }}
              >
                <FormattedMessage id="aiAgentDevelopment.subtitle" defaultMessage="Custom AI Agents for Business Transformation" />
              </Typography>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                sx={{ position: 'relative' }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    maxWidth: '600px',
                    lineHeight: 1.8,
                  }}
                >
                  <FormattedMessage id="aiAgentDevelopment.description" defaultMessage="We develop intelligent AI agents that automate tasks, enhance decision-making, and transform business operations. Our custom solutions leverage cutting-edge language models and specialized training to deliver agents that understand your business context and drive real results." />
                </Typography>
                
                {/* Text highlight effect */}
                <Box
                  component={motion.div}
                  animate={{
                    backgroundPosition: ['100% center', '-100% center'],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(90deg, 
                      transparent, 
                      ${alpha(theme.palette.primary.main, 0.05)}, 
                      transparent)`,
                    backgroundSize: '200% 100%',
                    pointerEvents: 'none',
                  }}
                />
              </Box>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: `0 12px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <FormattedMessage id="contact.requestDemo" />
                  
                  {/* Button glow effect */}
                  <Box
                    component={motion.div}
                    animate={{
                      backgroundPosition: ['200% center', '-200% center'],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, 
                        transparent, 
                        ${alpha(theme.palette.common.white, 0.2)}, 
                        transparent)`,
                      backgroundSize: '200% 100%',
                      zIndex: 1,
                    }}
                  />
                </Button>
                
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderWidth: '2px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderWidth: '2px',
                    },
                    transition: 'all 0.3s ease',
                  }}
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
              {/* Enhanced AI Agent illustration/animation */}
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
                {/* Central node - AI Brain with enhanced effects */}
                <Box
                  component={motion.div}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      `0 0 30px ${alpha(theme.palette.primary.main, 0.5)}`,
                      `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3
                  }}
                  sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 30% 30%, 
                      ${theme.palette.primary.light}, 
                      ${theme.palette.primary.main})`,
                    boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Brain icon with enhanced animation */}
                  <motion.svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="white"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      filter: [
                        'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
                        'drop-shadow(0 0 5px rgba(255,255,255,0.8))',
                        'drop-shadow(0 0 2px rgba(255,255,255,0.5))'
                      ]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2
                    }}
                  >
                    <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
                  </motion.svg>
                  
                  {/* Pulsing glow effect */}
                  <Box
                    component={motion.div}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                    sx={{
                      position: 'absolute',
                      width: '130px',
                      height: '130px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, 
                        ${alpha(theme.palette.primary.main, 0.4)} 0%, 
                        transparent 70%)`,
                      zIndex: -1,
                    }}
                  />
                </Box>
                
                {/* Single subtle orbit ring */}
                <Box
                  component={motion.div}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear'
                  }}
                  sx={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                />
                
                {/* Enhanced AI terms flowing out effect - the main focus */}
                {[
                  'AI', 'ML', 'NLP', 'LLM', 'GPT', 'RAG', 'Agents', 'Neural', 
                  'Semantic', 'Cognitive', 'Automation', 'Intelligence'
                ].map((term, index) => {
                  // Calculate angle for more organized distribution
                  const angle = (index * (2 * Math.PI / 12)) + (Math.random() * 0.2);
                  return (
                    <motion.div
                      key={`term-${index}`}
                      style={{
                        position: 'absolute',
                        fontSize: index % 3 === 0 ? '16px' : '13px',
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        textShadow: `0 0 5px ${alpha(theme.palette.primary.main, 0.5)}`,
                        zIndex: 2,
                      }}
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: [0, Math.cos(angle) * 180],
                        y: [0, Math.sin(angle) * 180],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5 + (index % 3),
                        delay: index * 0.4,
                        ease: 'easeInOut'
                      }}
                    >
                      {term}
                    </motion.div>
                  );
                })}
                
                {/* Subtle data flow lines connecting to terms */}
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = index * (Math.PI / 3);
                  return (
                    <motion.div
                      key={`data-line-${index}`}
                      style={{
                        position: 'absolute',
                        width: '100px',
                        height: '1px',
                        background: `linear-gradient(90deg, 
                          ${theme.palette.primary.main}, 
                          transparent)`,
                        transformOrigin: 'left center',
                        transform: `rotate(${angle}rad)`,
                        opacity: 0,
                      }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        delay: index * 0.7,
                        ease: 'easeInOut'
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AIAgentDevelopmentHero;
