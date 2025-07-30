import Image from 'next/image'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import shandaLogo from '@/assets/shanda_logo.png'

interface FooterProps {
  onContactClick: () => void
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="bg-neural-gray border-t border-cyber-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={shandaLogo}
                alt="Shanda AI Research"
                width={88}
                height={88}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-bold glow-text-subtle">Shanda AI Research</h3>
                <h3 className="text-lg font-bold glow-text-subtle">盛大グループ株式会社</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creating the Future with AI Technology
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyber-blue">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-cyber-blue mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>2-21-1 Shibuya, Shibuya-ku</p>
                  <p>Shibuya Hikarie 33F</p>
                  <p>Tokyo, Japan</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyber-blue" />
                <span className="text-gray-400 text-sm">03-6433-5011</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-cyber-blue" />
                <span className="text-gray-400 text-sm">Mon-Fri: 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyber-blue">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm text-left"
                >
                  Send Inquiry
                </button>
              </li>
              <li>
                <a 
                  href="mailto:hr_jp@shanda.com" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm flex items-center space-x-1"
                >
                  <Mail size={14} />
                  <span>hr_jp@shanda.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shanda Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 