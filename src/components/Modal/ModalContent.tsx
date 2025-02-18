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
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h3>1. Introduction</h3>
        <p>
            Novabox LLC ("we", "our", or "us"), operating as WhereTF.ai, is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered
            item tracking service.
        </p>

        <h3>2. Information We Collect</h3>
        <ul>
            <li>Account information (email, name, password)</li>
            <li>Item location data and history</li>
            <li>Device information and usage statistics</li>
            <li>Images and descriptions of tracked items</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <ul>
            <li>Provide and improve our item tracking service</li>
            <li>Train and enhance our AI algorithms</li>
            <li>Send important updates and notifications</li>
            <li>Ensure platform security and prevent fraud</li>
        </ul>

        <h3>4. Data Protection</h3>
        <p>
            We implement industry-standard security measures to protect your data. All information is encrypted
            in transit and at rest using state-of-the-art encryption protocols.
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
            We leverage state-of-the-art machine learning algorithms to predict item locations based on user
            patterns and historical data. Our AI continuously learns and improves, making the service more
            accurate and personalized over time.
        </p>

        <h3>Our Vision</h3>
        <p>
            We envision a world where losing items is a thing of the past. Through innovation and user-centric
            design, we're making that vision a reality, one found item at a time.
        </p>
    </Content>
); 