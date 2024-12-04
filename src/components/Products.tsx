import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat, Sparkles } from 'lucide-react';
import Section from './common/Section';
import { fadeInUp, staggerChildren } from '../utils/animations';

const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section
      id="products"
      title="Products by OTATA"
      subtitle="Discover our innovative solutions that are reshaping industries and creating new possibilities."
    >
      <motion.div
        ref={ref}
        variants={staggerChildren}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* TikhaBanao Card */}
        <motion.div
          variants={fadeInUp}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 p-1"
        >
          <div className="relative h-full bg-black rounded-2xl p-8">
            <ChefHat className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">TikhaBanao</h3>
            <p className="text-gray-300 mb-6">
              Revolutionizing food delivery through private cloud kitchens. Experience
              the future of food service with our innovative platform.
            </p>
            <button className="px-6 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Future Product Card */}
        <motion.div
          variants={fadeInUp}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
        >
          <div className="relative h-full bg-black rounded-2xl p-8">
            <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              Our next breakthrough innovation is in development. Stay tuned for
              something extraordinary that will transform the industry.
            </p>
            <button className="px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors">
              Get Notified
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Products;