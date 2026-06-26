import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Anacruses Associates Ltd',
  description: 'Privacy policy for Anacruses Associates Ltd. How we collect, use and protect your personal data.',
};

export default function Privacy() {
  return (
    <>
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-sm">Last updated: 26 June 2026</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 prose prose-navy text-gray-700 text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Who we are</h2>
            <p>Anacruses Associates Ltd (Company No. 14420827, VAT No. 468 6796 17) is an ISO management systems consultancy based in Hertfordshire, UK. We are the data controller for personal data collected through this website.</p>
            <p className="mt-2">Contact: <a href="mailto:rob.pragnell@anacruses.co.uk" className="text-gold hover:underline">rob.pragnell@anacruses.co.uk</a> &nbsp;|&nbsp; <a href="tel:07792259840" className="text-gold hover:underline">07792 259840</a></p>
            <p className="mt-2">We are registered with the Information Commissioner&apos;s Office (ICO).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">What data we collect and why</h2>

            <h3 className="font-bold text-navy mt-4 mb-2">Contact form</h3>
            <p>When you submit our contact form, we collect your name, email address, and the content of your message. We use this to respond to your enquiry. The legal basis is our legitimate interest in responding to business enquiries. Data is processed by Netlify (our hosting provider) and stored in accordance with their data processing terms.</p>

            <h3 className="font-bold text-navy mt-4 mb-2">Newsletter subscription</h3>
            <p>When you sign up for our newsletter, we collect your email address. We use this to send you periodic ISO Insights emails. The legal basis is your consent. Your data is stored by Brevo (formerly Sendinblue), our email marketing platform, which is based in the EU and processes data in accordance with GDPR. You can unsubscribe at any time using the link in any email we send.</p>

            <h3 className="font-bold text-navy mt-4 mb-2">Website analytics</h3>
            <p>We use Google Analytics 4 to understand how visitors use our website. This collects anonymised data about pages visited, time on site, and traffic sources. Google Analytics uses cookies. The legal basis is your consent, which you can manage via our cookie settings. Google may transfer data to the United States — this is covered by Google&apos;s Standard Contractual Clauses.</p>

            <h3 className="font-bold text-navy mt-4 mb-2">Sales pipeline and lead generation</h3>
            <p>We use automated tools to identify businesses that may benefit from ISO consultancy services, using publicly available information. Where we contact businesses, we do so on the basis of legitimate interest. We do not collect or store personal data about individuals without their knowledge in any system that is not required to be disclosed under data protection law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">How long we keep your data</h2>
            <p>Contact form enquiries: up to 2 years from last contact, or until you ask us to delete it.</p>
            <p className="mt-2">Newsletter: until you unsubscribe, at which point your email is removed from our active list within 10 days.</p>
            <p className="mt-2">Analytics data: 14 months (Google Analytics default retention period).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Who we share your data with</h2>
            <p>We do not sell your personal data. We share data only with the following processors, each bound by data processing agreements:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Netlify, Inc. — website hosting and form processing (US, covered by SCCs)</li>
              <li>Brevo SAS — email marketing platform (EU)</li>
              <li>Google LLC — analytics (US, covered by SCCs)</li>
              <li>Anthropic, PBC — AI-assisted content generation (US, covered by SCCs)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Object to processing based on legitimate interest</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with the ICO at ico.org.uk</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:rob.pragnell@anacruses.co.uk" className="text-gold hover:underline">rob.pragnell@anacruses.co.uk</a>. We will respond within one calendar month.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Cookies</h2>
            <p>We use the following cookies:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Google Analytics (_ga, _ga_*):</strong> Analytics cookies — set only with your consent</li>
              <li><strong>Brevo (sib_cuid):</strong> Set when you interact with our newsletter signup form</li>
              <li><strong>Cookie consent (anacruses_cookie_consent):</strong> Remembers your cookie preferences</li>
            </ul>
            <p className="mt-3">You can manage your cookie preferences at any time using the cookie settings link in the footer.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Changes to this policy</h2>
            <p>We may update this policy from time to time. The date at the top of this page shows when it was last updated. Significant changes will be notified to newsletter subscribers.</p>
          </div>

          <div className="mt-8 p-5 bg-mist rounded-lg border-l-4 border-gold">
            <p className="font-bold text-navy mb-2">Questions about your data?</p>
            <p className="text-gray-600 text-sm mb-3">Contact Rob Pragnell directly — we take data privacy seriously, not least because we advise clients on ISO 27001 information security management.</p>
            <Link href="/contact" className="btn-primary inline-block text-sm">Get in touch</Link>
          </div>

        </div>
      </section>
    </>
  );
}
