import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.anacruses.co.uk'),
  title: { default: 'Anacruses — ISO Consultant UK', template: '%s | Anacruses' },
  description: 'Expert ISO consultancy for UK businesses. CQI/IRCA certified Lead Auditor with 20+ years experience in ISO 9001, 14001, 27001, 45001 and 42001.',
  openGraph: {
    siteName: 'Anacruses Associates Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
