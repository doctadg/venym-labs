'use client';

import React, { Suspense } from 'react';
import Layout from '@/components/Layout';
import AIAgentDevelopmentHero from '@/components/sections/AIAgentDevelopmentHero';
import AIAgentDevelopmentCard from '@/components/sections/AIAgentDevelopmentCard';
import AIAgentTechnologies from '@/components/sections/AIAgentTechnologies';
import AIAgentCaseStudies from '@/components/sections/AIAgentCaseStudies';
import dynamic from 'next/dynamic';

const AIAgentSEO = dynamic(() => import('@/components/AIAgentSEO'), { ssr: false });
import { usePathname, useSearchParams } from 'next/navigation';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Contact from '@/components/sections/Contact';

// Client component that safely uses useSearchParams
function AIAgentContent() {
  const theme = useTheme();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get('locale') || 'en';
  const canonicalUrl = `https://venymlabs.com${pathname}`;

  const aiAgentServices = [
    { id: 'custom-agents' },
    { id: 'agent-integration' },
    { id: 'llm-fine-tuning' },
    { id: 'agent-orchestration' },
  ];

  return (
    <>
      {/* SEO Optimization */}
      <AIAgentSEO 
        canonicalUrl={canonicalUrl}
        pathname={pathname}
        locale={locale}
      />
      
      {/* Hero Section */}
      <AIAgentDevelopmentHero />
      
      {/* Services Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.background.paper 
            : `linear-gradient(to bottom right, ${theme.palette.primary.main}11, ${theme.palette.primary.light}22)`
        }}
      >
        <Container maxWidth="lg">
          <Box mb={8}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark
              }}
            >
              <FormattedMessage id="aiAgentDevelopment.servicesTitle" defaultMessage="Our AI Agent Services" />
            </Typography>
            <Typography 
              variant="h5" 
              mb={4} 
              align="center"
              sx={{
                color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)'
              }}
            >
              <FormattedMessage id="aiAgentDevelopment.servicesSubtitle" defaultMessage="Comprehensive AI agent solutions tailored for your business" />
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {aiAgentServices.map((service, index) => (
              <Grid item key={service.id} xs={12} sm={6} md={3}>
                <AIAgentDevelopmentCard service={service} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Technologies Section */}
      <AIAgentTechnologies />
      
      {/* Case Studies Section */}
      <AIAgentCaseStudies />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}

// Main page component with Suspense boundary
export default function AIAgentDevelopmentPage() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <AIAgentContent />
      </Suspense>
    </Layout>
  );
}
