'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

interface AIAgentDevelopmentCardProps {
  service: { id: string };
  index: number;
}

const serviceDetails = [
  {
    id: 'custom-agents',
    title: 'Custom AI Agent Development',
    description: 'Build specialized AI agents tailored to your specific business needs and workflows',
    icon: '/icons/custom-agent.svg'
  },
  {
    id: 'agent-integration',
    title: 'AI Agent Integration',
    description: 'Seamlessly integrate AI agents with your existing systems and business processes',
    icon: '/icons/agent-integration.svg'
  },
  {
    id: 'llm-fine-tuning',
    title: 'LLM Fine-Tuning',
    description: 'Optimize large language models with domain-specific data for enhanced performance',
    icon: '/icons/llm-tuning.svg'
  },
  {
    id: 'agent-orchestration',
    title: 'Agent Orchestration',
    description: 'Coordinate multiple AI agents to work together on complex business workflows',
    icon: '/icons/agent-orchestration.svg'
  }
];

const AIAgentDevelopmentCard: React.FC<AIAgentDevelopmentCardProps> = ({ service }) => {
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
        backgroundColor: theme.palette.mode === 'dark' 
          ? theme.palette.background.paper 
          : `rgba(40, 183, 21, 0.05)`,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
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
        {/* Fallback icon if SVG is not available */}
        <Box
          sx={{
            width: '60%',
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.primary.main
          }}
        >
          {service.id === 'custom-agents' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          )}
          {service.id === 'agent-integration' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
            </svg>
          )}
          {service.id === 'llm-fine-tuning' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          )}
          {service.id === 'agent-orchestration' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
            </svg>
          )}
        </Box>
      </Box>
      <Typography 
        variant="h5" 
        component="h3" 
        gutterBottom 
        sx={{
          fontWeight: 600,
          color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
          mb: 2
        }}
      >
        {currentService.title}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{
          px: 2,
          lineHeight: 1.6,
          color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)'
        }}
      >
        {currentService.description}
      </Typography>
    </Card>
  );
};

export default AIAgentDevelopmentCard;
