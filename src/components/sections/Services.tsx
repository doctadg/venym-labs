"use client";

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Service card component
interface ServiceCardProps {
  id: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, index }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Service icons (simple SVG paths)
  const icons = [
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z", // AI Development
    "M4 4h16v16H4V4zm2 4h12v3H6V8zm0 5h12v3H6v-3z", // Blockchain Integration
    "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2zm0-4H7V5h10v2z", // Smart Contract
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", // AI Consulting
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          '&:hover': {
            boxShadow: '0 15px 40px rgba(40, 183, 21, 0.2)',
          },
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box
            sx={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}22, ${theme.palette.primary.light}44)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{
                width: '40px',
                height: '40px',
                fill: theme.palette.primary.main,
              }}
            >
              <path d={icons[index]} />
            </Box>
          </Box>
          
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            <FormattedMessage id={`services.service${index + 1}.title`} />
          </Typography>
          
          <Typography
            variant="body1"
            color="text.secondary"
          >
            <FormattedMessage id={`services.service${index + 1}.description`} />
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  // We'll display 4 services as per the translation files
  const services = [
    { id: 'service1' },
    { id: 'service2' },
    { id: 'service3' },
    { id: 'service4' },
  ];
  
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={titleRef}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            <FormattedMessage id="services.title" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
            }}
          >
            <FormattedMessage id="services.subtitle" />
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={service.id} xs={12} sm={6} md={3}>
              <ServiceCard id={service.id} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
