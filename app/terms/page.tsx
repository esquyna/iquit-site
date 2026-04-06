import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'iQuit Terms of Use — rules and guidelines for using the iQuit app and website.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Terms of Use</h1>
          <p className="text-teal-100">Last updated: April 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12">
          <Section title="1. Acceptance of Terms">
            <p>By downloading or using iQuit, you agree to be bound by these Terms of Use. If you do not agree, please do not use the app.</p>
          </Section>

          <Section title="2. Use of the App">
            <p>iQuit is a wellness and habit-tracking tool. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a healthcare professional before making changes to your health routine.</p>
            <p>You agree to use iQuit only for lawful purposes and in a manner consistent with all applicable laws and regulations.</p>
          </Section>

          <Section title="3. In-App Purchases">
            <p>iQuit offers optional premium features through in-app purchases. All purchases are processed through Apple App Store or Google Play Store and are subject to their respective terms.</p>
            <p>Subscription fees are charged to your store account at confirmation of purchase. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content, features, and functionality of iQuit — including text, graphics, logos, and software — are owned by Esquyna and protected by intellectual property laws.</p>
          </Section>

          <Section title="5. Disclaimer of Warranties">
            <p>iQuit is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or that it will help you quit smoking.</p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>To the fullest extent permitted by law, Esquyna shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of iQuit.</p>
          </Section>

          <Section title="7. Changes to Terms">
            <p>We may update these terms from time to time. Continued use of iQuit after changes constitutes acceptance of the updated terms.</p>
          </Section>

          <Section title="8. Contact">
            <p>Questions? Email <a href="mailto:hello@iquitapp.com" className="text-teal-600 hover:underline">hello@iquitapp.com</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
