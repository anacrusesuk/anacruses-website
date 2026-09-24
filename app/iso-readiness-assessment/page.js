'use client';

import { useState } from 'react';
import Link from 'next/link';

const SECTORS = [
  'Technology & SaaS',
  'Financial Services',
  'Manufacturing',
  'Construction',
  'Healthcare & Digital Health',
  'Laboratory Services & Testing',
  'Other',
];

const STANDARDS = [
  { code: '9001', label: 'ISO 9001 — Quality Management' },
  { code: '14001', label: 'ISO 14001 — Environmental Management' },
  { code: '27001', label: 'ISO 27001 — Information Security' },
  { code: '45001', label: 'ISO 45001 — Health & Safety' },
  { code: '42001', label: 'ISO 42001 — AI Management' },
  { code: '17025', label: 'ISO 17025 — Laboratory Testing & Calibration' },
  { code: 'not_sure', label: "Not sure which standard — just know we need something" },
];

const STATUS_OPTIONS = [
  { value: 'not_started', label: "We haven't started — no system in place yet" },
  { value: 'in_progress', label: "We've started building it, but aren't certified" },
  { value: 'certified_need_audit', label: "We're already certified and need our next audit" },
  { value: 'not_sure', label: "Not sure — that's part of what I want to find out" },
];

// Flat day rates by standard — 9001/14001/45001 (QHSE) vs 27001/42001 (information
// security / AI), which run higher given the specialist skill involved. ISO 17025
// (laboratory) sits above both, reflecting the technical specialism involved.
const QHSE_STANDARDS = ['9001', '14001', '45001'];
const INFOSEC_STANDARDS = ['27001', '42001'];
const LAB_STANDARDS = ['17025'];
const RATE_QHSE = 750;
const RATE_INFOSEC = 850;
const RATE_LAB = 950; // Confirmed 24 Sept 2026

// A lab audit takes longer with more sites — Rob's guidance is 0.5–1 extra day per
// additional site, hence a genuine range rather than a single figure for this tier.
function labAuditDayRange(labSites) {
  const extra = Math.max(0, labSites - 1);
  return { low: 4 + extra * 0.5, high: 4 + extra * 1 };
}

const TIERS = [
  { key: 1, label: 'Audit only', days: 4 },
  { key: 2, label: 'Implementation only', days: 15 },
  { key: 3, label: 'Implementation + audit', days: 19 },
  { key: 4, label: 'Integrated, multi-standard', days: 25 },
];

// Determines the applicable day rate from the standards actually selected. If any
// information-security/AI standard is involved, that rate applies — mixing in
// higher-value work moves the whole engagement to that rate, not just part of it.
function rateForStandards(standards) {
  const real = standards.filter((s) => s !== 'not_sure');
  if (real.length === 0) return null; // not sure — no rate can be shown yet
  const usesLab = real.some((s) => LAB_STANDARDS.includes(s));
  if (usesLab) return RATE_LAB;
  const usesInfosec = real.some((s) => INFOSEC_STANDARDS.includes(s));
  return usesInfosec ? RATE_INFOSEC : RATE_QHSE;
}

function money(days, rate) {
  const fmt = (n) => '£' + n.toLocaleString('en-GB');
  return fmt(days * rate);
}

// Builds the day-count and price labels shown for one tier, handling the lab
// audit-scaling range for tiers 1 and 3 (which include an audit component).
function tierDisplay(tier, result) {
  const fmt = (n) => '£' + n.toLocaleString('en-GB');
  if (!result.rate) {
    return { days: `${tier.days}+ days`, price: `${tier.days}+ days` };
  }
  if (result.isLab && (tier.key === 1 || tier.key === 3)) {
    const { low, high } = labAuditDayRange(result.labSites);
    const baseDays = tier.key === 3 ? 15 : 0; // Tier 3 adds the flat 15-day implementation
    const lowTotal = baseDays + low;
    const highTotal = baseDays + high;
    const daysLabel = low === high
      ? `${lowTotal}+ days at £${result.rate}/day`
      : `${lowTotal}–${highTotal}+ days at £${result.rate}/day`;
    const priceLabel = low === high
      ? money(lowTotal, result.rate)
      : `${fmt(lowTotal * result.rate)}–${fmt(highTotal * result.rate)}`;
    return { days: daysLabel, price: priceLabel };
  }
  return {
    days: `${tier.days}+ days at £${result.rate}/day`,
    price: money(tier.days, result.rate),
  };
}

function suggestedTierKey(standards, status) {
  const realStandards = standards.filter((s) => s !== 'not_sure');
  if (realStandards.length > 1) return 4;
  if (status === 'certified_need_audit') return 1;
  if (status === 'in_progress') return 2;
  if (status === 'not_started') return 3;
  return null; // not sure — no single suggestion
}

const QA_QUESTIONS = [
  { id: 'driver', label: "What's driving this right now — a client, a tender, a partner request, or something else?" },
  { id: 'concern', label: "What's your biggest concern about the certification process, if any?" },
  { id: 'timeline', label: 'Is there a deadline you\u2019re working to?' },
];

export default function IsoReadinessAssessment() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState('');
  const [standards, setStandards] = useState([]);
  const [labSites, setLabSites] = useState(1);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const [qaAnswers, setQaAnswers] = useState({});
  const [qaSubmitted, setQaSubmitted] = useState(false);
  const [qaSubmitting, setQaSubmitting] = useState(false);
  const [qaSkipped, setQaSkipped] = useState(false);

  function toggleStandard(code) {
    setStandards((prev) =>
      prev.includes(code) ? prev.filter((s) => s !== code) : [...prev, code]
    );
  }

  function canProceedFromStep(n) {
    if (n === 1) return !!sector;
    if (n === 2) return standards.length > 0;
    if (n === 3) return !!status;
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setError('Please enter a valid work email address.');
      return;
    }

    const suggested = suggestedTierKey(standards, status);
    const rate = rateForStandards(standards);
    setSubmitting(true);

    try {
      const res = await fetch('/.netlify/functions/iso-readiness-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          sector,
          standards,
          status,
          suggestedTier: suggested,
          labSites: standards.includes('17025') ? labSites : null,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Unknown error');
      setResult({ suggested, rate, isLab: standards.includes('17025'), labSites });
      setStep(5);
    } catch (err) {
      setError('Something went wrong — please try again, or email rob.pragnell@anacruses.co.uk directly.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleQaSubmit(e) {
    e.preventDefault();
    setQaSubmitting(true);
    try {
      await fetch('/.netlify/functions/iso-readiness-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          company,
          followUp: true,
          qaAnswers,
        }),
      });
    } catch (err) {
      // Follow-up is a bonus, not essential — fail quietly.
    } finally {
      setQaSubmitting(false);
      setQaSubmitted(true);
    }
  }

  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Free Tool</p>
          <h1 className="text-4xl font-bold mb-4 max-w-2xl">ISO Readiness &amp; Cost Estimator</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Four quick questions. A rough day-count and cost for your certification, worked out
            the same way we scope every real engagement — refined on a call, not a sales pitch.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          {step <= 4 && (
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-gold' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-1">What sector is your business in?</h2>
              <p className="text-gray-500 text-sm mb-6">This tells us which standards matter most for you.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SECTORS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSector(s)}
                    className={`text-left px-4 py-3 rounded border text-sm font-medium transition-colors ${
                      sector === s
                        ? 'border-gold bg-mist text-navy'
                        : 'border-gray-200 text-slate hover:border-gold'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  disabled={!canProceedFromStep(1)}
                  onClick={() => setStep(2)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-1">Which standard(s) do you need?</h2>
              <p className="text-gray-500 text-sm mb-6">Select all that apply — a client, tender or partner will often name the one that matters.</p>
              <div className="space-y-2">
                {STANDARDS.map((s) => (
                  <label
                    key={s.code}
                    className={`flex items-center gap-3 px-4 py-3 rounded border text-sm font-medium cursor-pointer transition-colors ${
                      standards.includes(s.code)
                        ? 'border-gold bg-mist text-navy'
                        : 'border-gray-200 text-slate hover:border-gold'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={standards.includes(s.code)}
                      onChange={() => toggleStandard(s.code)}
                      className="accent-gold"
                    />
                    {s.label}
                  </label>
                ))}
              </div>

              {standards.includes('17025') && (
                <div className="mt-4 px-4 py-3 rounded border border-gold bg-mist">
                  <label className="block text-sm font-medium text-navy mb-1">
                    How many lab sites or locations does this cover?
                  </label>
                  <p className="text-gray-500 text-xs mb-2">A lab audit takes a bit longer with more sites — this refines your estimate.</p>
                  <input
                    type="number"
                    min={1}
                    value={labSites}
                    onChange={(e) => setLabSites(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-24 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="text-navy text-sm font-medium hover:underline">
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!canProceedFromStep(2)}
                  onClick={() => setStep(3)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-1">Where are you starting from?</h2>
              <p className="text-gray-500 text-sm mb-6">Be honest — this only sharpens the estimate, it doesn't disqualify you from anything.</p>
              <div className="space-y-2">
                {STATUS_OPTIONS.map((s) => (
                  <label
                    key={s.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded border text-sm font-medium cursor-pointer transition-colors ${
                      status === s.value
                        ? 'border-gold bg-mist text-navy'
                        : 'border-gray-200 text-slate hover:border-gold'
                    }`}
                  >
                    <input
                      type="radio"
                      name="status"
                      checked={status === s.value}
                      onChange={() => setStatus(s.value)}
                      className="accent-gold"
                    />
                    {s.label}
                  </label>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="text-navy text-sm font-medium hover:underline">
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!canProceedFromStep(3)}
                  onClick={() => setStep(4)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleSubmit} className="card" noValidate>
              <h2 className="text-xl font-bold text-navy mb-1">Where should we send your estimate?</h2>
              <p className="text-gray-500 text-sm mb-6">Your rough day-count and cost, worked out from your answers — sent immediately.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    First name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Company <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Ltd"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Work email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourcompany.co.uk"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}

                <button type="submit" disabled={submitting} className="btn-primary w-full text-center disabled:opacity-60">
                  {submitting ? 'Working it out…' : 'Show my estimate →'}
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                By submitting you agree to receive emails from Anacruses Associates Ltd.
                Your data is held securely and never shared with third parties.
                You can unsubscribe at any time.
              </p>

              <div className="mt-6 flex justify-start">
                <button type="button" onClick={() => setStep(3)} className="text-navy text-sm font-medium hover:underline">
                  ← Back
                </button>
              </div>
            </form>
          )}

          {step === 5 && result && (
            <div>
              <div className="card border-t-4 border-t-gold mb-6">
                <h2 className="text-xl font-bold text-navy mb-1">
                  ✓ Your estimate is on its way to your inbox
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  {result.rate
                    ? "Here's the same figures, right on the page — refined properly once we actually talk."
                    : "Since you weren't sure which standard applies yet, here's the day count for each tier — exact cost depends on which standard it turns out to be."}
                </p>

                <div className="space-y-3">
                  {TIERS.map((t) => {
                    const display = tierDisplay(t, result);
                    return (
                      <div
                        key={t.key}
                        className={`flex items-center justify-between px-4 py-3 rounded border ${
                          result.suggested === t.key ? 'border-gold bg-mist' : 'border-gray-200'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-navy text-sm">
                            {t.label}
                            {result.suggested === t.key && (
                              <span className="ml-2 text-gold text-xs font-semibold uppercase tracking-wide">
                                Likely fit
                              </span>
                            )}
                          </p>
                          <p className="text-gray-500 text-xs">{display.days}</p>
                        </div>
                        <p className="font-bold text-navy text-sm whitespace-nowrap ml-4">
                          {display.price}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {result.isLab && (
                  <div className="mt-3 px-4 py-3 rounded border border-gray-200 bg-mist">
                    <p className="font-bold text-navy text-sm">Witnessed assessments</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Priced individually, based on the number of labs, test methods and
                      individuals involved — this varies too much to estimate here.
                      We'll work this out together on the call.
                    </p>
                  </div>
                )}

                {result.suggested === null && (
                  <p className="text-sm text-gray-600 mt-4">
                    Based on what you've told us, it's genuinely hard to say which of these fits without
                    talking it through — that's completely normal, and exactly what the call below is for.
                  </p>
                )}

                <div className="mt-6">
                  <Link href="/contact" className="btn-primary inline-block">
                    Book a free call to confirm this →
                  </Link>
                </div>
              </div>

              {!qaSubmitted && !qaSkipped && (
                <div className="card border-t-4 border-t-navy">
                  <h3 className="text-lg font-bold text-navy mb-1">A few optional extra details</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Entirely optional — but the more Rob knows before your call, the less time you'll spend
                    explaining and the more time you'll spend getting answers.
                  </p>
                  <form onSubmit={handleQaSubmit} className="space-y-4">
                    {QA_QUESTIONS.map((q) => (
                      <div key={q.id}>
                        <label className="block text-sm font-medium text-navy mb-1">{q.label}</label>
                        <textarea
                          value={qaAnswers[q.id] || ''}
                          onChange={(e) => setQaAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                          rows={2}
                          className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-4">
                      <button type="submit" disabled={qaSubmitting} className="btn-primary disabled:opacity-60">
                        {qaSubmitting ? 'Sending…' : 'Send these details'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setQaSkipped(true)}
                        className="text-navy text-sm font-medium hover:underline"
                      >
                        Skip this
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {qaSubmitted && (
                <div className="card border-t-4 border-t-navy">
                  <p className="text-sm text-gray-600">
                    ✓ Thanks — that's been added to your enquiry. Rob will have it before your call.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
