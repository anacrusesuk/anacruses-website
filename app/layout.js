import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.anacruses.co.uk'),
  title: { default: 'Anacruses — ISO Consultant UK', template: '%s | Anacruses' },
  description: 'Expert ISO consultancy for UK businesses. CQI & TRECCERT certified Lead Auditor — ISO 9001, 14001, 27001 & 45001. ISO 42001 Practitioner. 20+ years experience.',
  openGraph: {
    siteName: 'Anacruses Associates Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.anacruses.co.uk/#business',
      'name': 'Anacruses Associates Ltd',
      'url': 'https://www.anacruses.co.uk',
      'logo': 'https://www.anacruses.co.uk/images/logo.png',
      'image': 'https://www.anacruses.co.uk/images/logo.png',
      'description': 'Specialist ISO management systems consultancy based in Hertfordshire. CQI/IRCA certified Lead Auditor with 20+ years experience across ISO 9001, 14001, 27001, 45001 and 42001.',
      'telephone': '+447792259840',
      'email': 'rob@anacruses.co.uk',
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'Hertfordshire',
        'addressCountry': 'GB',
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'United Kingdom' },
        { '@type': 'AdministrativeArea', 'name': 'Hertfordshire' },
        { '@type': 'AdministrativeArea', 'name': 'Essex' },
        { '@type': 'City', 'name': 'London' },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'ISO Consultancy Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ISO 9001 Quality Management Consultancy', 'url': 'https://www.anacruses.co.uk/services/iso-9001/' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ISO 14001 Environmental Management Consultancy', 'url': 'https://www.anacruses.co.uk/services/iso-14001/' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ISO 27001 Information Security Consultancy', 'url': 'https://www.anacruses.co.uk/services/iso-27001/' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ISO 45001 Health & Safety Consultancy', 'url': 'https://www.anacruses.co.uk/services/iso-45001/' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ISO 42001 AI Management Consultancy', 'url': 'https://www.anacruses.co.uk/services/iso-42001/' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'UKAS Laboratory Accreditation Support', 'url': 'https://www.anacruses.co.uk/services/ukas-laboratory/' } },
        ],
      },
      'founder': {
        '@type': 'Person',
        'name': 'Rob Pragnell',
        'jobTitle': 'Principal Consultant & CQI/IRCA Lead Auditor',
        'knowsAbout': ['ISO 9001', 'ISO 14001', 'ISO 27001', 'ISO 45001', 'ISO 42001', 'UKAS accreditation'],
      },
      'sameAs': [
        'https://www.linkedin.com/company/anacruses-associates',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.anacruses.co.uk/#website',
      'url': 'https://www.anacruses.co.uk',
      'name': 'Anacruses Associates Ltd',
      'publisher': { '@id': 'https://www.anacruses.co.uk/#business' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 consent mode — default denied until user accepts */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
            });
          `}
        </Script>

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TF0NCH6E16"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TF0NCH6E16');
          `}
        </Script>

        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
