'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiCpu, FiLayout, FiTool } from 'react-icons/fi'

const skills = [
  {
    category: 'Frontend Development',
    description: 'Building modern, responsive user interfaces with cutting-edge technologies',
    icon: FiCode,
    technologies: [
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React.js', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend Development',
    description: 'Creating robust server-side applications and RESTful APIs',
    icon: FiServer,
    technologies: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'Laravel', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
    ],
  },
  {
    category: 'AI Tools',
    description: 'Leveraging artificial intelligence to enhance development and creativity',
    icon: FiCpu,
    technologies: [
      { name: 'OpenAI', level: 'Advanced' },
      { name: 'Google Gemini', level: 'Advanced' },
      { name: 'Claude', level: 'Advanced' },
      { name: 'Adobe AI', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Technologies',
    description: 'Essential tools and technologies for modern development',
    icon: FiTool,
    technologies: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Photoshop', level: 'Intermediate' },
    ],
  },
  {
    category: 'Soft Skills',
    description: 'Professional skills that complement technical expertise',
    icon: FiLayout,
    technologies: [
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Team Collaboration', level: 'Advanced' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'Time Management', level: 'Advanced' },
      { name: 'Adaptability', level: 'Advanced' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-24 relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Skills & Expertise</h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive overview of my technical skills and areas of expertise
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {skill.category}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {skill.description}
                  </motion.p>
                  
                  <div className="space-y-4">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) + (techIndex * 0.1) }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                        <motion.span 
                          className="px-3 py-1 text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech.level}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 