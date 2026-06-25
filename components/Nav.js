'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  { label: 'ISO 9001 — Quality',              href: '/services/iso-9001' },
  { label: 'ISO 14001 — Environmental',        href: '/services/iso-14001' },
  { label: 'ISO 27001 — Information Security', href: '/services/iso-27001' },
  { label: 'ISO 45001 — Health & Safety',      href: '/services/iso-45001' },
  { label: 'ISO 42001 — AI Management',        href: '/services/iso-42001' },
  { label: 'UKAS Laboratory Accreditation',    href: '/services/ukas-laboratory' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking anywhere outside it
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-28">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Anacruses Associates Ltd" className="h-24 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>

          {/* Services dropdown — click to open, click outside to close */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-gold transition-colors focus:outline-none"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 w-72 py-2 z-50">
                {services.map(s => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-3 text-slate hover:bg-mist hover:text-navy text-sm transition-colors border-b border-gray-50 last:border-0"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about"    className="hover:text-gold transition-colors">About</Link>
          <Link href="/sectors"  className="hover:text-gold transition-colors">Sectors</Link>
          <Link href="/training" className="hover:text-gold transition-colors">Training</Link>
          <Link href="/news"     className="hover:text-gold transition-colors">News</Link>
          <Link href="/contact"  className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light px-4 py-4 space-y-3 text-sm font-medium text-white">
          <Link href="/"         className="block hover:text-gold" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="font-semibold text-gold text-xs uppercase tracking-wider pt-2">Services</div>
          {services.map(s => (
            <Link key={s.href} href={s.href} className="block pl-3 hover:text-gold" onClick={() => setMobileOpen(false)}>
              {s.label}
            </Link>
          ))}
          <Link href="/about"    className="block hover:text-gold" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/sectors"  className="block hover:text-gold" onClick={() => setMobileOpen(false)}>Sectors</Link>
          <Link href="/training" className="block hover:text-gold" onClick={() => setMobileOpen(false)}>Training</Link>
          <Link href="/news"     className="block hover:text-gold" onClick={() => setMobileOpen(false)}>News</Link>
          <Link href="/contact"  className="block bg-gold px-4 py-2 rounded text-center" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
