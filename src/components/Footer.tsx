import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import Container from './common/Container';
import { fadeInUp } from '../utils/animations';

const Footer = () => {
  return (
    <footer className="bg-black py-16 text-gray-400">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                OTATA
              </span>
            </div>
            <p className="text-sm">
              Redefining the Future through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-white transition-colors">
                  Vision & Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p>&copy; 2024 OTATA. Redefining the Future.</p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;