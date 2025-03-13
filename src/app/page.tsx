'use client';

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import AgentsCatalog from '../components/sections/AgentsCatalog';
import BlockchainIntegrations from '../components/sections/BlockchainIntegrations';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AgentsCatalog />
      <BlockchainIntegrations />
      <Services />
      <Pricing />
      <Contact />
    </Layout>
  );
}
