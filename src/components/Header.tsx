import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaRecycle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', to: 'hero' },
    { name: 'Products', to: 'products' },
    { name: 'Why Us', to: 'why' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Hover Effect */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow"
            >
              <FaRecycle className="text-2xl" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Dwarkesh Plastic
              </span>
              <span className="text-xs text-gray-600">Quality Recycling, Sustainable Future</span>
            </div>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative text-gray-700 hover:text-primary-600 font-medium cursor-pointer transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  →
                </motion.span>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 text-2xl p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu with Animation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-primary-600 font-medium cursor-pointer hover:bg-primary-50 px-4 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg text-center hover:bg-primary-700 transition-colors cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
