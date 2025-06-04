'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/pateljenish9878',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jenish-patel-9878/',
    icon: FiLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:pateljenish9878@gmail.com',
    icon: FiMail,
  },
  {
    name: 'Phone',
    url: 'tel:+919898989898',
    icon: FiPhone,
  },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Get In Touch</h2>
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
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="font-medium">{link.name}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Location</h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  Surat, Gujarat
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 space-y-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <motion.input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required={field === 'name' || field === 'email'}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder={field === 'email' ? 'your.email@example.com' : 'Your name'}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="+91 98765 43210"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-colors font-medium"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 