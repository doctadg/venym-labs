'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

interface BlockchainDevelopmentCardProps {
  service: { id: string };
  index: number;
}

const serviceDetails = [
  {
    id: 'smart-contracts',
    title: 'Smart Contract Development',
    description: 'Develop secure and efficient smart contracts for various blockchain platforms',
    icon: '/icons/smart-contract.svg'
  },
  {
    id: 'decentralized-apps',
    title: 'Decentralized Applications',
    description: 'Build decentralized applications (dApps) with seamless user experiences',
    icon: '/icons/dapp.svg'
  },
  {
    id: 'nft-development',
    title: 'NFT Solutions',
    description: 'Create unique NFT solutions including marketplaces and minting platforms',
    icon: '/icons/nft.svg'
  },
  {
    id: 'wallet-integration',
    title: 'Multi-Chain Wallet Integration',
    description: 'Implement multi-chain wallet integrations for enhanced accessibility',
    icon: '/icons/wallet.svg'
  }
];

const BlockchainDevelopmentCard: React.FC<BlockchainDevelopmentCardProps> = ({ service }) => {
  const theme = useTheme();
  const currentService = serviceDetails.find(s => s.id === service.id);

  if (!currentService) return null;

  return (
    <Card
      key={service.id}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: `2px solid ${theme.palette.divider}`,
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          boxShadow: theme.shadows[12],
          '& .service-icon': {
            transform: 'scale(1.1) rotate(15deg)'
          }
        }
      }}
    >
      <Box
        className="service-icon"
        sx={{
          width: '80px',
          height: '80px',
          background: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)'}`,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: 'all 0.3s ease',
        }}
      >
        <img 
          src={currentService.icon} 
          alt={`${currentService.title} icon`} 
          style={{ width: '60%', height: '60%' }} 
        />
      </Box>
      <Typography 
        variant="h5" 
        component="h3" 
        gutterBottom 
        sx={{
          fontWeight: 600,
          color: theme.palette.text.primary,
          mb: 2
        }}
      >
        {currentService.title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{
          px: 2,
          lineHeight: 1.6
        }}
      >
        {currentService.description}
      </Typography>
    </Card>
  );
};

export default BlockchainDevelopmentCard;
