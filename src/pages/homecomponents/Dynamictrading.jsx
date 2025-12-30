import React, { useState } from "react";
import { Monitor, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../assets/images";

const platforms = [
  { id: "web", label: "Web Trader", icon: Monitor },
  { id: "mt5", label: "MetaTrader 5", icon: Laptop },
];

const downloadOptions = [
  { name: "Download on the ", icon: images.appleStore, iconName: "App Store" },
  { name: "Get it on ", icon: images.googlePlay, iconName: "Google Play" },
  { name: "Download on ", icon: images.window, iconName: "Windows" },
  { name: "Download on ", icon: images.mac, iconName: "Mac" },
];

const Dynamictrading = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
 <div className="
  min-h-screen
  flex
  justify-center
  items-center
  bg-gradient-to-r
  from-[#0b2a55]
  via-[#0e3b78]
  to-[#081a36]
  px-4
  sm:px-6
  md:px-10
  py-12
">
  <div className="w-full max-w-7xl">

    {/* ================= HEADER ================= */}
    <div className="text-center mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#00d1b2] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4"
      >
        Built for Modern Traders
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          text-white
          mb-6 md:mb-8
        "
      >
        Trade on Powerful, Flexible Platforms
      </motion.h2>

      {/* ================= TAB SELECTOR ================= */}
      <div className="
        inline-flex
        bg-white/10
        backdrop-blur-md
        p-1.5
        rounded-full
        border border-white/20
        overflow-x-auto
        scrollbar-hide
        max-w-full
      ">
        {platforms.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex
                items-center
                gap-2
                whitespace-nowrap
                px-4 sm:px-5 md:px-6
                py-2
                rounded-full
                text-xs sm:text-sm md:text-base
                font-semibold
                transition-all
                ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>

    {/* ================= PLATFORM CARDS ================= */}
    <AnimatePresence mode="wait">

      {/* ===== WEB TRADER ===== */}
      {activeTab === "web" && (
        <motion.div
          key="web-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="
            w-full
            md:w-[90%]
            mx-auto
            rounded-2xl
            md:rounded-[32px]
            p-5
            sm:p-6
            md:p-10
            lg:p-16
            bg-gradient-to-r
            from-[#134583]
            via-[#143357]
            to-[#17232C]
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
            text-white
          "
        >
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            >
              Instant Trading via Web Platform
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed"
            >
              Trade directly from your browser with zero downloads.
              Our Web Trader delivers lightning-fast execution, real-time
              charts, and complete control across global markets.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              <Monitor size={18} />
              Launch Web Trader
            </motion.button>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src={images.webTrader}
              alt="Web Trading Platform"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] object-contain"
            />
          </motion.div>
        </motion.div>
      )}

      {/* ===== MT5 ===== */}
      {activeTab === "mt5" && (
        <motion.div
          key="mt5-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="
            w-full
            md:w-[90%]
            mx-auto
            rounded-2xl
            md:rounded-[32px]
            p-5
            sm:p-6
            md:p-10
            lg:p-16
            bg-gradient-to-r
            from-[#134583]
            via-[#143357]
            to-[#17232C]
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
            text-white
          "
        >
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            >
              Advanced Trading with MetaTrader 5
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed"
            >
              MetaTrader 5 offers professional-grade tools including
              advanced charting, algorithmic trading, and multi-asset
              execution — trusted by traders worldwide.
            </motion.p>

            {/* Download Options */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto md:mx-0">
              {downloadOptions.map((option, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-white
                    text-black
                    py-3
                    px-4
                    rounded-xl
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                >
                  <img src={option.icon} alt={option.name} className="w-8 h-8 object-contain" />
                  <div className="leading-tight">
                    <span className="text-xs text-gray-500">{option.name}</span>
                    <p className="text-sm font-semibold">{option.iconName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src={images.mobileTrader}
              alt="MetaTrader 5"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] rounded-xl shadow-md object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* ================= CTA ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-10 sm:mt-12 flex justify-center"
    >
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
        Explore All Trading Platforms
      </button>
    </motion.div>

  </div>
</div>

  );
};

export default Dynamictrading;
