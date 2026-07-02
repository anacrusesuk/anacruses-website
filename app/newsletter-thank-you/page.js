import Link from 'next/link';

export const metadata = {
  title: 'Welcome to the ISO Insights Newsletter | Anacruses',
  description: 'You\'re subscribed! Look for the first email in your inbox.',
};

export default function NewsletterThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        
        {/* Hero */}
        <div className="mb-12">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            You're subscribed!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Welcome to the ISO Insights Newsletter. You'll hear from us every fortnight with practical guidance on ISO certification, compliance, and management systems.
          </p>
        </div>

        {/* Next steps */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">What's Next</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl font-bold mr-4">1</div>
              <div>
                <h3 className="font-bold text-blue-950 mb-1">Check Your Inbox</h3>
                <p className="text-gray-700">Look for the first newsletter email. It should arrive within the next few minutes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl font-bold mr-4">2</div>
              <div>
                <h3 className="font-bold text-blue-950 mb-1">Read &amp; Click Through</h3>
                <p className="text-gray-700">Each newsletter has 3–4 articles on ISO, certification, and compliance. Click the ones that interest you.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl font-bold mr-4">3</div>
              <div>
                <h3 className="font-bold text-blue-950 mb-1">Reply or Get in Touch</h3>
                <p className="text-gray-700">Have a question? Reply to the newsletter or book a free consultation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Recent Insights</h2>
          <p className="text-gray-700 mb-6">
            In the meantime, explore some of our most popular articles:
          </p>
          <div className="space-y-3">
            <Link href="/insights/how-to-get-iso-27001-certified-uk" className="block bg-blue-50 p-4 rounded hover:bg-blue-100 transition">
              <p className="font-semibold text-blue-950">How to Get ISO 27001 Certified: UK SME Guide</p>
            </Link>
            <Link href="/insights/iso-9001-certification-cost-uk" className="block bg-blue-50 p-4 rounded hover:bg-blue-100 transition">
              <p className="font-semibold text-blue-950">ISO 9001 Certification Cost in the UK: Real Numbers</p>
            </Link>
            <Link href="/insights/iso-9001-vs-iso-27001-which-first" className="block bg-blue-50 p-4 rounded hover:bg-blue-100 transition">
              <p className="font-semibold text-blue-950">ISO 9001 or ISO 27001: Which Should You Pursue First?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-950 text-white rounded-lg p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Discuss Certification?</h2>
          <p className="text-blue-100 mb-6">
            If you want to move beyond reading and start planning, book a free 30-minute consultation.
          </p>
          <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
            Book a Free Call
          </Link>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-sm">
          <p>
            You're receiving this because you subscribed to the ISO Insights Newsletter. 
            <br />
            <Link href="/privacy/#unsubscribe" className="text-blue-950 hover:underline">Unsubscribe anytime</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
