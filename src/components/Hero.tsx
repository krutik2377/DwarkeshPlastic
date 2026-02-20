import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaRecycle } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ backgroundColor: '#e6f9f5' }}>
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 shadow-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaRecycle className="text-primary-600 text-xl" />
              </motion.div>
              <span className="text-primary-700 font-semibold text-sm">
                Leading Plastic Recycling Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Transforming
              <br />
              <span className="relative inline-block">
                <span className="text-primary-600">Plastic Waste</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                />
              </span>
              <br />
              Into Value
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed"
            >
              Quality Recycling, Sustainable Future - Expert grinding of embroidery 
              plastic cones into premium recycled materials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="group relative bg-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-xl cursor-pointer text-center overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              <Link
                to="process"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative bg-white/80 backdrop-blur-sm text-primary-600 border-2 border-primary-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:shadow-xl transition-all cursor-pointer text-center group"
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: '500+', label: 'Tons Recycled' },
                { value: '50+', label: 'Happy Clients' },
                { value: '100%', label: 'Eco-Friendly' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image - Enhanced Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl opacity-20 blur-xl"
            />

            {/* Device Frame with Glassmorphism */}
            <div className="relative w-full max-w-lg">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl"
              >
                {/* Screen Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="/images/plastic-cones.png"
                    alt="Colorful plastic cones from embroidery machines"
                    className="w-full h-auto"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Device Notch/Camera */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
              </motion.div>

              {/* Floating Badge with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <FaRecycle className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">100% Recyclable</p>
                    <p className="text-xs text-gray-600">Premium Quality</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-2 h-2 bg-primary-400 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${-5 + i * 2}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
