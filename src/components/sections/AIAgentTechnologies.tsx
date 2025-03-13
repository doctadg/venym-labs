'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// AI technologies and logos
const technologies = [
  { id: 'openai', name: 'OpenAI', logo: '/logos/openai.svg', description: 'GPT-4 & beyond' },
  { id: 'anthropic', name: 'Anthropic', logo: '/logos/anthropic.svg', description: 'Claude models' },
  { id: 'llama', name: 'Llama', logo: '/logos/llama.svg', description: 'Open source LLMs' },
  { id: 'huggingface', name: 'Hugging Face', logo: '/logos/huggingface.svg', description: 'Model repository' },
  { id: 'langchain', name: 'LangChain', logo: '/logos/langchain.svg', description: 'Agent frameworks' },
  { id: 'pinecone', name: 'Pinecone', logo: '/logos/pinecone.svg', description: 'Vector databases' },
  { id: 'llamaindex', name: 'LlamaIndex', logo: '/logos/llamaindex.svg', description: 'Data indexing' },
  { id: 'pytorch', name: 'PyTorch', logo: '/logos/pytorch.svg', description: 'Model training' },
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
  
  // Fallback icons for technologies
  const getFallbackIcon = (id: string) => {
    switch(id) {
      case 'openai':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
          </svg>
        );
      case 'anthropic':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.33L19.33 8 12 11.67 4.67 8 12 4.33zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z" />
          </svg>
        );
      case 'llama':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 4A6.5 6.5 0 0 1 16 10.5c0 1.33-.47 2.55-1.26 3.5H9.74c-.79-.95-1.26-2.17-1.26-3.5A6.5 6.5 0 0 1 9.5 4m0 2c-2.5 0-4.5 2-4.5 4.5 0 .88.25 1.71.69 2.4.13.2.28.39.44.57h7.74c.16-.18.31-.37.44-.57.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5M3 10a1 1 0 0 1 1 1v6h2v-5h2v5h1v-5h2v5h1v-5h2v5h2v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9h-2v-2H3v2H1v-9a1 1 0 0 1 1-1h1z" />
          </svg>
        );
      case 'huggingface':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.82 13.448l.067-.067c.387-.388.896-.582 1.407-.582.51 0 1.02.194 1.407.582.388.387.582.896.582 1.407 0 .51-.194 1.02-.582 1.407l-2.215 2.215a1.989 1.989 0 0 1-2.814 0 1.989 1.989 0 0 1 0-2.814l.388-.388.582-.582.582-.582.596-.596zm2.215-2.814l-.067.067c-.388.387-.896.582-1.407.582-.51 0-1.02-.195-1.407-.582a1.989 1.989 0 0 1 0-2.814l2.215-2.215a1.989 1.989 0 0 1 2.814 0 1.989 1.989 0 0 1 0 2.814l-.388.388-.582.582-.582.582-.596.596z" />
          </svg>
        );
      case 'langchain':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.33L19.33 8 12 11.67 4.67 8 12 4.33zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z" />
          </svg>
        );
      case 'pinecone':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        );
      case 'llamaindex':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        );
      case 'pytorch':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 13.95 9.866 9.866 0 0 0 13.95 0 9.866 9.866 0 0 0 0-13.95L11.948 0h.057zm1.809 7.881a2.007 2.007 0 1 1 0 4.014 2.007 2.007 0 0 1 0-4.014z" />
          </svg>
        );
      default:
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2V7a1 1 0 0 0-1-1z" />
          </svg>
        );
    }
  };
  
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
          backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.background.paper 
            : `rgba(40, 183, 21, 0.05)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
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
            color: theme.palette.primary.main
          }}
        >
          {getFallbackIcon(technology.id)}
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
          }}
        >
          {technology.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)',
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

const AIAgentTechnologies = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : `linear-gradient(to bottom right, ${theme.palette.primary.main}11, ${theme.palette.secondary.light}22)`,
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
            <FormattedMessage id="aiAgentDevelopment.technologies.title" defaultMessage="Technologies We Use" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)',
              mb: 4,
            }}
          >
            <FormattedMessage 
              id="aiAgentDevelopment.technologies.subtitle" 
              defaultMessage="We leverage cutting-edge AI technologies to build powerful, intelligent agents"
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'rgba(0, 0, 0, 0.8)',
            }}
          >
            <FormattedMessage 
              id="aiAgentDevelopment.technologies.description" 
              defaultMessage="Our team has extensive experience working with a wide range of AI and machine learning technologies, ensuring we can deliver the right solution for your specific needs."
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
              id="aiAgentDevelopment.technologies.customSolutions" 
              defaultMessage="Need a custom AI solution? Our experts can work with any AI framework or model to meet your specific requirements."
            />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AIAgentTechnologies;
