import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Navbar from '../components/Navbar';
import jeep from '../images/bg/jeep.png';
import { FaArrowDown } from 'react-icons/fa';
import bgVideo from '../assets/bg_video.mp4';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play video as soon as component mounts
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Video autoplay failed:", err);
        }
      };
      playVideo();
    }
  }, []);

  // Transform scroll progress into opacity for fade effects
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1.2, // Slightly longer duration for a smooth effect
      },
    },
  };

  // Individual item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Enhanced scroll down animation
  const scrollDownVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Button hover animation
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const sponsorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: custom => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: custom * 0.2,
        duration: 0.4, 
        type: "spring",
        stiffness: 100 
      }
    })
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: custom => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.4, 
        ease: "easeOut" 
      }
    })
  };

  // const buttonVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: { 
  //     opacity: 1, 
  //     scale: 1,
  //     transition: { 
  //       delay: 0.4,
  //       duration: 0.5,
  //       type: "spring",
  //       stiffness: 120,
  //       damping: 10
  //     }
  //   },
  //   hover: {
  //     scale: 1.05,
  //     backgroundColor: "#22c55e", // Brighter green on hover
  //     boxShadow: "0px 5px 15px rgba(34, 197, 94, 0.4)",
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />

      {/* Ensure content appears after loading */}
      <motion.div
        className="relative flex justify-center flex-col h-screen items-center gap-3 bg-zinc-900 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Triggers immediately when the page loads
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          preload="auto"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Fade-In */}
        <motion.div
          className="absolute inset-0 bg-black z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-white f2 p-0 mb-2 relative z-10"
          variants={itemVariants}
          animate={{
            opacity: [0.8, 1, 0.8],
            textShadow: [
              "0px 0px 4px rgba(255,255,255,0.6)",
              "0px 0px 8px rgba(255,255,255,0.8)",
              "0px 0px 12px rgba(255,255,255,0.6)",
              "0px 0px 16px rgba(255,255,255,0.4)",
              "0px 0px 20px rgba(255,255,255,0.2)"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-100 text-transparent bg-clip-text f2">
            FUGENIZ.XI
          </span>
        </motion.h2>

        <motion.p
          className="uppercase text-slate-300 text-sm p-0 f2 tracking-wider z-20"
          variants={itemVariants}
        >
          Future Generation of Engineers
        </motion.p>

        {/* Animated Buttons */}
        <motion.div className="flex gap-4 mt-1 z-20" variants={itemVariants}>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-50}
            className="px-6 py-3 rounded-full f1 border-2 border-white bg-white font-semibold text-zinc-900 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-white/20"
          >
            Get Started
          </Link>

          <Link
            to="events"
            smooth={true}
            duration={800}
            offset={-50}
            className="px-6 py-3 font-bold rounded-full f1 border-2 border-white text-white bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 transition-all shadow-lg hover:shadow-white/20"
          >
            Events
          </Link>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-white text-2xl animate-pulse" />
          <span className="text-white text-sm font-light tracking-wider">
            Scroll Down
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        id="about"
        className="relative flex justify-center flex-col h-screen items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${jeep})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

        <motion.p
          className="relative text-4xl md:text-5xl font-extrabold text-white f2 p-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          ABOUT
        </motion.p>

        <motion.p
          className="relative text-slate-200 text-sm md:text-lg px-4 text-center md:px-24 lg:px-48 f1 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Fugeniz X is an electrifying tech-centric college fest that celebrates innovation and imagination. It offers hackathons, coding marathons, and workshops, fostering a culture of innovation. Participants are encouraged to push the boundaries of what's possible and bridge the gap between theory and practice through hands-on experiences. Gamers can enjoy thrilling tournaments in the gaming arena, catering to casual gamers and esports enthusiasts alike. FugenizX invites everyone to be part of the technological revolution, daring to dream, innovate, and transcend boundaries, shaping the future today.
        </motion.p>
      </motion.div>

      <motion.div
        id="events"
        className="relative flex justify-center flex-col h-screen items-center gap-6 bg-zinc-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <motion.p
          className="relative text-4xl md:text-5xl font-extrabold text-white f2 p-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="border-b-2 border-green-500 pb-2">THEME</span>
        </motion.p>

        <motion.p
          className="relative text-slate-200 italic text-lg md:text-xl px-4 text-center md:px-12 f1"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          "Green Technology Sustaining Innovation:
          <br />
          Highlight Sustainable and Eco-friendly Technology"
        </motion.p>

        <motion.p
          className="relative text-green-500 text-sm md:text-lg px-4 text-center md:px-24 lg:px-48 f1 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Sustainable and eco-friendly technology plays a pivotal role in enhancing the significance of Fugeniz X Tech Fest. It not only aligns with the fest's core values of innovation and progress but also underscores the importance of responsible technological advancement. By showcasing cutting-edge green tech solutions, the fest empowers attendees to appreciate the potential of environmentally friendly innovations. These technologies offer solutions to pressing global challenges, from renewable energy to waste reduction, fostering a sense of responsibility towards our planet. In essence, they transform the tech fest into a catalyst for both learning and action, emphasizing the crucial role sustainability plays in our future.
        </motion.p>
      </motion.div>
      {/* Events Section - Add this after the theme section */}
      <motion.div
        className="w-full mt-12 px-4 z-20"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <h2 className='f2 text-4xl md:text-5xl font-bold text-white text-center mb-4'>Events</h2>
        <div className="overflow-x-auto pb-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4">
            {/* Hackathon */}
            <motion.div
              className="flex flex-col items-center p-6 bg-zinc-800/70 rounded-xl border border-zinc-700"
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.1)" }}
            >
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Hackathon</h3>
              <p className="text-zinc-400 text-sm text-center">Code. Create. Conquer.</p>
            </motion.div>

            {/* Workshops */}
            <motion.div
              className="flex flex-col items-center p-6 bg-zinc-800/70 rounded-xl border border-zinc-700 "
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.1)" }}
            >
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Workshops</h3>
              <p className="text-zinc-400 text-sm text-center">Learn. Apply. Master.</p>
            </motion.div>

            {/* Funzone */}
            <motion.div
              className="flex flex-col items-center p-6 bg-zinc-800/70 rounded-xl border border-zinc-700 "
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.1)" }}
            >
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Funzone</h3>
              <p className="text-zinc-400 text-sm text-center">Play. Enjoy. Unwind.</p>
            </motion.div>

            {/* Cultural */}
            <motion.div
              className="flex flex-col items-center p-6 bg-zinc-800/70 rounded-xl border border-zinc-700 "
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.1)" }}
            >
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Cultural</h3>
              <p className="text-zinc-400 text-sm text-center">Express. Inspire. Connect.</p>
            </motion.div>

            {/* ESports */}
            <motion.div
              className="flex flex-col items-center p-6 bg-zinc-800/70 rounded-xl border border-zinc-700 "
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.1)" }}
            >
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17.25v1.007a2 2 0 01-.879 1.648l-6 3.844 8-8 8 8-6-3.844A2 2 0 0113 18.257v-1.007l-2-2zm6.249-9.55a2 2 0 00-1.249-1.249l-7.5-2.5a2 2 0 00-1.249 0l-7.5 2.5A2 2 0 001 8.749v3.5C1 17.145 5.57 20.75 10.5 20.75s9.5-3.605 9.5-8.501v-3.5a2 2 0 00-.751-1.549z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">ESports</h3>
              <p className="text-zinc-400 text-sm text-center">Game. Compete. Triumph.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Event Page Button */}
      <div className="flex justify-center pb-6" >
      <motion.div
        className="mt-8 w-48 flex justify-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        <Link
          to="/events"
          className="px-8 py-4 rounded-full f1 border-2 border-green-500 text-white bg-green-900/30 hover:bg-green-800/50 transition-all shadow-lg hover:shadow-green-500/20 flex items-center gap-2"
        >
          {/* <span className="font-bold">Event Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg> */}
          Event Page
        </Link>
      </motion.div>
      </div>
      {/* Sponsors Section with Animations */}
      <motion.section 
        className="bg-zinc-900 text-white py-16 px-4 text-center relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <motion.h2 
          className="text-4xl font-bold mb-10 relative f2 "
          variants={titleVariants}
        >
          Our Sponsors
          <motion.div 
            className="h-1 w-20 bg-green-500 rounded-full mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:shadow-2xl"
            variants={sponsorVariants}
            custom={0}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img src="/sponsor1.png" alt="Sponsor 1" className="h-24" />
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:shadow-2xl"
            variants={sponsorVariants}
            custom={1}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img src="/sponsor2.png" alt="Sponsor 2" className="h-24" />
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:shadow-2xl"
            variants={sponsorVariants}
            custom={2}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img src="/sponsor3.png" alt="Sponsor 3" className="h-24" />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer with Animated Contact Form */}
      <motion.footer 
        className="bg-zinc-950 text-white py-16 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        id='contact'
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-4xl mx-auto text-center f1">
          <motion.h2 
            className="text-3xl font-bold mb-8 relative inline-block f1"
            variants={titleVariants}
          >
            Contact Us
            <motion.div 
              className="h-1 w-16 bg-green-500 rounded-full mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <form className="space-y-5">
            <motion.div
              variants={formItemVariants}
              custom={0}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              />
            </motion.div>

            <motion.div
              variants={formItemVariants}
              custom={1}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              />
            </motion.div>

            <motion.div
              variants={formItemVariants}
              custom={2}
            >
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Social links with hover animations */}
          <motion.div 
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {['twitter', 'facebook', 'instagram'].map((social, index) => (
              <motion.a
                key={social}
                href={`#${social}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <span className="sr-only">{social}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;