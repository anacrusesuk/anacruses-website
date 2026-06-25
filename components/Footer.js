import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-bold text-lg mb-2">Anacruses</div>
          <div className="text-gold-DEFAULT font-medium mb-3">ISO Consultancy</div>
          <p className="text-gray-300 leading-relaxed text-xs">
            Expert ISO consultancy for UK businesses. CQI/IRCA certified Lead Auditor across ISO 9001, 14001, 27001, 45001 and 42001.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-semibold text-gold-DEFAULT uppercase tracking-wider text-xs mb-3">Services</div>
          <ul className="space-y-1 text-gray-300">
            {[
              ['ISO 9001', '/services/iso-9001'],
              ['ISO 14001', '/services/iso-14001'],
              ['ISO 27001', '/services/iso-27001'],
              ['ISO 45001', '/services/iso-45001'],
              ['ISO 42001', '/services/iso-42001'],
              ['UKAS Laboratory', '/services/ukas-laboratory'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-gold-DEFAULT transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-semibold text-gold-DEFAULT uppercase tracking-wider text-xs mb-3">Company</div>
          <ul className="space-y-1 text-gray-300">
            {[
              ['About Rob Pragnell', '/about'],
              ['Training Courses', '/training'],
              ['News & Comment', '/news'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-gold-DEFAULT transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <div className="font-semibold text-gold-DEFAULT uppercase tracking-wider text-xs mb-3">Contact</div>
          <div className="text-gray-300 space-y-1 mb-4">
            <p>Hertfordshire, UK</p>
            <p>Serving clients across the UK</p>
            <Link href="/contact" className="text-gold-DEFAULT hover:text-gold-light">Book a free consultation →</Link>
          </div>
          <div className="font-semibold text-gold-DEFAULT uppercase tracking-wider text-xs mb-2">Follow</div>
          <div className="flex gap-3">
            <a href="https://lnkd.in/eZzbQZPv" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold-DEFAULT transition-colors text-xs">LinkedIn</a>
            <a href="https://twitter.com/AnacrusesUK" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold-DEFAULT transition-colors text-xs">X</a>
            <a href="https://www.facebook.com/AnacrusesAssociates" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-gold-DEFAULT transition-colors text-xs">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Anacruses Associates Ltd. All rights reserved.</span>
          <span className="flex gap-4">
            <span>Company No. 14420827</span>
            <span>VAT No. 468 6796 17</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
