import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 min-h-screen bg-gray-900 text-white pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          
          {/* Professional Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Professional Summary</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Results-driven AWS DevOps Engineer with expertise in cloud infrastructure, CI/CD automation, and container orchestration. 
              Skilled in managing and optimizing AWS-based deployments for remote teams, implementing secure and scalable cloud solutions, 
              and driving automation in distributed environments.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experienced in monitoring, security, and cost optimization with a focus on improving system reliability and deployment efficiency. 
              Passionate about collaborating with global teams to streamline DevOps workflows and deliver measurable business results.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <Award className="text-cyan-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Cost Optimization</h3>
              <p className="text-gray-300">25% reduction in monthly cloud expenses through automated scaling strategies</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <Users className="text-green-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Security Enhancement</h3>
              <p className="text-gray-300">90% reduction in security incidents through proper IAM and RBAC implementation</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <Globe className="text-blue-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Global Collaboration</h3>
              <p className="text-gray-300">Successfully partnered with teams across 3 time zones, improving deployment frequency from weekly to daily</p>
            </motion.div>
          </div>

          {/* Background */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Background</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My journey from a Bachelor of Science in Physiology to becoming a certified AWS DevOps Engineer demonstrates my adaptability 
              and commitment to continuous learning. This unique background has given me a systematic approach to problem-solving and 
              attention to detail that serves me well in complex cloud environments.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in Lagos, Nigeria, I bring a global perspective to DevOps challenges while maintaining strong expertise in 
              remote collaboration and distributed team management.
            </p>
          </div>

          {/* Recent Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Certifications</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-cyan-400">AWS Certified Solutions Architect – Associate (SAA-C03)</h3>
                <p className="text-gray-300">Amazon Web Services | August 2025</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-green-400">Kubernetes and Cloud Native Associate (KCNA)</h3>
                <p className="text-gray-300">Cloud Native Computing Foundation | May 2025</p>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <motion.a
            href="/FortuneOkoye_CV.pdf"
            download="Fortune Chidera Okoye CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:scale-105 transition-transform"
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;