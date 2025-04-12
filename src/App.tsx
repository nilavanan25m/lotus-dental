import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import MeetOurTeam from './pages/MeetOurTeam';
import MeetTheDentist from './pages/MeetTheDentist';
import Contact from './pages/Contact';
import { Calendar, Users, Award, Stethoscope, Clock, Shield } from 'lucide-react';

function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-serif mb-6">Welcome to Lotus Dental Group</h1>
              <p className="text-xl mb-8">Experience exceptional dental care in a comfortable and modern environment. Your smile is our priority.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block bg-lotus-blue-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Schedule an Appointment
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-16 text-lotus-brown">Why Choose Lotus Dental Group?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Easy Scheduling", desc: "Convenient online booking and flexible appointment times" },
                { icon: Users, title: "Family-Friendly", desc: "Comprehensive care for patients of all ages" },
                { icon: Award, title: "Expert Team", desc: "Highly skilled and experienced dental professionals" },
                { icon: Stethoscope, title: "Modern Technology", desc: "State-of-the-art equipment and techniques" },
                { icon: Clock, title: "Extended Hours", desc: "Early morning and evening appointments available" },
                { icon: Shield, title: "Safety First", desc: "Strict sterilization and safety protocols" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-lotus-blue-light" />
                  <h3 className="text-xl font-semibold mb-2 text-lotus-brown">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-16 text-lotus-brown">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "General Dentistry",
                  image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200",
                  desc: "Comprehensive dental care including cleanings, fillings, and preventive treatments"
                },
                {
                  title: "Cosmetic Dentistry",
                  image: "https://images.unsplash.com/photo-1541604193435-22287d32c2c2?auto=format&fit=crop&q=80&w=1200",
                  desc: "Transform your smile with veneers, whitening, and other aesthetic treatments"
                },
                {
                  title: "Orthodontics",
                  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
                  desc: "Straighten your teeth with traditional braces or clear aligners"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-lotus-brown">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/services"
                      className="inline-block mt-4 text-lotus-blue-light font-semibold hover:text-opacity-80 transition-colors"
                    >
                      Learn More →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-20 bg-lotus-brown text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif mb-6">Ready to Schedule Your Visit?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the Lotus Dental Group difference. Contact us today to schedule your appointment.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-white text-lotus-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Us Now
            </motion.a>
          </div>
        </motion.section>
      </main>
      <StickyButton />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-our-team" element={<MeetOurTeam />} />
        <Route path="/meet-the-dentist" element={<MeetTheDentist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;