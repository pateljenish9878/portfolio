'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'BookMyShow Clone',
    subtitle: 'Node.js, Express, MongoDB',
    description: 'A full-featured movie ticket booking platform with dynamic listings, secure bookings, and an intuitive admin panel. Built with Node.js and Express for robust backend functionality, MongoDB for flexible data storage, and EJS for server-side rendering. Features include user authentication, real-time seat selection, and comprehensive booking management.',
    image: require('../images/bookmyshow.jpg'),
    technologies: ['NodeJs', 'ExpressJs', 'MongoDb', 'Ejs', 'Multer', 'PassportJs'],
    github: 'https://github.com/pateljenish9878/BookMyShow-Clone',
    live: 'https://bookmyshow-clone-usf4.onrender.com/',
  },
  {
    title: 'Recipe Website',
    subtitle: 'React.js, Redux, Firebase',
    description: 'A modern recipe discovery platform that helps users find and explore new recipes. Built with React.js and Redux for state management, featuring real-time search, category filtering, and detailed recipe views. Integrated with Firebase for authentication and data storage, ensuring a seamless user experience.',
    image: require('../images/rawcips.jpg'),
    technologies: ['React', 'Redux', 'Firebase', 'Api', 'Material-UI'],
    github: 'https://github.com/pateljenish9878/Rawcips',
    live: 'https://recipe-3606b.web.app/',
  },
  {
    title: 'Restaurant Management System',
    subtitle: 'PHP, MySQL, Laravel',
    description: 'A comprehensive food ordering and management system with features for both customers and administrators. Built with PHP and Laravel, featuring user registration, menu management, cart functionality, and order tracking. Includes a powerful admin panel for managing food items, categories, and orders.',
    image: require('../images/frozenfry.jpg'),
    technologies: ['PHP', 'MySQL', 'Laravel', 'Bootstrap', 'JQuery', 'Ajax'],
    github: 'https://github.com/pateljenish9878/Frozen-N-Fry',
    live: 'http://frozenfry.duckdns.org/',
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Featured Projects</h2>
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
              Explore my recent work showcasing full-stack development expertise and innovative solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                <motion.div 
                  className="relative aspect-[16/9] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700"
                    priority={index === 0}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-600/90 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{project.subtitle}</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) + (techIndex * 0.1) }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 font-medium group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-colors duration-300 font-medium group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 