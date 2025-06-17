export const metadata = {
  title: "Terms of Service - Your App",
  description: "Terms of service and usage agreement",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Terms of Service</h1>

        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the
          materials on this website for personal, non-commercial transitory
          viewing only.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on this website are provided on an 'as is' basis. We
          make no warranties, expressed or implied, and hereby disclaim and
          negate all other warranties including without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall our company or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on this website.
        </p>

        <h2>5. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
        </p>
        <ul>
          <li>Email: legal@yourapp.com</li>
          <li>Address: Your Company Address</li>
        </ul>
      </div>
    </div>
  );
}
