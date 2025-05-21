import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fadeUpVariant, staggerContainer, bounceScale } from '../../animations/variants';

// Styled components for our hero section
const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.spacing['3xl']} * 2);
  position: relative;
  overflow: hidden;
`;

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => `${theme.colors.accent}15`} 0%,
    transparent 70%
  );
  z-index: -1;
  transform-origin: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.typography.fontSize['6xl']});
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const SecondaryButton = styled(motion.a)`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const DAWInterfaceContainer = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 0;
    right: 0;
    height: 40%;
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => `${theme.colors.accent}15`} 0%,
      transparent 70%
    );
    z-index: -1;
    filter: blur(20px);
  }
`;

const DAWInterfaceImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const Hero: React.FC = () => {
  return (
    <HeroSection
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <GradientBackground
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <HeroContent>
        <Title
          variants={fadeUpVariant}
        >
          Because Someone Had
          <br />
          To Make It
        </Title>

        <Subtitle variants={fadeUpVariant}>
          Complete integration with your DAW, like having an expert AI producer looking over your shoulder
        </Subtitle>

        <CTAContainer variants={fadeUpVariant}>
          <PrimaryButton
            href="#pricing"
            variants={bounceScale}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </PrimaryButton>
          <SecondaryButton
            href="#features"
            variants={bounceScale}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </SecondaryButton>
        </CTAContainer>

        <DAWInterfaceContainer
          variants={fadeUpVariant}
        >
          <DAWInterfaceImage
            src="/assets/images/daw_interface.png"
            alt="MixMate AI DAW Integration"
            initial={{ y: 20 }}
            animate={{
              y: [20, -20, 20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
            }}
          />
        </DAWInterfaceContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 