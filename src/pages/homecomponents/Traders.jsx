import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/data';




const Traders = () => {
  const [activeTab, setActiveTab] = useState('Stocks');


  const tabs = ['Forex', 'Indices', 'Stocks', 'Crypto'];

  return (
    <section
  className="
    bg-[#051139]
    w-[95%]
    lg:w-full
    lg:max-w-7xl
    mx-auto
    overflow-hidden
    rounded-2xl
    lg:rounded-[40px]
    p-6
    sm:p-8
    md:p-14
    lg:p-20
    my-10
    sm:my-14
    md:my-20
  "
>
  <div className="max-w-6xl mx-auto text-center">

    {/* Subheader */}
    <p className="text-[#00d1b2] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4">
      Empowering the Traders
    </p>

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 sm:mb-10">
      CFDs on
    </h2>

    {/* CATEGORY TABS (Scrollable on mobile) */}
    <div className="relative mb-10 sm:mb-12">
      <div className="
        inline-flex
        gap-2
        bg-white
        p-1.5
        sm:p-2
        rounded-full
        shadow-sm
        border border-gray-100
       
        max-w-full
      ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              whitespace-nowrap
              px-4 sm:px-6
              py-2 sm:py-2.5
              rounded-full
              text-xs sm:text-sm
              font-bold
              transition-all
              duration-300
              ${
                activeTab === tab
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

    {/* DYNAMIC CARD */}
    <div className="
      bg-white
      rounded-2xl
      md:rounded-[40px]
      shadow-[0_20px_60px_rgba(0,0,0,0.05)]
      overflow-hidden
      text-left
      p-5
      sm:p-6
      md:p-10
      border border-gray-50
    ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
            items-center
          "
        >
          {/* Left: Image */}
          <div className="relative rounded-xl sm:rounded-3xl overflow-hidden aspect-video lg:aspect-square">
            <img
              src={content[activeTab].image}
              alt={activeTab}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col h-full">
            {/* Table Header (hidden on mobile) */}
            <div className="hidden sm:grid grid-cols-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 md:mb-8">
              <span>Instrument</span>
              <span className="text-center">Buy</span>
              <span className="text-center">Sell</span>
              <span className="text-center">Change</span>
            </div>

            {/* Text */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#051139] mb-3 md:mb-4">
                {content[activeTab].title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {content[activeTab].desc}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-auto">
              <p className="text-[11px] text-gray-300 font-medium">
                *Indicative spread as in GenZBroking ECN Account
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
</section>

  );
};

export default Traders;