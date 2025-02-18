import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    margin: ${({ theme }) => theme.spacing.md} 0;
    padding-left: ${({ theme }) => theme.spacing.xl};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PrivacyPolicyContent: React.FC = () => (
    <Content>
        <p>Last Updated: January 30, 2025</p>

        <h3>1. Introduction</h3>
        <p>
            Welcome to WhereTF ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
            you understand how we collect, use, and safeguard your personal information. This Privacy Policy
            explains our practices regarding data collection and usage through our mobile application WhereTF
            (the "App").
        </p>

        <h3>2. Information We Collect</h3>
        <h3>2.1 Information You Provide</h3>
        <ul>
            <li>Account Information: Email address, name, and optional profile details</li>
            <li>Item Data: Descriptions, images, and locations of your tracked items</li>
            <li>User Preferences: Search settings, notification preferences, storage hierarchies</li>
            <li>Usage Patterns: Item storage habits and organizational preferences</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <ul>
            <li>Device Information: Device type, operating system, unique device identifiers</li>
            <li>Usage Data: App interaction patterns, feature usage statistics, search history</li>
            <li>Performance Data: App crash reports, error logs, performance metrics</li>
            <li>Image Data: Object recognition data from photos of your items</li>
            <li>Location Data (Optional): Storage location data for better item tracking</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <h3>3.1 Primary Uses</h3>
        <ul>
            <li>Providing core App functionality and item tracking services</li>
            <li>Processing and analyzing images for object recognition</li>
            <li>Generating item location reports and statistics</li>
            <li>Personalizing your organization experience</li>
            <li>Sending item location reminders and notifications</li>
            <li>Improving our AI algorithms and search accuracy</li>
            <li>Troubleshooting technical issues</li>
        </ul>

        <h3>3.2 Secondary Uses</h3>
        <ul>
            <li>Analyzing usage patterns to enhance features</li>
            <li>Conducting research to improve object recognition</li>
            <li>Creating aggregated, anonymized data insights</li>
            <li>Developing new services and features</li>
            <li>Enhancing our business operations and services</li>
        </ul>

        <h3>4. Data Processing and Storage</h3>
        <h3>4.1 Image and Object Processing</h3>
        <ul>
            <li>Object recognition processing occurs using secure cloud services</li>
            <li>Item data is processed using advanced AI algorithms</li>
            <li>Visual data is converted into secure vector embeddings</li>
            <li>Processed item data is stored with state-of-the-art encryption</li>
        </ul>

        <h3>4.2 Data Storage</h3>
        <ul>
            <li>Personal information is stored on secure servers</li>
            <li>Item data is encrypted during transmission and storage</li>
            <li>Local data is stored on your device with industry-standard encryption</li>
            <li>Backups are maintained in secure, redundant locations</li>
        </ul>

        <h3>5. Data Sharing and Disclosure</h3>
        <p>We may share your information with:</p>
        <ul>
            <li>Service providers who assist in app operations</li>
            <li>Analytics providers (in anonymized form)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners and affiliated companies</li>
            <li>Third parties in connection with business transactions</li>
        </ul>

        <p>We prioritize data protection while:</p>
        <ul>
            <li>Maintaining service quality and features</li>
            <li>Improving our technology and services</li>
            <li>Developing new capabilities and offerings</li>
            <li>Operating and expanding our business</li>
        </ul>

        <h3>6. Your Rights and Choices</h3>
        <p>You have the right to:</p>
        <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of marketing communications</li>
            <li>Control app permissions (camera, location, etc.)</li>
            <li>Export your data in a portable format</li>
            <li>Manage your data sharing preferences</li>
        </ul>

        <h3>7. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your data, including:</p>
        <ul>
            <li>End-to-end encryption for data transmission</li>
            <li>Secure data storage with encryption at rest</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Regular security training for our team</li>
        </ul>

        <h3>8. Children's Privacy</h3>
        <p>
            The App is not intended for children under 13. We do not knowingly collect or maintain
            information from children under 13.
        </p>

        <h3>9. International Data Transfers</h3>
        <p>
            If we transfer your data across borders, we ensure appropriate safeguards are in place and
            comply with applicable data protection laws. We may process and store your data in various
            locations to provide and improve our services.
        </p>

        <h3>10. Changes to This Policy</h3>
        <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, technologies,
            legal requirements, and business needs. We will notify you of any material changes
            through the App or via email.
        </p>

        <h3>11. Contact Information</h3>
        <p>For privacy-related questions or concerns:</p>
        <p>Email: privacy@wheretf.ai</p>

        <h3>12. Specific Regional Rights</h3>
        <h3>12.1 European Users (GDPR)</h3>
        <p>European users have additional rights under GDPR, including:</p>
        <ul>
            <li>Right to object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
            <li>Right to file a complaint with supervisory authorities</li>
        </ul>

        <h3>12.2 California Residents (CCPA)</h3>
        <p>California residents have specific rights under CCPA, including:</p>
        <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is disclosed</li>
            <li>Right to access and control your information</li>
            <li>Right to request deletion of personal information</li>
        </ul>

        <h3>13. Data Retention</h3>
        <p>
            We retain your personal information for as long as necessary to provide our services,
            comply with legal obligations, and support our business operations. You may request
            deletion of your data at any time, subject to legal requirements and legitimate
            business purposes.
        </p>

        <h3>14. Third-Party Links and Services</h3>
        <p>
            The App may contain links to third-party services. We are not responsible for the privacy
            practices of these services. Review their privacy policies before use.
        </p>

        <h3>15. Consent</h3>
        <p>
            By using the App, you consent to this Privacy Policy and our data practices as described.
            If you disagree with any terms, please discontinue use of the App.
        </p>
    </Content>
);

export const TermsOfServiceContent: React.FC = () => (
    <Content>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h3>1. Acceptance of Terms</h3>
        <p>
            By accessing or using WhereTF.ai, you agree to be bound by these Terms of Service and all applicable
            laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
        </p>

        <h3>2. Service Description</h3>
        <p>
            WhereTF.ai is an AI-powered item tracking service that helps users locate and manage their belongings.
            The service is provided "as is" and may be updated or modified at any time.
        </p>

        <h3>3. User Responsibilities</h3>
        <ul>
            <li>Maintain accurate account information</li>
            <li>Protect account credentials</li>
            <li>Use the service in compliance with laws and regulations</li>
            <li>Respect the privacy and rights of others</li>
        </ul>

        <h3>4. Limitation of Liability</h3>
        <p>
            Novabox LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the service.
        </p>
    </Content>
);

export const AboutUsContent: React.FC = () => (
    <Content>
        <p>
            WhereTF.ai is a revolutionary AI-powered item tracking platform developed by Novabox LLC. Our mission
            is to eliminate the frustration of lost items by combining cutting-edge artificial intelligence with
            intuitive user experience.
        </p>

        <h3>Our Story</h3>
        <p>
            Born from the universal experience of losing important items, WhereTF.ai was created to bring peace
            of mind to people's daily lives. Our team of AI experts and UX designers has developed a solution
            that makes item tracking not just effective, but enjoyable.
        </p>

        <h3>Our Technology</h3>
        <p>
            We harness the power of advanced AI technologies to create a seamless item tracking experience. Our system
            utilizes sophisticated vectorization techniques to convert both text descriptions and images into
            high-dimensional vector embeddings, enabling lightning-fast semantic search capabilities.
        </p>

        <p>
            For image processing, we employ state-of-the-art semantic image separation powered by OpenAI's CLIP and
            Meta's Segment Anything Model (SAM). This allows us to precisely identify and isolate objects within
            images, making visual search incredibly accurate. These visual features are then transformed into vector
            embeddings stored in our pgvector database for efficient retrieval.
        </p>

        <p>
            Our AI engine continuously learns from user interactions, leveraging historical data and behavioral
            patterns to improve prediction accuracy over time. The combination of vector search, semantic
            understanding, and machine learning enables us to not just find items, but predict where they might
            be even when they haven't been explicitly logged.
        </p>

        <h3>Our Vision</h3>
        <p>
            We envision a world where losing items is a thing of the past. Through innovation and user-centric
            design, we're making that vision a reality, one found item at a time.
        </p>
    </Content>
); 