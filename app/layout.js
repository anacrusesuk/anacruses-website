'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Handle phone click GA4 event
  const handlePhoneClick = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        'event_category': 'engagement',
        'event_label': 'phone_call',
        'value': 1,
      });
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
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

        {/* Cookie Consent Banner Script */}
        <Script
          id="cookie-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              
              function consentGranted() {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
              
              function consentDenied() {
                gtag('consent', 'update', {
                  'analytics_storage': 'denied'
                });
              }
              
              // Default: deny until user consents
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ISO Certification Consultancy for UK Businesses" />
        
        {/* Branding Colors */}
        <meta name="theme-color" content="#1B2A4A" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      <body className="bg-white text-gray-900 font-sans">
        
        {/* Header / Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo / Home Link */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-blue-950 font-bold text-2xl">Anacruses</div>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/services/iso-9001" className="text-gray-700 hover:text-blue-950 transition">ISO 9001</Link>
                <Link href="/services/iso-27001" className="text-gray-700 hover:text-blue-950 transition">ISO 27001</Link>
                <Link href="/services/iso-45001" className="text-gray-700 hover:text-blue-950 transition">ISO 45001</Link>
                <Link href="/insights" className="text-gray-700 hover:text-blue-950 transition">Insights</Link>
                <Link href="/sectors" className="text-gray-700 hover:text-blue-950 transition">Sectors</Link>
              </nav>

              {/* CTA Button */}
              <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition">
                Free Consultation
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-950 text-white mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-bold mb-4">Anacruses Associates Ltd</h3>
                <p className="text-blue-100 text-sm mb-4">
                  ISO Management Systems Consultancy. Practical guidance. Certified expertise.
                </p>
                <div className="text-sm text-blue-100">
                  <p><strong>Company:</strong> 14420827</p>
                  <p><strong>VAT:</strong> 468 6796 17</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li><Link href="/services/iso-9001" className="hover:text-yellow-400 transition">ISO 9001</Link></li>
                  <li><Link href="/services/iso-14001" className="hover:text-yellow-400 transition">ISO 14001</Link></li>
                  <li><Link href="/services/iso-27001" className="hover:text-yellow-400 transition">ISO 27001</Link></li>
                  <li><Link href="/services/iso-45001" className="hover:text-yellow-400 transition">ISO 45001</Link></li>
                  <li><Link href="/services/iso-42001" className="hover:text-yellow-400 transition">ISO 42001</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li><Link href="/insights" className="hover:text-yellow-400 transition">Insights</Link></li>
                  <li><Link href="/sectors" className="hover:text-yellow-400 transition">Sectors</Link></li>
                  <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-yellow-400 transition">Privacy</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <div className="space-y-3 text-sm text-blue-100">
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a 
                      href="tel:07792259840" 
                      onClick={handlePhoneClick}
                      className="hover:text-yellow-400 transition"
                    >
                      07792 259840
                    </a>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:rob.pragnell@anacruses.co.uk"
                      className="hover:text-yellow-400 transition"
                    >
                      rob.pragnell@anacruses.co.uk
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800 pt-8 flex justify-between items-center text-sm text-blue-100">
              <p>&copy; 2026 Anacruses Associates Ltd. All rights reserved.</p>
              <div className="space-x-6">
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}