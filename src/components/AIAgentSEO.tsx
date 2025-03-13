'use client';

import dynamic from 'next/dynamic';
const Head = dynamic(() => import('next/head'));
const { useIntl } = require('react-intl');

interface AIAgentSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  pathname?: string;
  locale?: string;
}

const AIAgentSEO: React.FC<AIAgentSEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/ai-agent-development-thailand.jpg',
  canonicalUrl = '',
  pathname = '',
  locale = 'en',
}) => {
  const intl = useIntl();
  
  // Default values with strong Thailand focus for SEO
  const defaultTitle = intl.formatMessage({ 
    id: 'aiAgentDevelopment.seo.title',
    defaultMessage: 'AI Agent Development Services in Thailand | Venym Labs'
  });
  
  const defaultDescription = intl.formatMessage({ 
    id: 'aiAgentDevelopment.seo.description',
    defaultMessage: 'Leading AI agent development company in Thailand. Expert custom agent development, LLM fine-tuning, and AI consulting services in Bangkok and across Thailand.'
  });
  
  const defaultKeywords = intl.formatMessage({ 
    id: 'aiAgentDevelopment.seo.keywords',
    defaultMessage: 'ai agent development thailand, ai services bangkok, llm fine-tuning thailand, custom ai agents thailand, ai consulting bangkok, ai development thailand, ai experts thailand, thai ai developers'
  });
  
  // Use provided values or defaults
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  
  // Structured data for rich results
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seoTitle,
    description: seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'Venym Labs',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangkok',
        addressRegion: 'Bangkok',
        addressCountry: 'Thailand'
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand'
    },
    serviceType: 'AI Agent Development',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock'
    }
  };
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={locale === 'en' ? 'th' : 'en'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Geo Tags for Thailand */}
      <meta name="geo.region" content="TH" />
      <meta name="geo.placename" content="Bangkok" />
      
      {/* Language Alternates */}
      {pathname && <>
        <link rel="alternate" href={`https://venymlabs.com/en${pathname}`} hrefLang="en" />
        <link rel="alternate" href={`https://venymlabs.com/th${pathname}`} hrefLang="th" />
      </>}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default dynamic(() => Promise.resolve(AIAgentSEO), { ssr: false });
