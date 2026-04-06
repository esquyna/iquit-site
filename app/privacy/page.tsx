import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'iQuit Privacy Policy — how we collect, use, and protect your data.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-teal-100">Last updated: April 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12">
          <Section title="1. Information We Collect">
            <p>iQuit collects information you provide directly, such as your quit date, smoking history, and in-app activity. We do not require account registration for basic features.</p>
            <p>We may collect anonymized usage data (e.g., feature usage frequency) to improve the app. This data cannot be used to identify you personally.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>Your data is used exclusively to power the app experience — tracking your smoke-free progress, calculating health milestones, and personalizing craving support.</p>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="3. Data Storage">
            <p>Your personal data is stored locally on your device. Cloud sync, if enabled, uses industry-standard encryption in transit and at rest.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>iQuit uses Firebase (Google) for analytics and crash reporting, and RevenueCat for in-app purchase management. These services have their own privacy policies and may collect anonymized data per their terms.</p>
          </Section>

          <Section title="5. Children's Privacy">
            <p>iQuit is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal information, please contact us.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You may request deletion of your data at any time by contacting us. For EU/UK residents, you have rights under GDPR including access, rectification, erasure, and portability.</p>
          </Section>

          <Section title="7. Contact">
            <p>Questions about this policy? Email us at <a href="mailto:privacy@iquitapp.com" className="text-teal-600 hover:underline">privacy@iquitapp.com</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
