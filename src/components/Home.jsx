import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import leaselounge from "../assets/images/leaselounge.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Lease Lounge",
      description:
        "Discover your dream home with our cutting-edge real estate website. Built using React for a smooth, interactive user experience, styled with Tailwind CSS for a sleek and responsive design, and powered by Firebase for real-time data and secure authentication.",
      imageUrl: leaselounge,
      link: "https://leaselounge.netlify.app/",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white font-PT">
      {/* Navigation - Cleaner Design */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-bold text-gray-700 text-lg">
                    Ihemegbulem Daniel
                  </span>
                </a>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Home
              </button>
              <Link to="/about-me">
                <button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                  About
                </button>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
                    isMenuOpen ? "transform rotate-90" : ""
                  }`}
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
            >
              Home
            </a>
            <Link
              to="/about-me"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
            >
              About
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section - Professional Update */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-indigo-600 text-lg font-semibold tracking-wide uppercase"
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-5xl leading-8 font-bold text-gray-900 sm:text-6xl"
            >
              Hi, I'm Daniel
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <TypeAnimation
                sequence={[
                  "Building robust web applications with modern technologies.",
                  1000,
                  "Creating seamless user experiences through code.",
                  1000,
                  "Transforming ideas into elegant solutions.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl text-gray-600"
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.div>
            
            {/* Call to Action */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaChevronDown className="text-indigo-600 text-2xl" />
        </motion.div>
      </motion.div>

      {/* Project Section - Professional Update */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Portfolio
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Projects
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    className="h-48 w-full object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={project.link}
                        className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
                      >
                        View Project
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Section - Professional Update */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Let's Connect
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="mt-10 flex justify-center space-x-6">
              <motion.a
                href="https://github.com/daniel-ihemegbulem"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaGithub className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/daniel-ihemegbulem-16056520a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaLinkedin className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="mailto:dihemegbulem@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaEnvelope className="h-8 w-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
