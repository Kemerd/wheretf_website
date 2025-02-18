import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUpVariant, bounceScale } from '../../animations/variants';
import useInView from '../../hooks/useInView';

const FooterSection = styled(motion.footer)`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  img {
    height: 40px;
    width: auto;
  }
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  max-width: 300px;
`;

const Title = styled(motion.h3)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LinkList = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Link = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const BottomBar = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Copyright = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const LegalLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Footer: React.FC = () => {
    const { ref, controls } = useInView();

    return (
        <FooterSection ref={ref}>
            <Container
                variants={fadeUpVariant}
                initial="hidden"
                animate={controls}
            >
                <Column>
                    <Logo href="/" variants={bounceScale} whileHover="hover" whileTap="tap">
                        <img src="/assets/logo/logo.png" alt="WhereTF.ai Logo" />
                    </Logo>
                    <Description>
                        Never lose your stuff again. AI-powered item tracking for home and business.
                    </Description>
                    <SocialLinks>
                        <SocialLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={bounceScale}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            𝕏
                        </SocialLink>
                        <SocialLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={bounceScale}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            in
                        </SocialLink>
                        <SocialLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={bounceScale}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            IG
                        </SocialLink>
                    </SocialLinks>
                </Column>

                <Column>
                    <Title>Product</Title>
                    <LinkList>
                        <li><Link href="#features">Features</Link></li>
                        <li><Link href="#pricing">Pricing</Link></li>
                        <li><Link href="#support">Support</Link></li>
                        <li><Link href="#">Download App</Link></li>
                    </LinkList>
                </Column>

                <Column>
                    <Title>Company</Title>
                    <LinkList>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Press Kit</Link></li>
                    </LinkList>
                </Column>

                <Column>
                    <Title>Legal</Title>
                    <LinkList>
                        <li><Link href="#">Terms of Service</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Cookie Policy</Link></li>
                        <li><Link href="#">GDPR</Link></li>
                    </LinkList>
                </Column>
            </Container>

            <Container>
                <BottomBar>
                    <Copyright>
                        © {new Date().getFullYear()} WhereTF.ai. All rights reserved.
                    </Copyright>
                    <LegalLinks>
                        <Link href="#">Terms</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Cookies</Link>
                    </LegalLinks>
                </BottomBar>
            </Container>
        </FooterSection>
    );
};

export default Footer; 