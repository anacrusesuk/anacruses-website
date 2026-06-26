import Link from 'next/link';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.013 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'3rem'}}>

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
              ['Sectors We Work With', '/sectors'],
              ['ISO Insights', '/insights'],
              ['Resources & Newsletter', '/resources'],
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
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-3">Get in Touch</div>
          <div className="text-gray-300 space-y-3 mb-5">
            <a href="tel:07792259840" className="flex items-center gap-2 hover:text-gold transition-colors text-sm">
              <span className="text-gold text-base">📞</span> 07792 259840
            </a>
            <a href="mailto:assurance@anacruses.co.uk" className="flex items-center gap-2 hover:text-gold transition-colors text-sm">
              <span className="text-gold text-base">✉</span> assurance@anacruses.co.uk
            </a>
            <Link href="/contact" className="inline-block mt-1 text-gold hover:text-white text-sm font-semibold transition-colors">
              Book a free consultation →
            </Link>
          </div>
          <div className="font-semibold text-gold uppercase tracking-wider text-xs mb-3">Follow us</div>
          <div className="flex gap-5 items-center">
            <a href="https://lnkd.in/eZzbQZPv" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com/AnacrusesUK" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gold transition-colors" aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="https://www.facebook.com/AnacrusesAssociates" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/anacrusesassociateslimited" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="border-t border-navy-light bg-navy">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left — copy */}
            <div>
              <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-3">Free newsletter</p>
              <h3 className="font-bold text-white text-2xl mb-3 leading-snug">
                ISO Insights — straight to your inbox
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Practical guidance from a working CQI Lead Auditor. What certification actually costs,
                how long it takes, and what auditors look for — sent fortnightly. No spam, ever.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'ISO standards updates — from someone who sits on the committees',
                  'Practical certification guidance — real answers, not sales pitches',
                  'AI governance and ISO 42001 — the standard most businesses need to know',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Brevo signup form */}
            <div className="bg-white rounded-lg p-6">
              <p className="font-bold text-navy text-lg mb-1">Join the list</p>
              <p className="text-gray-500 text-xs mb-4">Free. Unsubscribe any time. No spam.</p>
              <iframe
                src="https://b063a5c1.sibforms.com/serve/MUIFAPGvQY5DN6LOdavajVvyLw4R1MXk_AIA_f-IdW0tmuA8kf5yEURjcB1QlFcgauY8lW7MAgjWIPwfx8315ujTtFrwl6NjI6gGvziVhBZxANAIrkii_YhF4kpUsxN369YhJ5mgMwtnpPgclTmhIUXtzOOHB22zSj0ObwBdTNGfdpI_G52yZ96eUmyFMDQRkS_yqdJfSygUsV-ZWg=="
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                style={{
                  display: 'block',
                  width: '100%',
                  minHeight: '160px',
                  border: 'none',
                }}
                title="Newsletter signup"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Accreditation logos */}
      <div className="border-t border-navy-light">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap items-center justify-center md:justify-start gap-6">
          <img src="/images/ico.jpg" alt="ICO — Information Commissioner's Office"
               className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          <img src="/images/ian-network.jpg" alt="ISOQAR Associate Network Member"
               className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          <img src="/images/chartered-college.png" alt="Chartered College of Teaching"
               className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Anacruses Associates Ltd. All rights reserved.</span>
          <span className="flex gap-4">
            <span>Co. No. 14420827</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span>VAT No. 468 6796 17</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
