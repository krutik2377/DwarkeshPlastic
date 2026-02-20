import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaLeaf, FaStar, FaCogs, FaRecycle } from 'react-icons/fa'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const reasons = [
    {
      title: 'Eco-Friendly',
      description: 'Committed to reducing plastic waste and promoting environmental sustainability.',
      icon: FaLeaf,
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      title: 'Premium Quality',
      description: 'Consistent, high-grade recycled plastic materials.',
      icon: FaStar,
      gradient: 'from-primary-400 to-cyan-500',
      bgGradient: 'from-primary-50 to-cyan-50',
    },
    {
      title: 'Advanced Processing',
      description: 'State-of-the-art grinding technology.',
      icon: FaCogs,
      gradient: 'from-teal-400 to-primary-500',
      bgGradient: 'from-teal-50 to-primary-50',
    },
    {
      title: 'Circular Economy',
      description: 'Leading the sustainable plastic revolution.',
      icon: FaRecycle,
      gradient: 'from-secondary-400 to-green-500',
      bgGradient: 'from-secondary-50 to-green-50',
    },
  ]

  return (
    <section id="why" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FaRecycle className="text-white text-2xl" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Dwarkesh Plastic?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to quality, sustainability, and innovation in plastic recycling.
          </p>
        </motion.div>

        {/* Reasons Grid with 3D Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index, type: "spring" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group perspective-1000"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${reason.bgGradient} border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    animate={hoveredCard === index ? { opacity: 1, scale: 1.5 } : { opacity: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-5`}
                  />

                  {/* Icon Circle with Advanced Effects */}
                  <div className="flex justify-center mb-6 relative">
                    <motion.div
                      animate={hoveredCard === index ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow relative z-10`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={hoveredCard === index ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl`}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm text-center">
                    {reason.description}
                  </p>

                  {/* Bottom Shine Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={hoveredCard === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} origin-left`}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
