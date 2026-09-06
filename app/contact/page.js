import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact — Book a Free ISO Consultation',
  description: 'Get in touch with Anacruses Associates Ltd. Book a free, no-obligation consultation with ISO consultant Rob Pragnell.',
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            All initial consultations are free and without obligation. Tell us about your business and we will tell you exactly what is involved.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-3">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                {[
                  'We review your enquiry and respond within one business day.',
                  'We arrange a free 30-minute telephone or video call to discuss your requirements.',
                  'We provide a clear proposal — scope, timeline, and fixed price.',
                  'We agree a start date and get to work.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-3">Connect on LinkedIn</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Follow Anacruses on LinkedIn for ISO news, practical compliance tips, and regulatory updates.
              </p>
              <a href="https://lnkd.in/eZzbQZPv" target="_blank" rel="noopener noreferrer"
                 className="text-gold text-sm font-semibold hover:text-gold-dark">
                Anacruses on LinkedIn →
              </a>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-3">Looking for training?</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Browse ISO training courses from ISOQAR Academy — from foundation level through to Lead Auditor qualification.
              </p>
              <a href="https://tidd.ly/4973Hxg" target="_blank" rel="noopener noreferrer"
                 className="text-gold text-sm font-semibold hover:text-gold-dark">
                Browse training courses →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
