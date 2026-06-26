'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('anacruses_cookie_consent');
    if (!consent) setVisible(true);
    if (consent === 'accepted') enableAnalytics();
  }, []);

  function enableAnalytics() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }

  function accept() {
    localStorage.setItem('anacruses_cookie_consent', 'accepted');
    enableAnalytics();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('anacruses_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#1a2e44',
      borderTop: '3px solid #B8860B',
      padding: '16px 24px',
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, maxWidth: '680px', lineHeight: '1.5' }}>
          We use cookies to understand how visitors use our site (Google Analytics) and to remember your newsletter preferences.
          See our{' '}
          <Link href="/privacy" style={{ color: '#B8860B', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              background: 'transparent',
              border: '1px solid #64748b',
              color: '#94a3b8',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              background: '#B8860B',
              border: 'none',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
}
