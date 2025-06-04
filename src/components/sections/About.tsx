'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiCode, FiAward } from 'react-icons/fi'

const stats = [
  {
    label: 'Education',
    value: 'B.Tech',
    description: 'Computer Science & Engineering',
    icon: FiBook,
  },
  {
    label: 'Projects',
    value: '10+',
    description: 'Full Stack Applications',
    icon: FiCode,
  },
  {
    label: 'Certifications',
    value: '5+',
    description: 'Professional Certifications',
    icon: FiAward,
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">About Me</h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get to know more about my journey, experience, and what drives me as a developer
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                My journey in web development started with a curiosity for creating interactive and user-friendly applications.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                With expertise in modern JavaScript frameworks, cloud technologies, and database management, 
                I strive to build scalable and efficient solutions that solve real-world problems.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 font-medium"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-500 dark:text-gray-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      {stat.description}
                    </motion.p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 