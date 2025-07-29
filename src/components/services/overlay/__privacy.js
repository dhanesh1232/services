import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        <em>Last Updated: [Date]</em>
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          {`ECODrIx ("we," "us," or "our") operates AI-powered SaaS services,
          including chatbot automation, AI ads, landing page builders, and SEO
          automation. This Privacy Policy explains how we collect, use, and
          protect your personal data when you use our services.`}
        </p>
      </section>

      <section>
        <h2>2. Data We Collect</h2>
        <p>We collect the following information:</p>
        <ul>
          <li>
            <strong>Account Data:</strong> Name, email, company details.
          </li>
          <li>
            <strong>Billing Data:</strong> Payment details (processed via
            Razorpay), tax IDs.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, device info, interactions
            with our services.
          </li>
          <li>
            <strong>AI-Generated Data:</strong> Inputs/outputs from AI tools
            (e.g., chatbot queries).
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To deliver and improve our services.</li>
          <li>To process payments and prevent fraud.</li>
          <li>
            For analytics (e.g., via Google Analytics) to optimize performance.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <p>We only share data with trusted third parties:</p>
        <ul>
          <li>
            <strong>Payment Processors:</strong> Razorpay (for billing).
          </li>
          <li>
            <strong>AI Providers:</strong> OpenAI (for chatbot/AI features).
          </li>
          <li>
            <strong>Analytics Tools:</strong> Google Analytics, Meta Pixel (for
            marketing).
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law.
          </li>
        </ul>
        <p>
          We <strong>never</strong> sell your data.
        </p>
      </section>

      <section>
        <h2>5. Cookies & Tracking</h2>
        <p>We use cookies for:</p>
        <ul>
          <li>Essential functionality (e.g., login sessions).</li>
          <li>Analytics (anonymous usage data).</li>
          <li>Marketing pixels (e.g., Meta, LinkedIn) with user consent.</li>
        </ul>
        <p>Manage preferences via your browser or our cookie banner.</p>
      </section>

      <section>
        <h2>6. Security</h2>
        <p>We implement:</p>
        <ul>
          <li>Encryption (SSL/TLS) for data in transit.</li>
          <li>Regular security audits.</li>
          <li>Access controls to restrict internal data access.</li>
        </ul>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>You may:</p>
        <ul>
          <li>
            <strong>Access/Export:</strong> Request a copy of your data.
          </li>
          <li>
            <strong>Delete:</strong> Ask for erasure (excluding legal/financial
            records).
          </li>
          <li>
            <strong>Opt-Out:</strong> Unsubscribe from marketing emails.
          </li>
        </ul>
        <p>
          Submit requests to{" "}
          <a href="mailto:privacy@ecodrix.com">privacy@ecodrix.com</a>.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          For questions or data requests, contact our Data Protection Officer
          at:
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:privacy@ecodrix.com">privacy@ecodrix.com</a>
          <br />
          <strong>Address:</strong> [Your Company Address]
        </p>
      </section>

      <p>
        <em>
          We may update this policy periodically. Check this page for the latest
          version.
        </em>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
