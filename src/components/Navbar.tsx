import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    "Tooth Color Fillings",
    "Invisalign",
    "Crowns & Bridges",
    "Extractions",
    "Hygiene Services",
    "Dental Implants",
    "Cosmetic Dentistry",
    "TMJ (TMD) Therapy",
    "Teeth Whitening",
    "Night Guards",
    "Emergency Dentistry"
  ];

  const aboutLinks = [
    { title: "Meet the Dentist", href: "/meet-the-dentist" },
    { title: "Meet Our Team", href: "/meet-our-team" }
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.2,
        ease: "easeOut" 
      } 
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  let dropdownTimer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (dropdown: string) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Lotus Dental Group" className="h-12" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-lotus-blue-light transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-600 hover:text-lotus-blue-light transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl py-2"
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-600 hover:text-lotus-blue-light transition-colors">
                About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl py-2"
                >
                  {aboutLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link to="/contact" className="text-lotus-blue-light hover:text-lotus-blue-light transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;