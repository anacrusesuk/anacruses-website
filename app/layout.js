import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
