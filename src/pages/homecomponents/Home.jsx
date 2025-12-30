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
      className="
        mt-44
        w-[95%]
        lg:w-full
        lg:max-w-7xl
        mx-auto
        overflow-hidden
        rounded-2xl
        lg:rounded-[40px]
        bg-[#051139]
        relative
      "
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      >
        <source src={images.bgVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="
        relative z-10
        flex flex-col lg:flex-row
        items-center justify-between
        gap-10 lg:gap-16
        p-6 sm:p-8 md:p-14 lg:p-16
      ">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 text-left"
        >
          <motion.h4
            variants={fadeUp}
            className="
              text-[#00d1b2]
              font-bold
              tracking-[0.25em]
              text-xs sm:text-sm md:text-base
              uppercase
              mb-4 sm:mb-6
            "
          >
            Built for Modern Traders
          </motion.h4>

          {/* 🔥 ALTERNATIVE HEADING */}
          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="
              text-white
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold
              leading-tight
              mb-6 sm:mb-8
            "
          >
            Trade Smarter.  
            <br className="hidden sm:block" />
            Grow Faster with Global Market Access
          </motion.h1>

          {/* 🔥 ALTERNATIVE DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="
              text-gray-200
              text-base sm:text-lg md:text-xl
              max-w-xl
              mb-8 sm:mb-10
              leading-relaxed
            "
          >
            Unlock institutional-grade trading tools, ultra-fast execution,
            and transparent pricing across forex, indices, commodities,
            and crypto — all in one powerful platform.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-white
                text-[#051139]
                px-8 sm:px-10
                py-3 sm:py-4
                rounded-xl
                font-bold
                text-base sm:text-lg
                shadow-2xl
              "
            >
              Start Trading
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                border border-white/40
                text-white
                px-8 sm:px-10
                py-3 sm:py-4
                rounded-xl
                font-semibold
                text-base sm:text-lg
                backdrop-blur-sm
              "
            >
              Try Free Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column (Reserved / Illustration / Stats / Image) */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="w-full lg:w-1/2 hidden lg:block"
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
  className="
    mx-auto
    w-[95%]
    lg:w-full
    lg:max-w-7xl
    overflow-hidden
    rounded-2xl
    lg:rounded-[40px]
    bg-[#051139]
    p-6
    sm:p-8
    md:p-16
    lg:p-20
    my-10
    sm:my-14
    md:my-20
  "
>
  <div className="text-center">

    {/* Label */}
    <motion.p
      variants={fadeUp}
      className="text-[#00d1b2] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4"
    >
      Why Traders Choose Us
    </motion.p>

    {/* Heading */}
    <motion.h2
      variants={fadeUp}
      transition={{ delay: 0.1 }}
      className="
        text-2xl
        sm:text-3xl
        md:text-5xl
        font-bold
        text-white
        mb-12
        md:mb-20
        max-w-4xl
        mx-auto
      "
    >
      Experience Professional Trading with Advanced Tools and Global Access
    </motion.h2>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 sm:gap-y-20 md:gap-x-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          transition={{ delay: index * 0.15 }}
          className="
            relative
            bg-white
            rounded-2xl
            md:rounded-[32px]
            pt-16
            md:pt-20
            pb-10
            md:pb-12
            px-5
            md:px-6
            shadow-md
            flex
            flex-col
            items-center
          "
        >
          {/* Icon */}
          <div className="
            absolute
            -top-10
            md:-top-12
            left-1/2
            -translate-x-1/2
            w-20
            h-20
            md:w-28
            md:h-28
          ">
            <img
              src={feature.icon}
              alt={feature.alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-[#051139] text-lg md:text-2xl font-bold text-center">
            {feature.title}
          </h3>
        </motion.div>
      ))}
    </div>

    {/* Footer note */}
    <p className="mt-8 md:mt-12 text-gray-400 text-xs sm:text-sm">
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
