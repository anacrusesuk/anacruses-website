export const metadata = {
  title: 'Thank You — Anacruses Associates Ltd',
  description: 'Thank you for your enquiry. We will be in touch within one business day.',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-navy mb-4">Thank you for getting in touch</h1>
        <p className="text-lg text-gray-600 mb-8">
          We have received your enquiry and will respond within one business day. If your matter is urgent, call us directly on{' '}
          <a href="tel:07792259840" className="text-gold font-semibold hover:text-gold-dark">07792 259840</a>.
        </p>
        <div className="card border-t-4 border-t-gold text-left mb-8">
          <h2 className="font-bold text-navy mb-3">What happens next?</h2>
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
        <a href="/" className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold py-3 px-8 rounded transition-colors text-sm tracking-wide">
          Back to home
        </a>
      </div>
    </section>
  );
}
