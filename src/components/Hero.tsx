import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from './common/Container';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-blue-900/20 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.2),rgba(24,24,24,0)_50%)]" />
        <div className="absolute w-full h-full bg-black opacity-50" />
      </div>

      <Container className="relative pt-32 pb-16 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Shaping the Future,
            </span>
            <br />
            <span className="text-white">One Innovation at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            OTATA is a hub of cutting-edge technology, powering products that redefine industries.
            From cloud kitchens to your next big idea—we make the future happen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:opacity-90 transition-opacity flex items-center gap-2 group"
            >
              Learn About OTATA
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="px-8 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              Explore Our Products
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;