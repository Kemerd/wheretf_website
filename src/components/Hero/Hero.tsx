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

const AppStoreButton = styled(motion.a)`
  height: 48px;
  img {
    height: 100%;
    width: auto;
  }
`;

const PhoneContainer = styled(motion.div)`
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

const PhoneImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
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
          Never Lose Your Stuff
          <br />
          Ever Again
        </Title>

        <Subtitle variants={fadeUpVariant}>
          For those "Where TF?!" moments. Find anything instantly with AI-powered voice,
          text, and image search.
        </Subtitle>

        <CTAContainer variants={fadeUpVariant}>
          <AppStoreButton
            href="#"
            variants={bounceScale}
            whileHover="hover"
            whileTap="tap"
          >
            <img
              src="/assets/images/brand-logos/ios_app_store.svg"
              alt="Download on App Store"
            />
          </AppStoreButton>
          <AppStoreButton
            href="#"
            variants={bounceScale}
            whileHover="hover"
            whileTap="tap"
          >
            <img
              src="/assets/images/brand-logos/android_app_store.svg"
              alt="Get it on Google Play"
            />
          </AppStoreButton>
        </CTAContainer>

        <PhoneContainer
          variants={fadeUpVariant}
        >
          <PhoneImage
            src="/assets/images/IPhone_16_Pro_Max_Vector.svg"
            alt="mixmate.ai App Interface"
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
              maxWidth: '380px',
              margin: '0 auto',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
            }}
          />
        </PhoneContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 