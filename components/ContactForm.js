'use client';

import { useEffect, useRef, useState } from 'react';

const RECAPTCHA_SITE_KEY = '6LfoNK0tAAAAAM_UJeRsKoKX1HkOSp4ATzNcXpVp';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactForm() {
  const recaptchaRef = useRef(null);
  const widgetId = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    function renderWidget() {
      if (cancelled) return;
      if (!recaptchaRef.current) return;
      if (recaptchaRef.current.childElementCount > 0) return; // already rendered
      if (!window.grecaptcha || !window.grecaptcha.render) return;
      try {
        widgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
        });
      } catch (err) {
        // Already rendered in this container — safe to ignore.
      }
    }

    function waitForGrecaptcha() {
      if (cancelled) return;
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(renderWidget);
      } else {
        setTimeout(waitForGrecaptcha, 100);
      }
    }

    if (!document.querySelector('script[data-recaptcha-loader="true"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-recaptcha-loader', 'true');
      document.body.appendChild(script);
    }

    waitForGrecaptcha();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (widgetId.current === null || !window.grecaptcha) {
      setError('The reCAPTCHA is still loading — please wait a moment and try again.');
      return;
    }

    const form = e.target;
    const recaptchaValue = window.grecaptcha.getResponse(widgetId.current);

    if (!recaptchaValue) {
      setError('Please complete the reCAPTCHA before sending your message.');
      return;
    }

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data['g-recaptcha-response'] = recaptchaValue;

    setSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });
      window.location.href = '/thank-you/';
    } catch (err) {
      setError('Something went wrong sending your message. Please try again or email us directly.');
      setSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
          <input type="text" name="name" required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company name *</label>
          <input type="text" name="company" required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
          <input type="email" name="email" required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <input type="tel" name="phone"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type of enquiry *</label>
        <select name="enquiry_type" required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy bg-white">
          <option value="">Please select…</option>
          <option>New ISO certification</option>
          <option>Maintenance of existing certification</option>
          <option>Integrated management system</option>
          <option>UKAS laboratory accreditation</option>
          <option>ISO training</option>
          <option>ISO 42001 — AI management</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your message</label>
        <textarea name="message" rows={5}
          placeholder="Tell us about your business and what you are hoping to achieve…"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-y" />
      </div>

      <div ref={recaptchaRef}></div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={submitting}
        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3 rounded transition-colors text-sm tracking-wide disabled:opacity-60">
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
      <p className="text-xs text-gray-400 text-center">We aim to respond within one business day.</p>
    </form>
  );
}
