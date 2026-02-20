import { Link } from 'react-scroll'
import { FaRecycle, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(true)

  const quickLinks = [
    { name: 'About Us', to: 'hero' },
    { name: 'Products', to: 'products' },
    { name: 'Why Choose Us', to: 'why' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"
      />

      <div className="section-container py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info with Enhanced Logo */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg"
              >
                <FaRecycle className="text-xl" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold">Dwarkesh Plastic</h3>
                <p className="text-xs text-gray-400">Quality Recycling, Sustainable Future</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading plastic recycling company specializing in grinding embroidery machine cones. 
              Committed to sustainability and quality.
            </p>
          </div>

          {/* Quick Links with Hover Effects */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="group text-gray-400 hover:text-primary-400 transition-colors cursor-pointer text-sm flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Commitment with Gradient Card */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
              Our Commitment
            </h4>
            <div className="bg-gradient-to-br from-primary-900/30 to-secondary-900/30 backdrop-blur-sm p-4 rounded-xl border border-primary-700/30">
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated to reducing plastic waste and promoting a circular economy through 
                innovative recycling solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gradient Border */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Dwarkesh Plastic. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <FaRecycle className="text-primary-500" />
              Transforming waste into value, one cone at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link to="hero" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 flex items-center justify-center group cursor-pointer"
            >
              <FaArrowUp className="text-xl" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </footer>
  )
}
