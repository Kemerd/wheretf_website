import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../../animations/variants';
import useInView from '../../hooks/useInView';

// Styled components for the features section
const FeaturesSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text.primary} 0%,
    ${({ theme }) => theme.colors.accent} 50%,
    ${({ theme }) => theme.colors.text.primary} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => `linear-gradient(
    135deg,
    ${theme.colors.background.primary} 0%,
    ${theme.colors.background.secondary} 100%
  )`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.accent}50 50%,
      transparent 100%
    );
  }
`;

const FeatureIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.accent}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
`;

const FeatureTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const features = [
    {
        icon: '🔍',
        title: 'AI-Powered Search',
        description: 'Find anything instantly with voice commands, text searches, and image recognition.',
    },
    {
        icon: '📸',
        title: 'Visual Recognition',
        description: 'Take a photo of an item, and let AI identify and store it for future searches.',
    },
    {
        icon: '🧠',
        title: 'Smart Predictions',
        description: 'AI learns your storage habits and predicts where items might be.',
    },
    {
        icon: '📍',
        title: 'Location Tracking',
        description: 'Organize items in a hierarchical system: Rooms → Containers → Compartments.',
    },
    {
        icon: '🔄',
        title: 'Movement History',
        description: 'Track item movements with timestamped history of storage locations.',
    },
    {
        icon: '🏢',
        title: 'Home & Business',
        description: 'Perfect for households, workshops, and business inventory management.',
    },
];

const Features: React.FC = () => {
    const { ref, controls } = useInView();

    return (
        <FeaturesSection id="features" ref={ref}>
            <Container
                variants={staggerContainer}
                initial="hidden"
                animate={controls}
            >
                <SectionTitle variants={fadeUpVariant}>
                    Powerful Features That Make Life Easier
                </SectionTitle>

                <FeaturesGrid>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            variants={fadeUpVariant}
                            whileHover={{
                                y: -5,
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                },
                            }}
                        >
                            <FeatureIcon
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                    delay: index * 0.1,
                                }}
                            >
                                {feature.icon}
                            </FeatureIcon>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </Container>
        </FeaturesSection>
    );
};

export default Features; 