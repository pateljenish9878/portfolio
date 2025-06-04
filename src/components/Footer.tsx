'use client'

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/pateljenish9878',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/pateljenish44',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Jenish Patel. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 