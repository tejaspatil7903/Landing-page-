import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Scale, Lock, Leaf } from 'lucide-react';
import Section from './common/Section';
import { fadeInUp, staggerChildren } from '../utils/animations';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries and exploring new possibilities.',
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Building solutions that grow with our clients.',
  },
  {
    icon: Lock,
    title: 'Trust',
    description: 'Maintaining the highest standards of security and reliability.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Creating lasting impact while being environmentally conscious.',
  },
];

const Vision = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section
      id="vision"
      title="Our Vision for Tomorrow"
      subtitle="At OTATA, we are committed to building scalable solutions that not only meet today's needs but anticipate tomorrow's challenges."
      className="bg-gradient-to-b from-black via-blue-900/20 to-black"
    >
      <motion.div
        ref={ref}
        variants={staggerChildren}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
              <value.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join us on our mission to create innovative solutions that empower businesses
          and individuals to achieve their full potential in the digital age.
        </p>
      </motion.div>
    </Section>
  );
};

export default Vision;