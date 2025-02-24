import React from 'react';
import { motion } from 'framer-motion'; // For animations
import Navbar from '../../components/Navbar';
import eventBg from '../../images/bg/events/section-bg-17-g.png';
import culturalImg from '../../images/bg/events/cultural.jpg';
import hackathonImg from '../../images/bg/events/Hackathon.jpg';
import CompetetionsImg from '../../images/bg/events/competitions.jpg';
import esportsImg from '../../images/bg/events/esports.jpg';
import funzoneImg from '../../images/bg/events/funzone.jpg';
import discussionsImg from '../../images/bg/events/discussions.jpg';
import workshopsImg from '../../images/bg/events/workshops.jpg';

const Event = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: 'Cultural',
      description: 'Experience the vibrant cultures from around the world.',
      image: culturalImg,
    },
    {
      id: 2,
      title: 'Hackathon',
      description: 'Build innovative solutions and compete with the best.',
      image: hackathonImg,
    },
    {
      id: 3,
      title: 'Funzone',
      description: 'Enjoy live performances from top artists.',
      image: funzoneImg,
    },
    {
      id: 4,
      title: 'Discussions',
      description: 'Engage in thought-provoking discussions with experts.',
      image: discussionsImg,
    },
    {
      id: 5,
      title: 'Workshops',
      description: 'Learn new skills through hands-on workshops.',
      image: workshopsImg,
    },
    {
      id: 6,
      title: 'Esports',
      description: 'Compete in thrilling esports tournaments.',
      image: esportsImg,
    },
    {
      id: 7,
      title: 'Competitions',
      description: 'Participate in exciting competitions and win prizes.',
      image: CompetetionsImg,
    },
  ];

  return (
    <div className='min-h-screen relative bg-zinc-950'>
      <Navbar />

      {/* Background Image with Blur */}
      <div className='h-screen absolute w-full overflow-hidden'>
        <img
          src={eventBg}
          alt="Event Background"
          className='h-screen w-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div> {/* Blur overlay */}
      </div>

      {/* Content */}
      <motion.div
        className='relative z-10 pt-24 pb-12 px-4 sm:px-8 lg:px-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Page Title */}
        <motion.h2
          className='text-center uppercase text-5xl md:text-6xl font-extrabold text-white mb-12 f2'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Events
        </motion.h2>

        {/* Event Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-6 space-y-10'>
          {events.map((event) => (
            <motion.div
              key={event.id}
              className='relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
              whileHover={{ scale: 1.05 }} // Hover effect
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className='w-full h-60 object-cover'
              />

              {/* Gradient Overlay for Title */}
              <div className='absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent'></div>

              {/* Event Title */}
              <h3 className='absolute bottom-4 left-4 text-3xl font-bold text-slate-200 f2'>
                {event.title}
              </h3>

              {/* Event Description (Visible on Hover) */}
              <div className='absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6'>
                <p className='text-zinc-300 text-center f1'>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Event;