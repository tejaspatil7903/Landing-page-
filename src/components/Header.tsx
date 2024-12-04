import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Container from './common/Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              OTATA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About OTATA
            </a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">
              Our Products
            </a>
            <a href="#vision" className="text-gray-300 hover:text-white transition-colors">
              Vision & Mission
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:opacity-90 transition-opacity">
              Discover More
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About OTATA
            </a>
            <a
              href="#products"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Products
            </a>
            <a
              href="#vision"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vision & Mission
            </a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:opacity-90 transition-opacity">
              Discover More
            </button>
          </div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;