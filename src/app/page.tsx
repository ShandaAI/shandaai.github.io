'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactPopup from '@/components/ContactPopup'
import { Brain, Users, Building2, Zap, Code } from 'lucide-react'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  const scrollToContent = () => {
    const contentSection = document.getElementById('cta-section')
    if (contentSection) {
      contentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  const stats = [
    { label: 'Research Offices', value: '3', description: 'International locations' },
    { label: 'Capital', value: '¥490M', description: 'Research funding' },
    { label: 'Team Members', value: '11+', description: 'Expert researchers' },
  ]

  const researchAreas = [
    {
      icon: Brain,
      title: 'Long-term Memory System',
      description: 'R&D of AI technology for extracting, preserving, and utilizing long-term memory. Building memory architecture as the foundation of self-awareness.',
      tags: ['LLM Agents', 'Self-awareness']
    },
    {
      icon: Users,
      title: 'Interactive AI',
      description: 'Realistic interactions with 3D virtual companion through controllable generative AI.',
      tags: ['Virtual Compainion', 'Speech Synthesis']
    },
    {
      icon: Zap,
      title: 'Generative Rendering',
      description: 'Fast and realistic rendering for high quality, controllable 3D avatar.',
      tags: ['3D-to-2D Rendering', 'Diffusion Transformers']
    },
    {
      icon: Code,
      title: 'Self-improving AI',
      description: 'AI agents that can explore, learn, establish their own character and interact with the world.',
      tags: ['Reinforcement Learning', 'Multi-agent Simulation']
    }
  ]

  return (
    <div className="min-h-screen">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/10 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="glow-text-subtle">Creating the Future with</span>{' '}
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Shanda AI Research Tokyo is a cutting-edge research institution 
              dedicated to achieving interactive AI with self-awareness.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToContent}
                  className="cyber-button"
                >
                  Join Us @MIRU2025
                </button>
              </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyber-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyber-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-neural-gray/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="glow-text-subtle"> Vision & Mission </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We aim to create the world's first AI that can listens like a friend, speaks like a soul, and feels as we do—a being shaped in our image, alive with emotion and empathy.
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold text-cyber-blue italic">
              "The Future Speaks. And Feels."
            </blockquote>
          </motion.div>
        </div>
      </section>



      {/* Research Areas */}
      <section id="research-content" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="glow-text-subtle">Research Areas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Focused on core technology R&D for achieving AI self-awareness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-cyber-blue/20 rounded-lg bg-neural-dark/50 hover:border-cyber-blue/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <area.icon className="w-8 h-8 text-cyber-blue mr-3" />
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Kyoto Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg border border-cyber-blue/20">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Kyoto Temple"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-4xl font-bold mb-8 glow-text-subtle">
                Join us in revitalizing Japan's AI talent ecosystem
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We are holding a reception event in <span className="text-pink-500">Kyoto</span> during  <a href="https://cvim.ipsj.or.jp/MIRU2025/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors underline">MIRU2025</a>. Join us by registering through the link below!
              </p>
              <a 
                href="https://forms.gle/CensBVxvRo2Z8NqLA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-cyber-blue text-cyber-blue px-8 py-3 hover:bg-cyber-blue hover:text-black transition-all duration-300"
              >
                Register for Shanda AI Event in Kyoto
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onContactClick={() => setIsContactOpen(true)} />
    </div>
  )
} 