import Link from 'next/link';

export const metadata = {
  title: 'Free ISO 45001 Certification Checklist for UK Businesses | Anacruses',
  description: 'Download the free ISO 45001 Certification Checklist — everything a UK business needs to verify before its Stage 2 health and safety audit. Written by a CQI/IRCA certified Lead Auditor.',
};

export default function ISO45001Checklist() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Free Resource</p>
          <h1 className="text-4xl font-bold mb-4 max-w-2xl">ISO 45001 Certification Checklist for UK Businesses</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Everything your business needs to verify before the Stage 2 certification audit —
            written by a CQI/IRCA certified Lead Auditor with 20+ years of occupational health and safety management experience.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">What the checklist covers</h2>
            <div className="space-y-4">
              {[
                { title: 'Context, scope and leadership', body: 'Confirm your OHSMS scope is documented correctly, your OH&S policy includes the required commitments, and top management can demonstrate active involvement — a requirement that ISO 45001 makes significantly more explicit than OHSAS 18001.' },
                { title: 'Worker participation and consultation', body: 'One of the most distinctive requirements of ISO 45001. Evidence that workers are genuinely involved in hazard identification, risk assessment, and incident investigation — not just informed after the fact.' },
                { title: 'Hazard identification and legal compliance', body: 'Every item your auditor will check around risk assessments, the legal register, and — critically — evidence that you have evaluated compliance against each applicable requirement, not just listed the legislation.' },
                { title: 'Internal audit requirements', body: 'What a rigorous OH&S internal audit looks like, including the risk-based audit programme that ISO 45001 requires.' },
                { title: 'The five most common Stage 2 failure reasons', body: 'From 20+ years of conducting and supporting ISO 45001 audits — the specific gaps that cause businesses to fail or receive major nonconformities.' },
              ].map(item => (
                <div key={item.title} className="card border-l-4 border-l-gold">
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-mist rounded-lg">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-navy">Transitioning from OHSAS 18001?</strong>{' '}
                The checklist covers the ISO 45001-specific requirements that OHSAS 18001 did not explicitly address — including worker participation and legal compliance evaluation.{' '}
                <Link href="/insights/iso-45001-vs-ohsas-18001-uk" className="text-gold hover:underline">Read our OHSAS 18001 vs ISO 45001 guide →</Link>
              </p>
            </div>
          </div>

          <div>
            <div className="card border-t-4 border-t-gold">
              <h2 className="text-xl font-bold text-navy mb-1">Get the free checklist</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your details below. The PDF will be emailed to you immediately.</p>
              <form id="checklist-form" noValidate>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">First name <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input type="text" id="name" name="name" placeholder="e.g. Sarah" className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Work email address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" placeholder="you@yourcompany.co.uk" required className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold" />
                  </div>
                  <button type="submit" id="submit-btn" className="btn-primary w-full text-center">Send me the checklist →</button>
                  <p id="form-error" className="text-red-500 text-xs hidden">Please enter a valid email address.</p>
                  <p id="form-success" className="text-green-600 text-sm font-medium hidden">✓ Check your inbox — the checklist is on its way.</p>
                </div>
              </form>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">By submitting you agree to receive emails from Anacruses Associates Ltd. Your data is held securely and never shared with third parties. You can unsubscribe at any time.</p>
            </div>

            <div className="card border-t-4 border-t-navy mt-5">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/rob.jpg" alt="Rob Pragnell" className="w-12 h-12 rounded-full object-cover object-center border-2 border-gold" />
                <div>
                  <p className="font-bold text-navy text-sm">Rob Pragnell</p>
                  <p className="text-gray-500 text-xs">CQI/IRCA Lead Auditor · 20+ years</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">CQI &amp; TRECCERT certified Lead Auditor across ISO 9001, 14001, 27001, 45001 &amp; 42001. Every Anacruses client works directly with Rob — not a junior consultant.</p>
              <Link href="/about" className="text-gold text-xs hover:underline mt-2 inline-block">Full biography →</Link>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById('checklist-form').addEventListener('submit', async function(e) {
          e.preventDefault();
          var email = document.getElementById('email').value.trim();
          var name  = document.getElementById('name').value.trim();
          var errEl = document.getElementById('form-error');
          var btn   = document.getElementById('submit-btn');
          errEl.classList.add('hidden');
          if (!email || !email.includes('@')) { errEl.classList.remove('hidden'); return; }
          btn.disabled = true; btn.textContent = 'Sending…';
          try {
            var res = await fetch('/.netlify/functions/iso45001-download', {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: email, name: name }),
            });
            var data = await res.json();
            if (data.success) { window.location.href = '/iso-45001-thank-you'; }
            else { throw new Error(data.error || 'Unknown error'); }
          } catch (err) {
            btn.disabled = false; btn.textContent = 'Send me the checklist →';
            errEl.textContent = 'Something went wrong — please try again or email rob.pragnell@anacruses.co.uk directly.';
            errEl.classList.remove('hidden');
          }
        });
      `}} />
    </>
  );
}
