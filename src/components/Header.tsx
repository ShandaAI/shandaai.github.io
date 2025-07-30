'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import shandaLogo from '../assets/shanda_logo.png'

interface HeaderProps {
  onContactClick: () => void
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neural-dark/95 backdrop-blur-md border-b border-cyber-blue/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src={shandaLogo}
                alt="Shanda AI Research"
                width={88}
                height={88}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold glow-text-subtle">Shanda AI</h1>
              <p className="text-xs text-gray-400">Tokyo Research Institute</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/careers" className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={onContactClick}
              className="cyber-button text-sm px-6 py-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 