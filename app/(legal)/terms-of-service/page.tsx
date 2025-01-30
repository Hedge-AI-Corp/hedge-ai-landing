import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600">Last updated: January 30, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to HedgeAI. By accessing or using our services, 
              you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using our services, you acknowledge that you have read, 
              understood, and agree to be bound by these terms.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to provide accurate and complete information</li>
            </ul>
          </section>



          {/* User Rights and Responsibilities */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. User Rights and Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">3.1 Account Creation</h3>
                <p className="text-gray-600">
                  When creating an account, you must provide accurate, complete, and current 
                  information. You are responsible for all activities that occur under your account.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">3.2 Prohibited Activities</h3>
                <p className="text-gray-600">Users may not:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Distribute malicious software</li>
                  <li>Engage in unauthorized data collection</li>
                </ul>
              </div>
            </div>
          </section>



          {/* Privacy and Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4">
              Our Privacy Policy explains how we collect, use, and protect your personal information. 
              By using our services, you agree to our data practices as described in the Privacy Policy.
            </p>
          </section>



          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, features, and functionality of our services are owned by us or our licensors 
              and are protected by intellectual property laws.
            </p>
          </section>



          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to terminate or suspend your account and access to our services 
              at our sole discretion, without notice, for any reason.
            </p>
          </section>



          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: aydin@aydinjoshi.com</p>
              <p>Phone: (216)307-6020</p>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Footer Section */}
      <div className="text-center text-sm text-gray-500">
        <p>
          These terms of service were last updated on January 30, 2025. 
          We reserve the right to update these terms at any time.
        </p>
      </div>
    </div>
  )
}