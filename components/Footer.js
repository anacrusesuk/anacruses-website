import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-5 text-sm">

        {/* Brand — logo replaces text */}
        <div className="md:col-span-1">
          <img src="/images/logo.png" alt="Anacruses Associates Ltd" className="h-16 w-auto mb-4" />
          <p className="text-gray-300 leading-relaxed text-xs">
            Expert ISO consultancy for UK businesses. CQI/IRCA certified Lead Auditor across ISO 9001, 14001, 27001, 45001 and 42001.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-3">Services</div>
          <ul className="space-y-1 text-gray-300">
            {[
              ['ISO 9001', '/services/iso-9001'],
              ['ISO 14001', '/services/iso-14001'],
              ['ISO 27001', '/services/iso-27001'],
              ['ISO 45001', '/services/iso-45001'],
              ['ISO 42001', '/services/iso-42001'],
              ['UKAS Laboratory', '/services/ukas-laboratory'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-3">Company</div>
          <ul className="space-y-1 text-gray-300">
            {[
              ['About Rob Pragnell', '/about'],
              ['Training Courses', '/training'],
              ['News & Comment', '/news'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-3">Contact</div>
          <div className="text-gray-300 space-y-2 mb-4">
            <p>Hertfordshire, UK</p>
            <p>Serving clients across the UK</p>
            <a href="tel:07792259840" className="block hover:text-gold transition-colors">07792 259840</a>
            <a href="mailto:assurance@anacruses.co.uk" className="block hover:text-gold transition-colors text-xs">assurance@anacruses.co.uk</a>
            <Link href="/contact" className="text-gold hover:text-gold-light">Book a free consultation →</Link>
          </div>
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-2">Follow</div>
          <div className="flex gap-3">
            <a href="https://lnkd.in/eZzbQZPv" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold transition-colors text-xs">LinkedIn</a>
            <a href="https://twitter.com/AnacrusesUK" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold transition-colors text-xs">X</a>
            <a href="https://www.facebook.com/AnacrusesAssociates" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold transition-colors text-xs">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom bar — logos + legal all in one clean row */}
      <div className="border-t border-navy-light">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Accreditation logos */}
          <div className="flex items-center gap-6">
            <img src="/images/ico.jpg" alt="ICO — Information Commissioner's Office"
                 className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/images/ian-network.jpg" alt="ISOQAR Associate Network Member"
                 className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/images/chartered-college.png" alt="Chartered College of Teaching"
                 className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          {/* Legal */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-400 text-center md:text-right">
            <span>© {new Date().getFullYear()} Anacruses Associates Ltd. All rights reserved.</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span>Co. No. 14420827</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span>VAT No. 468 6796 17</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
