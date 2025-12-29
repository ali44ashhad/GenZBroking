import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react';
import { features, tickerItems } from '../../data/data' 
import Traders from './Traders';
import Dynamictrading from './Dynamictrading';
import Upgrade from './Upgrade';
import StartTrading from './StartTrading';
import Fund from '../../components/Fund';
import images from '../../assets/images';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {

  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="mt-50 mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#051139] relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        >
          <source src={images.bgVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-8 md:p-16">
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 text-left"
          >
            <motion.h4
              variants={fadeUp}
              className="text-[#00d1b2] font-bold tracking-[0.25em] text-sm md:text-base uppercase mb-6"
            >
              Smart Trading Starts Here
            </motion.h4>

            <motion.h1
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8"
            >
              Trade Global Markets with Confidence and Precision
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Access a powerful trading ecosystem built for speed, transparency,
              and performance—designed for traders who demand more from every move.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#051139] px-10 py-4 rounded-xl font-bold text-lg shadow-2xl"
            >
              Start Trading Now
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-1/2"
          />
        </div>
      </motion.div>

      {/* ================= SECOND SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#051139] p-8 md:p-16 lg:p-20 m-20"
      >
        <div className="text-center">
          <motion.p variants={fadeUp} className="text-[#00d1b2] font-bold tracking-widest text-sm uppercase mb-4">
            Why Traders Choose Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#051139] mb-20 max-w-4xl mx-auto"
          >
            Experience Professional Trading with Advanced Tools and Global Access
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                className="relative bg-white rounded-[32px] pt-20 pb-12 px-6 shadow-md flex flex-col items-center"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28">
                  <img src={feature.icon} alt={feature.alt} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-[#051139] text-xl md:text-2xl font-bold text-center">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-gray-400 text-sm">
            ** Terms may vary by instrument and region
          </p>
        </div>
      </motion.section>

      {/* ================= THIRD SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-white py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.p variants={fadeUp} className="text-[#00d1b2] font-bold tracking-widest text-sm uppercase mb-4">
            Trade Smarter
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#051139] mb-6"
          >
            All-in-One Platform for Modern Traders
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            From real-time execution to institutional-grade liquidity,
            our platform supports fast, informed, and flexible trading decisions.
          </motion.p>
        </div>

   <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="relative overflow-hidden w-full"
>
  <motion.div
    className="flex items-center gap-4 w-max"
    initial={{ x: 0 }}              // 👈 tiles visible initially
    animate={{ x: "-50%" }}         // 👈 scroll right → left
    transition={{
      duration: 30,                 // speed (increase = slower)
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {/* FIRST SET */}
    {duplicatedItems.map((item, index) => (
      <div
        key={`item-${index}`}
        className={`flex items-center gap-3 px-6 py-3 rounded-full border whitespace-nowrap
          ${item.dark ? "bg-[#2b50ed] text-white" : "bg-white text-gray-800"}
        `}
      >
        <CheckCircle2
          size={20}
          className={item.dark ? "text-white" : "text-[#2b50ed]"}
        />
        <span className="font-semibold text-sm md:text-base">
          {item.text}
        </span>
      </div>
    ))}

    {/* DUPLICATE SET (for seamless loop) */}
    {duplicatedItems.map((item, index) => (
      <div
        key={`dup-${index}`}
        className={`flex items-center gap-3 px-6 py-3 rounded-full border whitespace-nowrap
          ${item.dark ? "bg-[#2b50ed] text-white" : "bg-white text-gray-800"}
        `}
      >
        <CheckCircle2
          size={20}
          className={item.dark ? "text-white" : "text-[#2b50ed]"}
        />
        <span className="font-semibold text-sm md:text-base">
          {item.text}
        </span>
      </div>
    ))}
  </motion.div>
</motion.div>
    
      </motion.section>

      {/* ================= FOURTH SECTION ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className=" bg-white flex flex-col items-center p-4 md:p-12"
      >
        <motion.header variants={fadeUp} className="text-center mb-10">
          <p className="text-teal-500 tracking-widest text-sm uppercase mb-2">
            Market Pulse
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Stay Ahead of Market Movements in Real Time
          </h1>
        </motion.header>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl rounded-xl overflow-hidden border-4 border-gray-100"
        >
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Platform Walkthrough"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-8 text-gray-400 text-sm"
        >
          Daily Market Insights • Global Coverage • Expert Analysis
        </motion.div>
      </motion.div>

      {/* ================= OTHER COMPONENTS ================= */}
      <Traders />
      <Dynamictrading />
      <Upgrade />
      <StartTrading />
      <Fund />
    </>
  )
}

export default Home
