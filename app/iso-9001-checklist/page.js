import Link from 'next/link';

export const metadata = {
  title: 'Free ISO 9001 Certification Checklist for UK SMEs | Anacruses',
  description: 'Download the free ISO 9001 Certification Checklist — everything a UK business needs to verify before its Stage 2 quality management audit. Written by a CQI/IRCA certified Lead Auditor.',
};

export default function ISO9001Checklist() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Free Resource</p>
          <h1 className="text-4xl font-bold mb-4 max-w-2xl">ISO 9001 Certification Checklist for UK SMEs</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Everything your business needs to verify before the Stage 2 certification audit —
            written by a CQI/IRCA certified Lead Auditor with 20+ years of ISO 9001 experience.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">What the checklist covers</h2>
            <div className="space-y-4">
              {[
                { title: 'Context, scope and leadership', body: 'Confirm your QMS scope is documented correctly, your quality policy is approved and communicated, and top management can demonstrate genuine involvement — not just a signed policy on the wall.' },
                { title: 'Planning and risk management', body: 'Every item your auditor will check around quality objectives, risk and opportunity identification, and change management.' },
                { title: 'Documentation and records', body: 'The specific documents ISO 9001:2015 requires — including what is mandatory and what is discretionary based on your organisation\'s size and complexity.' },
                { title: 'Internal audit requirements', body: 'What a rigorous internal audit looks like and how to ensure it tests effectiveness, not just the existence of documents.' },
                { title: 'The five most common Stage 2 failure reasons', body: 'From 20+ years of conducting and supporting ISO 9001 audits — the specific gaps that cause businesses to fail or receive major nonconformities.' },
              ].map(item => (
                <div key={item.title} className="card border-l-4 border-l-gold">
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-mist rounded-lg">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-navy">Already read our ISO 9001 guide?</strong>{' '}
                This checklist is the practical companion — use it to verify your readiness at each stage.{' '}
                <Link href="/insights/iso-9001-certification-uk-sme-guide" className="text-gold hover:underline">Read the complete guide →</Link>
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
            var res = await fetch('/.netlify/functions/iso9001-download', {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: email, name: name }),
            });
            var data = await res.json();
            if (data.success) { window.location.href = '/iso-9001-thank-you'; }
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
