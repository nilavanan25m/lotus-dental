import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@lotusdentalgroup.com",
      link: "mailto:info@lotusdentalgroup.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9am-6pm",
      link: null
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Smile Street, San Francisco, CA 94105",
      link: "https://maps.google.com"
    }
  ];

  return (
    <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions about our services or to schedule an appointment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Services</h2>
              <p className="text-gray-600 mb-4">
                For dental emergencies outside of regular business hours, please call our emergency line:
              </p>
              <a
                href="tel:+15551239999"
                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                (555) 123-9999
              </a>
            </div>
          </motion.div>
        </div>

        <Map />
      </div>
    </main>
  );
};

export default Contact;