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
      'description': 'Expert ISO consultancy for UK businesses. CQI & TRECCERT certified Lead Auditor.',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'GB',
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'telephone': '+44-7792-259840',
        'email': 'rob.pragnell@anacruses.co.uk',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.anacruses.co.uk/#breadcrumbs',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.anacruses.co.uk',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TF0NCH6E16"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TF0NCH6E16', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg),
          }}
          type="application/ld+json"
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
