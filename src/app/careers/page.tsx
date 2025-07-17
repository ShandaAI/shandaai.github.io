'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactPopup from '@/components/ContactPopup'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Users, 
  Mail, 
  FileText,
  Briefcase,
  Star
} from 'lucide-react'

export default function Careers() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const positions = [
    {
      id: 'cv-intern',
      title: 'Computer Vision Internship',
      type: 'Internship',
      location: 'Tokyo / Remote',
      description: 'Join Shanda Tokyo AI Lab to explore cutting-edge rendering and video generation research. Develop generative models for visual content creation, including human motion, scene rendering, and diffusion-based video synthesis.',
      responsibilities: [
        'Research and develop neural rendering, video generation, and motion synthesis models',
        'Train and fine-tune diffusion models for 2D/3D motion and scene generation',
        'Design pipelines for generating synthetic training data (video, motion, multi-view images)',
        'Optimize inference speed and visual quality for real-time generation',
        'Collaborate with researchers and engineers on generative CV projects'
      ],
      requirements: [
        'Master\'s or PhD student in Computer Vision, Computer Graphics, or related field',
        'Strong foundation in deep learning and generative models (Diffusion, GANs, Transformers)',
        'Proficient in PyTorch and familiar with 3D graphics libraries (PyTorch3D, Open3D, Blender APIs)',
        'Ability to independently implement and evaluate academic papers',
        'Strong communication skills in Chinese or English'
      ],
      preferred: [
        'Publications in top-tier CV/Graphics conferences (CVPR, ICCV, NeurIPS, SIGGRAPH)',
        'Experience in training video or motion generation models',
        'Familiar with 3D motion datasets (Human3.6M, AMASS, Mixamo) or synthetic rendering pipelines',
        'Familiarity with GPU optimization and multi-GPU training setups'
      ],
      applicationEmail: 'hr_jp@shanda.com',
    },
    {
      id: 'intern',
      title: 'Speech Internship',
      type: 'Internship',
      location: 'Remote / Hybrid',
      description: 'Join Shanda Tokyo AI Lab to participate in speech generation models and LLM reasoning research, contributing to next-generation generative AI systems.',
      responsibilities: [
        'Generative Speech-to-Speech model research and training',
        'LLM reasoning capability research and optimization', 
        'Speech/text data generation and preprocessing',
        'Model fine-tuning based on SFT and RL'
      ],
      requirements: [
        'Master\'s or PhD student in CS/AI',
        'Familiar with LLM theory and deep learning',
        'Proficient in PyTorch, DeepSpeed parallel training frameworks',
        'Chinese/English communication skills'
      ],
      preferred: [
        'Publications in top NLP/Speech conferences',
        'Practical large model training/tuning experience'
      ],
      applicationEmail: 'hr_jp@shanda.com',
    },
    {
      id: 'agent-intern',
      title: 'Agent Internship',
      type: 'Internship',
      location: 'Tokyo / Remote',
      description: 'Join our research team to build next-generation intelligent NPCs with personalized behavior and learning capabilities. Using reinforcement learning (RL), RLHF, and RLAIF techniques, you\'ll develop AI agents that continuously evolve through dialogue and self-exploration.',
      responsibilities: [
        'Apply reinforcement learning to interactive and behavior-based intelligent agents',
        'Develop multi-personality modeling and control mechanisms',
        'Implement fine-tuning using human or AI preferences (RLHF / RLAIF)',
        'Design multi-stage training workflows with self-reinforcement',
        'Optimize decision-making under multimodal inputs'
      ],
      requirements: [
        'Research or development experience in reinforcement learning, language modeling, or dialogue systems',
        'Expertise in RLHF, RLAIF, PPO, SFT, multi-personality control, or reward modeling',
        'Proficiency in PyTorch or JAX with strong coding practices',
        'High self-motivation and ability to drive independent research projects'
      ],
      preferred: [
        'Prior experience in generative AI or LLM development',
        'Publications in top-tier AI/ML conferences',
        'Experience with large-scale distributed training'
      ],
      applicationEmail: 'hr_jp@shanda.com',
    },
    {
      id: 'research-engineer',
      title: 'Research Engineer',
      type: 'Full-time',
      location: 'Tokyo',
      salary: 'Competitive',
      description: 'Build and optimize large-scale AI training systems, implementing theoretical breakthroughs in real-world applications and advancing AI capabilities.',
      responsibilities: [
        'Large-scale training data acquisition, RL environment construction, training efficiency optimization',
        'Comprehensive automated evaluation systems for next-gen models, advancing understanding of model capabilities',
        'Apply theoretical breakthroughs to real-world product challenges, advancing AI applications and impact'
      ],
      requirements: [
        'Python, C/C++ programming in Linux, proficient in PyTorch',
        'Large-scale data preprocessing, generation, and augmentation capabilities',
        'Familiar with large model training, distributed training, model parallelism',
        'Excellent problem analysis skills, good collaboration and communication'
      ],
      preferred: [
        'Familiar with CUDA/Triton/Cutlass high-performance operator frameworks',
        'Familiar with veRL/OpenRLHF/Ray RL distributed computing frameworks',
        'Familiar with browser/computer use/code sandbox large-scale RL environment construction',
        'Familiar with Megatron-Core/DeepSpeed distributed training frameworks, multi-node training optimization experience',
        'Excellent programming competition results (ACM/ICPC, NOI/IOI, etc.)',
        'Experience in famous large model open-source projects or competition awards'
      ],
      applicationEmail: 'hr_jp@shanda.com',
    }
  ]

  return (
    <div className="min-h-screen">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text-subtle">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Join us in revitalizing Japan's AI talent ecosystem and grow together 
              in a world-class research environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text-subtle">Open Positions</h2>
            <p className="text-xl text-gray-300">
              Current opportunities to join our research team
            </p>
          </motion.div>

          <div className="space-y-12">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="border border-cyber-blue/20 rounded-lg bg-neural-light/50 overflow-hidden hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="p-8">
                  {/* Position Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm font-medium">
                        Open
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Requirements and Responsibilities */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {position.responsibilities && (
                      <div>
                        <h4 className="text-lg font-bold text-cyber-blue mb-3">Main Responsibilities</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start">
                              <span className="w-2 h-2 bg-cyber-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-lg font-bold text-cyber-blue mb-3">Basic Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="w-2 h-2 bg-cyber-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-cyber-blue mb-3">Preferred Qualifications</h4>
                      <ul className="space-y-2">
                        {position.preferred.map((pref, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="w-2 h-2 bg-cyber-purple rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {pref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Application Section */}
                  <div className="p-6 bg-neural-gray/50 rounded-lg">
                    <h4 className="text-lg font-bold text-cyber-blue mb-3 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      How to Apply
                    </h4>
                    <p className="text-gray-300 mb-2">
                      Send your resume to: <a href={`mailto:${position.applicationEmail}`} className="text-cyber-blue hover:underline">{position.applicationEmail}</a>
                    </p>

                    <p className="text-gray-300 text-sm mt-2">
                      Subject: 【{position.title} Application-Name-School-Direction】
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neural-gray/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 glow-text-subtle">
              Ready to Shape the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our world-class research team and contribute to breakthrough AI research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="cyber-button"
              >
                Get In Touch
              </button>
              <a 
                href="mailto:hr_jp@shanda.com"
                className="border border-cyber-blue text-cyber-blue px-8 py-3 hover:bg-cyber-blue hover:text-black transition-all duration-300"
              >
                Send Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onContactClick={() => setIsContactOpen(true)} />
    </div>
  )
} 