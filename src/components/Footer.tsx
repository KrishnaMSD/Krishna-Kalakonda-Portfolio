import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'Plots', path: '/plots' },
    { name: 'Profile Preview', path: '/profile-preview' },
  ];

  const featuredProjects = [
    'Phone Verified Leads',
    'Conversation Intelligence',
    'ADHD Prediction',
    'Data Science Pipeline Tool'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-kalakonda/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/krishna-kalakonda', icon: Github },
    { name: 'Instagram', url: 'https://instagram.com/krishna-kalakonda', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Krishna Kalakonda
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full-stack data scientist with expertise in AI-driven tools, machine learning, and data analysis. 
              Currently pursuing Master's in Data Science at DePaul University.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Featured Projects</h4>
            <ul className="space-y-2">
              {featuredProjects.map((project) => (
                <li key={project}>
                  <Link 
                    to="/projects"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Krishna Kalakonda. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
