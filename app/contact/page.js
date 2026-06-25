export const metadata = {
  title: 'Contact — Book a Free ISO Consultation',
  description: 'Get in touch with Anacruses Associates Ltd. Book a free, no-obligation consultation with ISO consultant Rob Pragnell.',
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy-DEFAULT text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            All initial consultations are free and without obligation. Tell us about your business and we will tell you exactly what is involved.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mb-6">Send us a message</h2>
            {/* Netlify Forms: the name="contact" and data-netlify="true" handle submission automatically */}
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
              className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Do not fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                  <input type="text" name="name" required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company name *</label>
                  <input type="text" name="company" required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                  <input type="email" name="email" required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input type="tel" name="phone"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of enquiry *</label>
                <select name="enquiry_type" required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT bg-white">
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
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-navy-DEFAULT focus:ring-1 focus:ring-navy-DEFAULT resize-y" />
              </div>

              <button type="submit"
                className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-white font-semibold py-3 rounded transition-colors text-sm tracking-wide">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">We aim to respond within one business day.</p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="card border-t-4 border-t-gold-DEFAULT">
              <h3 className="font-bold text-navy-DEFAULT mb-3">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                {[
                  'We review your enquiry and respond within one business day.',
                  'We arrange a free 30-minute telephone or video call to discuss your requirements.',
                  'We provide a clear proposal — scope, timeline, and fixed price.',
                  'We agree a start date and get to work.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-navy-DEFAULT text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy-DEFAULT mb-3">Connect on LinkedIn</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Follow Anacruses on LinkedIn for ISO news, practical compliance tips, and regulatory updates.
              </p>
              <a href="https://lnkd.in/eZzbQZPv" target="_blank" rel="noopener noreferrer"
                 className="text-gold-DEFAULT text-sm font-semibold hover:text-gold-dark">
                Anacruses on LinkedIn →
              </a>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy-DEFAULT mb-3">Looking for training?</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Browse ISO training courses from ISOQAR Academy — from foundation level through to Lead Auditor qualification.
              </p>
              <a href="https://tidd.ly/4973Hxg" target="_blank" rel="noopener noreferrer"
                 className="text-gold-DEFAULT text-sm font-semibold hover:text-gold-dark">
                Browse training courses →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
