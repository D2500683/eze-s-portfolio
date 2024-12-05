import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Tailwind", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 75 },
    { name: "MySQL", level: 60 },
    { name: "Firebase", level: 80 },
  ];

  const experiences = [
    {
      title: "Senior Web Developer",
      company: "TechCorp",
      period: "Jan 2020 - Present",
      description:
        "Led the development of a large-scale e-commerce platform, implementing features such as user authentication, payment processing, and real-time inventory management.",
    },
    {
      title: "Web Developer",
      company: "DevSolutions",
      period: "Jun 2017 - Dec 2019",
      description:
        "Worked on various client projects, developing custom web applications and ensuring optimal performance and user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-PT">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-2xl font-bold text-gray-900">About Me</h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ihemegbulem Daniel
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm a passionate web developer with a knack for creating dynamic and
              responsive web applications. With a strong background in both
              front-end and back-end technologies, I strive to build web
              experiences that are both visually appealing and functionally
              robust.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/daniel-ihemegbulem-resume.pdf"
              download
              className="inline-flex items-center mt-6 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* Skills & Experience Tabs */}
        <div className="mt-16">
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-3 rounded-md flex items-center ${
                activeTab === "skills"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              } transition duration-300`}
            >
              <FaCode className="mr-2" />
              Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-md flex items-center ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              } transition duration-300`}
            >
              <FaBriefcase className="mr-2" />
              Experience
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-1">
                          <span className="w-32 text-sm font-medium text-gray-600">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <motion.div
                            className="bg-indigo-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Work Experience
                  </h3>
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="border-l-2 border-indigo-200 pl-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900">
                          {exp.title}
                        </h4>
                        <p className="text-indigo-600 text-sm font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                        <p className="mt-2 text-gray-600">{exp.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="mt-4 text-gray-600">
              Interested in working together? Feel free to reach out through any of
              these channels.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              {[
                {
                  icon: FaEnvelope,
                  href: "mailto:dihemegbulem@gmail.com",
                  label: "Email",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/in/daniel-ihemegbulem-16056520a/",
                  label: "LinkedIn",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/daniel-ihemegbulem",
                  label: "GitHub",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition duration-300"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Ihemegbulem Daniel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
