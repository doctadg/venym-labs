"use client";

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Agent card component
interface AgentCardProps {
  id: string;
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ id, index }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          '&:hover': {
            boxShadow: '0 15px 40px rgba(40, 183, 21, 0.2)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          },
        }}
      >
        <Box
          sx={{
            height: '160px',
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}22, ${theme.palette.primary.main}33)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Abstract agent visualization */}
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            sx={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}88, ${theme.palette.primary.dark}44)`,
              boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
            }}
          />
          
          {/* Animated particles */}
          {Array.from({ length: 5 }).map((_, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                opacity: 0.3,
              }}
              animate={{
                x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
                y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              sx={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: theme.palette.primary.main,
              }}
            />
          ))}
        </Box>
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            <FormattedMessage id={`agents.agent${index + 1}.name`} />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            <FormattedMessage id={`agents.agent${index + 1}.description`} />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mt: 'auto',
            }}
          >
            <FormattedMessage id={`agents.agent${index + 1}.price`} />
          </Typography>
        </CardContent>
        
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            fullWidth
            component={motion.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            sx={{
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            <FormattedMessage id="agents.viewDetails" />
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const AgentsCatalog = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  // We'll display 4 agents as per the translation files
  const agents = [
    { id: 'agent1' },
    { id: 'agent2' },
    { id: 'agent3' },
    { id: 'agent4' },
  ];
  
  return (
    <Box
      id="agents"
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
            <FormattedMessage id="agents.title" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
            }}
          >
            <FormattedMessage id="agents.subtitle" />
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {agents.map((agent, index) => (
            <Grid item key={agent.id} xs={12} sm={6} md={3}>
              <AgentCard id={agent.id} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AgentsCatalog;
