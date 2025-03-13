"use client";

import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Switch, FormControlLabel, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Feature check icon
const CheckIcon = () => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    sx={{
      width: '20px',
      height: '20px',
      fill: 'currentColor',
      mr: 1,
    }}
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </Box>
);

// Pricing card component
interface PricingCardProps {
  tier: string;
  index: number;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, index, isYearly }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Get features from translation IDs
  const getFeatures = () => {
    const features = [];
    let i = 0;
    while (true) {
      const key = `pricing.${tier}.features.${i}`;
      const element = document.getElementById(key);
      if (!element) break;
      features.push(key);
      i++;
    }
    return features.length > 0 ? features : [`pricing.${tier}.features.0`, `pricing.${tier}.features.1`, `pricing.${tier}.features.2`, `pricing.${tier}.features.3`];
  };
  
  // Calculate yearly price (20% discount)
  const getPrice = () => {
    if (tier === 'enterprise') return <FormattedMessage id={`pricing.${tier}.price`} />;
    
    const priceString = <FormattedMessage id={`pricing.${tier}.price`} />;
    if (!isYearly) return priceString;
    
    // For display purposes only - in a real app you'd handle this differently
    return (
      <Box component="span">
        {priceString}
        <Box component="span" sx={{ color: theme.palette.success.main, ml: 1, fontSize: '0.9rem' }}>
          -20%
        </Box>
      </Box>
    );
  };
  
  // Highlight the Pro tier
  const isHighlighted = tier === 'pro';
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: isHighlighted ? '0 10px 40px rgba(40, 183, 21, 0.25)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          border: isHighlighted ? `2px solid ${theme.palette.primary.main}` : 'none',
          transform: isHighlighted ? 'scale(1.05)' : 'scale(1)',
          zIndex: isHighlighted ? 2 : 1,
          '&:hover': {
            boxShadow: isHighlighted 
              ? '0 15px 50px rgba(40, 183, 21, 0.3)' 
              : '0 15px 40px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {isHighlighted && (
          <Box
            sx={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              px: 2,
              py: 0.5,
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Popular
          </Box>
        )}
        
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: isHighlighted ? theme.palette.primary.main : theme.palette.text.primary,
            }}
          >
            <FormattedMessage id={`pricing.${tier}.title`} />
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              minHeight: '40px',
            }}
          >
            <FormattedMessage id={`pricing.${tier}.description`} />
          </Typography>
          
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: isHighlighted ? theme.palette.primary.main : theme.palette.text.primary,
            }}
          >
            {getPrice()}
            {tier !== 'enterprise' && (
              <Typography component="span" variant="body2" sx={{ color: theme.palette.text.secondary, ml: 1 }}>
                /{isYearly ? 'year' : 'mo'}
              </Typography>
            )}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <CheckIcon />
                <Typography variant="body2">
                  <FormattedMessage id={`pricing.${tier}.features.${i}`} />
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
        
        <CardActions sx={{ p: 4, pt: 0 }}>
          <Button
            fullWidth
            variant={isHighlighted ? 'contained' : 'outlined'}
            color="primary"
            component={motion.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            sx={{
              borderRadius: '50px',
              py: 1.5,
              fontWeight: 600,
              boxShadow: isHighlighted ? '0 8px 16px rgba(40, 183, 21, 0.2)' : 'none',
            }}
          >
            {tier === 'enterprise' ? 'Contact Us' : 'Get Started'}
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  const theme = useTheme();
  const [isYearly, setIsYearly] = useState(false);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };
  
  const pricingTiers = [
    { id: 'basic' },
    { id: 'pro' },
    { id: 'enterprise' },
  ];
  
  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? theme.palette.background.paper 
          : theme.palette.grey[50],
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
            <FormattedMessage id="pricing.title" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
              mb: 4,
            }}
          >
            <FormattedMessage id="pricing.subtitle" />
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 6,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              <FormattedMessage id="pricing.monthly" />
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isYearly}
                  onChange={handleToggleChange}
                  color="primary"
                  sx={{ mx: 1 }}
                />
              }
              label=""
            />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              <FormattedMessage id="pricing.yearly" />
            </Typography>
            {isYearly && (
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                sx={{
                  ml: 2,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '20px',
                  backgroundColor: theme.palette.success.main + '22',
                  color: theme.palette.success.main,
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
              >
                Save 20%
              </Box>
            )}
          </Box>
        </Box>
        
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {pricingTiers.map((tier, index) => (
            <Grid 
              item 
              key={tier.id} 
              xs={12} 
              md={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: '350px' }}>
                <PricingCard tier={tier.id} index={index} isYearly={isYearly} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
