'use client';

import Link from 'next/link';

export default function Footer() {
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
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Anacruses Associates</h3>
            <p className="text-sm text-gray-300 mb-4">
              ISO Management Systems Consultancy. Practical guidance. Certified expertise.
            </p>
            <div className="text-sm text-gray-400">
              <p><strong>Company:</strong> 14420827</p>
              <p><strong>VAT:</strong> 468 6796 17</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/iso-9001" className="hover:text-white transition">ISO 9001</Link></li>
              <li><Link href="/services/iso-14001" className="hover:text-white transition">ISO 14001</Link></li>
              <li><Link href="/services/iso-27001" className="hover:text-white transition">ISO 27001</Link></li>
              <li><Link href="/services/iso-45001" className="hover:text-white transition">ISO 45001</Link></li>
              <li><Link href="/services/iso-42001" className="hover:text-white transition">ISO 42001</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/insights" className="hover:text-white transition">Insights</Link></li>
              <li><Link href="/sectors" className="hover:text-white transition">Sectors</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a 
                  href="tel:07792259840"
                  onClick={handlePhoneClick}
                  className="hover:text-white transition"
                >
                  07792 259840
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a 
                  href="mailto:rob.pragnell@anacruses.co.uk"
                  className="hover:text-white transition"
                >
                  rob.pragnell@anacruses.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Anacruses Associates Ltd. All rights reserved.</p>
          <div className="space-x-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
