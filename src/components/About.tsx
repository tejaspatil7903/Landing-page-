import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Zap, Shield, Users } from 'lucide-react';
import Section from './common/Section';
import { fadeInUp, staggerChildren } from '../utils/animations';

const features = [
  {
    icon: Clock,
    title: 'Rapid Innovation',
    description: 'We move fast and adapt quickly to emerging technologies and market needs.',
  },
  {
    icon: Shield,
    title: 'Trusted Solutions',
    description: 'Building reliable and secure products that users can depend on.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Every product is designed with the end-user experience in mind.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Leveraging the latest technologies to deliver superior solutions.',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section
      id="about"
      title="What Drives OTATA?"
      subtitle="OTATA is a visionary tech company that builds and nurtures innovative products to solve real-world challenges. Every idea, every product, is designed to shape a better tomorrow."
    >
      <motion.div
        ref={ref}
        variants={staggerChildren}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;