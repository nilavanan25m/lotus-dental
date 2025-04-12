import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, GraduationCap, Heart, Users } from 'lucide-react';

const MeetTheDentist = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Doctor of Dental Surgery (DDS) from University of California, San Francisco"
    },
    {
      icon: Award,
      title: "Experience",
      description: "Over 15 years of clinical experience in general and cosmetic dentistry"
    },
    {
      icon: Users,
      title: "Professional Memberships",
      description: "American Dental Association, California Dental Association"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Regular volunteer at local dental clinics and community health events"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
     
      <main className="flex-grow">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr. James Wilson"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl font-serif text-gray-900 mb-4">Dr. James Wilson, DDS</h1>
                <p className="text-xl text-blue-600 mb-6">Founder & Lead Dentist</p>
                <p className="text-gray-600 mb-6">
                  Welcome to Lotus Dental Group! I'm Dr. James Wilson, and I've dedicated my career to creating beautiful, healthy smiles. My approach to dentistry combines the latest technological advances with a gentle, patient-centered focus.
                </p>
                <p className="text-gray-600">
                  I believe in treating each patient as a unique individual, taking the time to understand their specific needs and concerns. My goal is not just to provide exceptional dental care, but to build lasting relationships with my patients and their families.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-600 text-white rounded-lg p-8 text-center"
            >
              <h2 className="text-3xl font-serif mb-4">Schedule a Consultation</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                I'd love to meet you and discuss how we can help achieve your dental health goals. Contact us today to schedule your consultation.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Book an Appointment
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
    </div>
  );
};

export default MeetTheDentist;