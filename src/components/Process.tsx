import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRecycle, FaCogs, FaCheckCircle } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      title: 'Source Material',
      description: 'We collect empty plastic cones from embroidery machines, preventing them from ending up in landfills.',
      icon: FaRecycle,
    },
    {
      title: 'Advanced Grinding',
      description: 'Our state-of-the-art grinding technology processes these cones into uniform, high-quality plastic granules.',
      icon: FaCogs,
    },
    {
      title: 'Quality Output',
      description: 'The result is premium recycled plastic ready for manufacturing and trading applications.',
      icon: FaCheckCircle,
    },
  ]

  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FaCogs className="text-white text-2xl" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Recycling Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specializing in the grinding of empty plastic cones from embroidery machines, we transform 
            industrial waste into high-quality recycled plastic materials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <div className="flex gap-4 p-6 bg-gradient-to-r from-white to-primary-50/30 rounded-2xl border-l-4 border-primary-600 shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Icon with Animation */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                      >
                        <Icon className="text-2xl" />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        {step.title}
                        <HiArrowRight className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-primary-400 to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Ground Plastic Image with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl blur-2xl"
            />

            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/ground-plastic.png"
                alt="High-quality ground plastic granules"
                className="w-full h-auto"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Label with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl shadow-xl"
              >
                <p className="text-sm font-bold text-primary-600">Ground Plastic</p>
                <p className="text-xs text-gray-600">Premium Quality</p>
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
            </motion.div>

            {/* Floating Quality Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-secondary-500 to-primary-600 text-white px-6 py-4 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-2xl" />
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs opacity-90">Quality</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
