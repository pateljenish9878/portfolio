'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden pt-20">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10">
        <div 
          className="absolute inset-0 bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-[calc(100vh-4rem)]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Jenish Patel</span>
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft modern web applications with a focus on user experience and clean code. 
            Let's build something amazing together.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-colors font-medium w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 