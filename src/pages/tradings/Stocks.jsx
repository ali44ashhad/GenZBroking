import React, { useState } from 'react'
import { Globe, BarChart3,   UserPlus,
  Settings,
  Wallet,
  Activity, } from 'lucide-react';
import { stocksData, brands } from '../../data/data';
import { motion, AnimatePresence } from "framer-motion";
import Fund from '../../components/Fund';
import StartTrading from '../homecomponents/StartTrading';
import images from '../../assets/images';


const Stocks = () => {
  const [activeTab, setActiveTab] = useState("Desktop");


  return (
   <>
         <div className="flex items-center justify-center h-200 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#003B95] to-[#001A4D] px-6 py-16 md:py-24 text-center shadow-2xl">
        
        {/* Background Decorative Icons - Hidden on small screens for cleaner UI */}
        <div className="absolute left-[-20px] top-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 rotate-12">
            <Globe size={80} className="text-cyan-400" />
          </div>
        </div>

        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 -rotate-12">
            <BarChart3 size={100} className="text-cyan-400" />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          {/* Top Label */}
         <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
        Stay Informed on Global Trading Holidays
      </span>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
        Global Trading Holiday Schedule for 2025
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
        Markets don’t close often, but when they do, it pays to know in advance.
        The GenZBroking holiday trading schedule helps you stay on top of global
        holidays, early closes, and those outlier days when the timing shifts.
        Get ready to start making the most of holiday trading with GenZBroking.
      </p>
        </div>
      </div>
    </div>  


    {/* second section */}
   <div className="flex items-center justify-center px-4 py-16">
  <div className="max-w-7xl w-full bg-gray-50 rounded-[40px] p-8 md:p-20 text-center">

    <header className="mb-14">
      <p className="text-[#00F2A9] font-bold tracking-widest text-xs md:text-sm mb-4">
        NEXT-GEN TRADING PLATFORM
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Traders Choose genzBroking
      </h2>
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base md:text-lg">
        Designed for modern investors, genzBroking blends speed, simplicity,
        and professional-grade tools into one powerful trading experience.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stocksData.map((feature, index) => (
        <div
          key={index}
          className={`${feature.bgGradient} rounded-[30px] p-8 h-auto min-h-[220px] flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition`}
        >
          <h3 className="text-4xl font-bold mb-3">{feature.title}</h3>
          <p className="text-sm font-medium text-center px-4">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>




    {/* third section */}

    <section className="bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">

    <p className="text-[#00F2A9] font-semibold tracking-[0.25em] text-xs uppercase mb-6">
      Invest Globally
    </p>

    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
      Own Shares in World-Leading Companies
    </h2>

    <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-14">
      Start investing with just $100. Buy fractional or full shares of
      global giants like Apple, Google, Tesla, Amazon and more — all through genzBroking.
    </p>

    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-2xl p-5 w-32 h-20 md:w-44 md:h-24 flex items-center justify-center hover:shadow-md transition"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      ))}
    </div>
  </div>
</section>



    {/* fourth section */}
    <div className="max-w-7xl mx-auto my-16 px-4">
  <div className="relative rounded-[32px] p-8 md:p-14 bg-gradient-to-tr from-[#050b18] via-[#0e3b78] to-[#050b18] border border-white/10 shadow-xl">

    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10"
      >

        {/* LEFT */}
        <div className="lg:col-span-5 text-white">
          <h3 className="text-5xl font-bold mb-2">genzBroking</h3>
          <h2 className="text-3xl text-white/70 mb-6">
            Trade Anywhere. Anytime. On Any Device.
          </h2>

          <p className="text-sm text-white/80 mb-8 max-w-md">
            Experience seamless multi-asset trading with genzBroking’s advanced platform.
            Enjoy real-time analytics, smart charting tools, automated strategies,
            and ultra-fast order execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            {["App Store", "Google Play", "Windows", "Mac"].map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Available on</p>
                  <p className="text-sm font-bold text-black">{item}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 flex justify-center">
          <img
            src={images.metaTrader5}
            alt="Trading Platform"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

      </motion.div>
    </AnimatePresence>

  </div>
</div>




      {/* trading 5th section */}
    <StartTrading/>

    <Fund/>
   </>
  )
}

export default Stocks