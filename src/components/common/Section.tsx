import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from './Container';
import { fadeInUp } from '../../utils/animations';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  title,
  subtitle,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id={id} className={`py-24 ${className}`} ref={ref}>
      <Container>
        {(title || subtitle) && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;