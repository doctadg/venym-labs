'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Case study component
interface CaseStudyCardProps {
  index: number;
  title: string;
  description: string;
  company: string;
  industry: string;
  location: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  index, 
  title, 
  description, 
  company, 
  industry,
  location
}) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
          backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.background.paper 
            : `rgba(108, 99, 255, 0.05)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          '&:hover': {
            boxShadow: '0 15px 40px rgba(40, 183, 21, 0.2)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          }
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ 
              mb: 3,
              color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)'
            }}
          >
            {description}
          </Typography>
          
          <Box sx={{ mt: 'auto' }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              {company}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {industry}
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AIAgentCaseStudies = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  // Case studies data
  const caseStudies = [
    {
      title: "Customer Service AI Agent",
      description: "Developed an AI agent that handles 80% of customer inquiries automatically, reducing response time by 65% and improving customer satisfaction scores by 40%.",
      company: "E-Commerce Solutions Co.",
      industry: "Retail",
      location: "Bangkok, Thailand"
    },
    {
      title: "Financial Analysis Agent",
      description: "Created an AI agent that analyzes financial data, generates reports, and provides investment recommendations, saving analysts 20+ hours per week.",
      company: "Investment Partners Ltd.",
      industry: "Finance",
      location: "Bangkok, Thailand"
    },
    {
      title: "Healthcare Assistant Agent",
      description: "Implemented an AI agent that helps medical staff with patient scheduling, record management, and preliminary symptom analysis.",
      company: "Modern Health Systems",
      industry: "Healthcare",
      location: "Chiang Mai, Thailand"
    },
  ];
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? theme.palette.background.paper 
          : `linear-gradient(to bottom right, ${theme.palette.secondary.main}11, ${theme.palette.primary.light}22)`,
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
            <FormattedMessage id="aiAgentDevelopment.caseStudies.title" defaultMessage="Success Stories" />
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
              id="aiAgentDevelopment.caseStudies.subtitle" 
              defaultMessage="Real-world AI agent solutions we've delivered for clients in Thailand and beyond"
            />
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {caseStudies.map((caseStudy, index) => (
            <Grid item key={index} xs={12} md={4}>
              <CaseStudyCard
                index={index}
                title={caseStudy.title}
                description={caseStudy.description}
                company={caseStudy.company}
                industry={caseStudy.industry}
                location={caseStudy.location}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AIAgentCaseStudies;
