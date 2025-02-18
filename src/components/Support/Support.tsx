import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant, staggerContainer, bounceScale } from '../../animations/variants';
import useInView from '../../hooks/useInView';

const SupportSection = styled(motion.section)`
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.background.primary};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled(motion.label)`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}30;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
`;

const FAQSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FAQItem = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

const FAQQuestion = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => `${theme.colors.background.primary}90`};
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.primary}80;
  line-height: 1.6;
`;

const faqs = [
    {
        question: "How does WhereTF.ai work?",
        answer: "WhereTF.ai uses AI to help you track and find your items. Simply tell it where you're storing something using text, voice, or images, and it'll remember for you. When you need to find something, just ask and the AI will tell you exactly where it is.",
    },
    {
        question: "What if I forget to log an item?",
        answer: "No worries! WhereTF.ai's smart AI can predict where items might be based on your past storage habits. It learns from your patterns and can make educated guesses about where you might have placed something.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely! We use enterprise-grade encryption and security measures to protect your data. All information is stored securely using Supabase with Row-Level Security (RLS), ensuring only you have access to your item locations.",
    },
    {
        question: "Can I use it for business?",
        answer: "Yes! WhereTF.ai is perfect for both personal and business use. Many businesses use it for inventory management, tool tracking, and warehouse organization. Our Premium AI Plan is specifically designed to handle business needs.",
    },
];

const Support: React.FC = () => {
    const { ref, controls } = useInView();
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <SupportSection id="support" ref={ref}>
            <Container
                variants={staggerContainer}
                initial="hidden"
                animate={controls}
            >
                <SectionTitle variants={fadeUpVariant}>
                    Need Help?
                </SectionTitle>

                <Grid>
                    <ContactForm
                        variants={fadeUpVariant}
                        onSubmit={handleSubmit}
                    >
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                placeholder="Your name"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Message</Label>
                            <TextArea
                                placeholder="How can we help?"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </FormGroup>
                        <SubmitButton
                            type="submit"
                            variants={bounceScale}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Send Message
                        </SubmitButton>
                    </ContactForm>

                    <FAQSection variants={fadeUpVariant}>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index}>
                                <FAQQuestion
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    variants={bounceScale}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    {faq.question}
                                    <motion.span
                                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    >
                                        ↓
                                    </motion.span>
                                </FAQQuestion>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <FAQAnswer
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        >
                                            {faq.answer}
                                        </FAQAnswer>
                                    )}
                                </AnimatePresence>
                            </FAQItem>
                        ))}
                    </FAQSection>
                </Grid>
            </Container>
        </SupportSection>
    );
};

export default Support; 