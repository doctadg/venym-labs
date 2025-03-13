'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Blockchain technologies and logos
const technologies = [
  { id: 'ethereum', name: 'Ethereum', logo: '/logos/ethereum.svg', description: 'Smart contracts & DApps' },
  { id: 'polygon', name: 'Polygon', logo: '/logos/pol.svg', description: 'Scalable solutions' },
  { id: 'solana', name: 'Solana', logo: '/logos/sol.svg', description: 'High-performance apps' },
  { id: 'avalanche', name: 'Avalanche', logo: '/logos/avax.svg', description: 'Fast finality' },
  { id: 'binance', name: 'BNB Chain', logo: '/logos/bnb.svg', description: 'Low-cost transactions' },
  { id: 'arbitrum', name: 'Arbitrum', logo: '/logos/arbitrum.svg', description: 'Layer 2 scaling' },
  { id: 'optimism', name: 'Optimism', logo: '/logos/optimism.svg', description: 'Optimistic rollups' },
  { id: 'base', name: 'Base', logo: '/logos/base.svg', description: 'Enterprise solutions' },
  { id: 'wallet', name: 'Multi-chain Wallets', logo: '/logos/wallet.png', description: 'Seamless wallet integration' },
];

// Technology card component
interface TechnologyCardProps {
  technology: {
    id: string;
    name: string;
    logo: string;
    description: string;
  };
  index: number;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology, index }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(40, 183, 21, 0.15)',
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <Box
          sx={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // For Safari
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
            mb: 2,
            overflow: 'hidden',
          }}
        >
          <img src={technology.logo} alt={technology.name} style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {technology.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            mt: 1,
          }}
        >
          {technology.description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const BlockchainTechnologies = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  return (
    <Box
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
            <FormattedMessage id="blockchainDevelopment.technologies.title" defaultMessage="Technologies We Use" />
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
            <FormattedMessage 
              id="blockchainDevelopment.technologies.subtitle" 
              defaultMessage="We specialize in developing on the most popular and reliable blockchain platforms"
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
            }}
          >
            <FormattedMessage 
              id="blockchainDevelopment.technologies.description" 
              defaultMessage="Our team has extensive experience working with a wide range of blockchain technologies, ensuring we can deliver the right solution for your specific needs."
            />
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {technologies.map((technology, index) => (
            <Grid item key={technology.id} xs={6} sm={4} md={3}>
              <TechnologyCard technology={technology} index={index} />
            </Grid>
          ))}
        </Grid>
        
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: '16px',
            border: `1px dashed ${theme.palette.primary.main}66`,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            <FormattedMessage 
              id="blockchainDevelopment.technologies.customSolutions" 
              defaultMessage="Need a custom blockchain solution? Our experts can develop on any blockchain platform to meet your specific requirements."
            />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlockchainTechnologies;
