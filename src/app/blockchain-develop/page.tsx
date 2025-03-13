'use client';

import React, { Suspense } from 'react';
import Layout from '@/components/Layout';
import BlockchainDevelopmentHero from '@/components/sections/BlockchainDevelopmentHero';
import BlockchainDevelopmentCard from '@/components/sections/BlockchainDevelopmentCard';
import BlockchainTechnologies from '@/components/sections/BlockchainTechnologies';
import BlockchainCaseStudies from '@/components/sections/BlockchainCaseStudies';
import dynamic from 'next/dynamic';

const BlockchainSEO = dynamic(() => import('@/components/BlockchainSEO'), { ssr: false });
import { usePathname, useSearchParams } from 'next/navigation';

import { Box, Container, Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Contact from '@/components/sections/Contact';

// Client component that safely uses useSearchParams
function BlockchainContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get('locale') || 'en';
  const canonicalUrl = `https://venymlabs.com${pathname}`;

  const blockchainServices = [
    { id: 'smart-contracts' },
    { id: 'decentralized-apps' },
    { id: 'nft-development' },
    { id: 'wallet-integration' },
];

  return (
    <>
      {/* SEO Optimization */}
      <BlockchainSEO 
        canonicalUrl={canonicalUrl}
        pathname={pathname}
        locale={locale}
      />
      
      {/* Hero Section */}
      <BlockchainDevelopmentHero />
      
      {/* Services Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'inherit'
        }}
      >
        <Container maxWidth="lg">
          <Box mb={8}>
            <Typography variant="h2" component="h2" gutterBottom align="center">
              <FormattedMessage id="blockchainDevelopment.servicesTitle" defaultMessage="Our Blockchain Services" />
            </Typography>
            <Typography variant="h5" color="text.secondary" mb={4} align="center">
              <FormattedMessage id="blockchainDevelopment.servicesSubtitle" defaultMessage="Comprehensive blockchain solutions tailored for your business" />
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {blockchainServices.map((service, index) => (
              <Grid item key={service.id} xs={12} sm={6} md={3}>
                <BlockchainDevelopmentCard service={service} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Technologies Section */}
      <BlockchainTechnologies />
      
      {/* Case Studies Section */}
      <BlockchainCaseStudies />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}

// Main page component with Suspense boundary
export default function BlockchainDevelopmentPage() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <BlockchainContent />
      </Suspense>
    </Layout>
  );
}
