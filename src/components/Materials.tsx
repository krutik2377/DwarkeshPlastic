import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaCheckCircle, FaCube } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function Materials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const materials = [
    {
      name: 'H.D (High Density)',
      description: 'High-quality high-density plastic grinding',
      icon: FaCube,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'P.P (Polypropylene)',
      description: 'Premium polypropylene recycled material',
      icon: HiSparkles,
      gradient: 'from-primary-500 to-teal-500',
    },
    {
      name: 'C.P (Copolymer)',
      description: 'Copolymer plastic grinding solutions',
      icon: FaCheckCircle,
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      name: 'Natural P.P',
      description: 'Natural polypropylene processing',
      icon: FaCube,
      gradient: 'from-green-500 to-lime-500',
    },
    {
      name: 'P.P Milk',
      description: 'Specialized PP milk grade materials',
      icon: HiSparkles,
      gradient: 'from-primary-600 to-cyan-600',
    },
    {
      name: 'Plastic Traders',
      description: 'Comprehensive solutions for plastic trading businesses',
      icon: FaCheckCircle,
      gradient: 'from-teal-600 to-green-600',
    },
  ]

  return (
    <section id="products" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#f5fffe' }} ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Materials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We process a wide range of plastic materials from embroidery machine cones, 
            delivering consistent quality for plastic traders and manufacturers.
          </p>
        </motion.div>

        {/* Materials Grid with Advanced Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => {
            const Icon = material.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index, type: "spring" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${material.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  }}
                  animate={hoveredIndex === index ? { x: [-200, 200] } : {}}
                  transition={{ duration: 0.8 }}
                />

                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-14 h-14 bg-gradient-to-br ${material.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="text-white text-xl relative z-10" />
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {material.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{material.description}</p>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${material.gradient} rounded-b-2xl origin-left`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
