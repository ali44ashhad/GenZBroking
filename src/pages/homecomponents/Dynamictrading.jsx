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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#0b2a55] via-[#0e3b78] to-[#081a36] px-4 md:px-8 py-12">
      <div className="w-full max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#00d1b2] text-xs md:text-sm font-bold tracking-widest uppercase mb-4"
          >
            Trade Smarter. Trade SGFX.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Dynamic Trading Platforms
          </motion.h2>

          {/* TAB SELECTOR */}
          <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 overflow-hidden">
            {platforms.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-black text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= ANIMATED INNER CARD ================= */}
        <AnimatePresence mode="wait">
          {activeTab === "web" && (
            <motion.div
              key="web-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:w-[90%] mx-auto rounded-[32px] p-6 md:p-10 lg:p-16 bg-gradient-to-r from-[#134583] via-[#143357] to-[#17232C] overflow-hidden flex flex-col md:flex-row items-center justify-between text-white gap-6"
            >
              {/* Left Content */}
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                >
                  Experience seamless trading with SGFX
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm md:text-base text-white/80 mb-6"
                >
                  Trade instantly from your browser with our advanced Web Trader platform. 
                  No downloads, no delays — full market access anywhere.
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  <Monitor size={20} /> Web Trader
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
                  alt="Web Trader"
                  className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] object-contain"
                />
              </motion.div>
            </motion.div>
          )}

          {activeTab === "mt5" && (
            <motion.div
              key="mt5-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[90%] mx-auto bg-gradient-to-r from-[#134583] via-[#143357] to-[#17232C] rounded-[32px] shadow-lg p-6 md:p-10 lg:p-16 flex flex-col md:flex-row gap-6 md:gap-10 items-center"
            >
              {/* Left Content */}
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                >
                  Trade with SGFX on MetaTrader 5 Platform
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white text-sm md:text-base leading-relaxed"
                >
                  MetaTrader 5 (MT5) is a leading, multi-asset trading solution trusted worldwide. 
                  It combines high-speed performance with professional-grade strategic tools, ideal 
                  for beginners and advanced users.
                </motion.p>

                {/* Download Blocks */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4 w-full max-w-md"
                >
                  {downloadOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-100 text-black py-4 px-4 rounded-xl transition hover:scale-105 cursor-pointer"
                    >
                      <img src={option.icon} alt={option.name} className="w-8 h-8 object-contain" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs text-gray-600">{option.name}</span>
                        <p className="text-sm font-semibold">{option.iconName}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:w-1/2 flex justify-center md:justify-end"
              >
                <img
                  src={images.mobileTrader}
                  alt="MetaTrader 5 Platform"
                  className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] rounded-xl shadow-md object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
            See all Products
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dynamictrading;
