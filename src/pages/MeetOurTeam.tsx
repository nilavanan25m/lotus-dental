import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Dental Hygienist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
      description: "With over 10 years of experience in dental hygiene, Dr. Chen leads our hygiene department with expertise and compassion. She specializes in preventive care and patient education."
    },
    {
      name: "Jessica Martinez",
      role: "Dental Assistant",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800",
      description: "Jessica has been with Lotus Dental Group for 5 years, bringing warmth and efficiency to every patient interaction. She's certified in advanced dental assisting techniques."
    },
    {
      name: "Michael Thompson",
      role: "Office Manager",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
      description: "Michael ensures our practice runs smoothly, handling everything from scheduling to insurance coordination. His dedication to patient satisfaction is unmatched."
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
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif text-gray-900 mb-4">Meet Our Team</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our experienced team of dental professionals is committed to providing you with the highest quality care in a comfortable and welcoming environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're always looking for talented and passionate dental professionals to join our team. If you're interested in becoming part of Lotus Dental Group, please send your resume to careers@lotusdentalgroup.com
              </p>
              <a
                href="mailto:careers@lotusdentalgroup.com"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Us About Careers
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>
     
    </div>
  );
};

export default MeetOurTeam;