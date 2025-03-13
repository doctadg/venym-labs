"use client";

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Check icon for features
const CheckIcon = () => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    sx={{
      width: '20px',
      height: '20px',
      fill: 'currentColor',
    }}
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </Box>
);

// Membership card component
interface MembershipCardProps {
  tier: string;
  index: number;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ tier, index }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Get features from translation IDs
  const getFeatures = () => {
    return Array.from({ length: 5 }).map((_, i) => `memberships.${tier}.features.${i}`);
  };
  
  // Determine if this is the premium tier
  const isPremium = tier === 'pro';
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
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
            transform: 'translateY(-10px)',
          },
          ...(isPremium && {
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}11)`,
            border: `2px solid ${theme.palette.primary.main}33`,
          }),
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: isPremium 
              ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
              : theme.palette.grey[300],
          }}
        />
        
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: isPremium ? theme.palette.primary.main : theme.palette.text.primary,
            }}
          >
            <FormattedMessage id={`memberships.${tier}.title`} />
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 4,
              color: isPremium ? theme.palette.primary.main : theme.palette.text.primary,
            }}
          >
            <FormattedMessage id={`memberships.${tier}.price`} />
          </Typography>
          
          <List sx={{ mb: 4 }}>
            {getFeatures().map((featureId, i) => (
              <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '30px', color: theme.palette.primary.main }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2">
                      <FormattedMessage id={featureId} defaultMessage=" " />
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          
          <Button
            fullWidth
            variant={isPremium ? 'contained' : 'outlined'}
            color="primary"
            component={motion.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            sx={{
              borderRadius: '50px',
              py: 1.5,
              fontWeight: 600,
              mt: 'auto',
              boxShadow: isPremium ? '0 8px 16px rgba(40, 183, 21, 0.2)' : 'none',
            }}
          >
            Subscribe Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Memberships = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  const memberships = [
    { id: 'basic' },
    { id: 'pro' },
  ];
  
  return (
    <Box
      id="memberships"
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
            <FormattedMessage id="memberships.title" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
            }}
          >
            <FormattedMessage id="memberships.subtitle" />
          </Typography>
        </Box>
        
        <Grid container spacing={6} justifyContent="center">
          {memberships.map((membership, index) => (
            <Grid item key={membership.id} xs={12} md={6} lg={5}>
              <MembershipCard tier={membership.id} index={index} />
            </Grid>
          ))}
        </Grid>
        
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: '16px',
            border: `1px dashed ${theme.palette.primary.main}66`,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Looking for custom enterprise solutions? Contact our sales team for tailored packages that meet your specific needs.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Memberships;
