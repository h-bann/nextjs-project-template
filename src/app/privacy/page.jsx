export const metadata = {
  title: "Privacy Policy - Your App",
  description: "Privacy policy and data protection information",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>

        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          create an account, update your profile, or contact us for support.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          privacy policy.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational security
          measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies and similar technologies to provide functionality,
          analyze usage, and improve our services. You can control cookie
          settings through your browser.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul>
          <li>Email: privacy@yourapp.com</li>
          <li>Address: Your Company Address</li>
        </ul>
      </div>
    </div>
  );
}
