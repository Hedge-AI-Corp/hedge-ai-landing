import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: January 30, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              At HedgeAI, we take your privacy seriously. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">2.1 Personal Information</h3>
                <p className="text-gray-600 mb-2">We may collect the following personal information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Billing and payment information</li>
                  <li>User account credentials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">2.2 Usage Information</h3>
                <p className="text-gray-600 mb-2">We automatically collect certain information about your device, including:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your transactions</li>
              <li>To send you important updates and notifications</li>
              <li>To improve our services and user experience</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>With service providers who assist in operating our services</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transaction or sale</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to collect and track information about 
              your browsing behavior. You can control cookie preferences through your browser settings.
            </p>
          </section>

          

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about our Privacy Policy, please contact us at:
            </p>
            <div className="text-gray-600">
              <p>Privacy Officer</p>
              <p>Email: aydin@aydinjoshi.com</p>
              <p>Phone: (216) 307-6020</p>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Footer Section */}
      <div className="text-center text-sm text-gray-500">
        <p>
          This privacy policy was last updated on January 30, 2025. 
          We may update this policy from time to time, and will notify you of any material changes.
        </p>
      </div>
    </div>
  )
}