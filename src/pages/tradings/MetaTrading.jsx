import React, { useState } from "react";
import { tabs, assetData } from "../../data/data";
import {
  Apple,
  PlayCircle,
  Monitor,
  Laptop,
  Grid2x2,
  Cpu,
  Smartphone

} from "lucide-react"
import Fund from "../../components/Fund";
import images from "../../assets/images";


const downloadOptions = [
  { name: 'Mac', icon: <Apple className="w-5 h-5" />, link: '#' },
  { name: 'Windows', icon: <Grid2x2 className="w-5 h-5" />, link: '#' },
  { name: 'Linux', icon: <Cpu className="w-5 h-5" />, link: '#' }, 
  { name: 'Google Play', icon: <Smartphone className="w-5 h-5" />, link: '#' },
];

export default function MetaTrading() {


    const [activeTab, setActiveTab] = useState('Forex');
  return (
    <>
        <div className="mt-25 px-4 py-10 flex items-center justify-center font-sans">
      
      {/* Outer Container */}
      <div className="w-7xl relative rounded-[1.75rem] bg-gradient-to-r from-[#003da5] via-[#002868] to-[#010b1a] p-[2px] shadow-2xl">
        
        {/* Inner Border */}
        <div className="w-full h-full border border-white/15 rounded-[1.6rem] flex flex-col items-center justify-center px-6 py-14 md:py-16 text-center">

          {/* Subheading */}
          <h4 className="text-[#00d094] font-semibold tracking-[0.18em] uppercase text-[10px] md:text-xs mb-3">
            Powering Precision in Every Trade
          </h4>

          {/* Main Title */}
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            GenZBroking Powered by MetaTrader 5
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-xs md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Experience next-level multi-asset trading with GenZBroking,
            powered by MetaTrader 5.
          </p>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
            {[
              { label: "App Store", sub: "Download on the", icon: Apple },
              { label: "Google Play", sub: "Get it on", icon: PlayCircle },
              { label: "Windows", sub: "Download for", icon: Monitor },
              { label: "Mac", sub: "Download for", icon: Laptop },
            ].map((btn, i) => {
              const Icon = btn.icon;
              return (
                <button
                  key={i}
                  className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg px-3 py-2 flex items-center gap-3 transition-all backdrop-blur-sm"
                >
                  <Icon size={22} className="text-white shrink-0" />
                  <div className="text-left leading-tight">
                    <p className="text-[9px] text-slate-300">{btn.sub}</p>
                    <p className="text-sm font-semibold text-white">
                      {btn.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>


{/* second section */}
<div className=" flex items-center justify-center p-4">
      <div className="max-w-7xl w-full bg-gray-50 rounded-[40px] shadow-sm p-8 md:p-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Asset Classes Available on MetaTrader 5
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Trade a broad range of global financial instruments from major forex pairs and 
            global equities to commodities and indices using one intuitive MetaTrader 5 
            account. Backed by powerful analytics and market depth, MT5 allows you to 
            diversify your strategy and capture opportunities in every asset class.
          </p>
        </div>

        {/* Toggle Navigation */}
      <div className="flex justify-center mb-10">
  <div className="inline-flex flex-nowrap bg-white border border-gray-100 rounded-full shadow-sm">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full 
        text-[11px] sm:text-sm font-medium transition-all duration-300 
        ${
          activeTab === tab
            ? "bg-black text-white"
            : "text-gray-500 hover:text-black"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>



        {/* Data Table Container */}
      <div className="bg-white border border-gray-100 rounded-[30px] p-3 sm:p-4 md:p-10 shadow-sm h-auto">
  
  <div className="grid grid-cols-4 items-center 
                  text-[9px] sm:text-[10px] md:text-xs 
                  font-bold text-gray-900 uppercase 
                  tracking-wider mb-4 md:mb-8 
                  whitespace-nowrap">
    <div className="text-left">Instrument</div>
    <div className="text-center">Buy</div>
    <div className="text-center">Sell</div>
    <div className="text-right">Change</div>
  </div>

</div>


      </div>
    </div>


  {/* TOP FEATURE BAR */}
     <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6">
  <div className="bg-gradient-to-r from-[#5145f6] via-[#3b82f6] to-[#10b981] 
                  rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: "💸", text: "Instant Withdrawals" },
        { icon: "🛡️", text: "Swap-Free**" },
        { icon: "👤", text: "Tier-1 Client Fund Security" },
        { icon: "🤝", text: "Professional Customer Support" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 text-white"
        >
          {/* ICON */}
          <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 
                          border border-white/30 rounded-xl 
                          flex items-center justify-center 
                          bg-white/10 backdrop-blur-md">
            <span className="text-lg sm:text-xl">{item.icon}</span>
          </div>

          {/* TEXT */}
          <span className="font-bold text-sm sm:text-base leading-snug">
            {item.text}
          </span>
        </div>
      ))}
    </div>

  </div>
</div>




        {/* fourth section */}
         <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
  Experience Advanced Trading with GenZBroking on MetaTrader 5
</h2>

<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
  MetaTrader 5 (MT5) delivers a powerful multi-asset trading environment designed for precision,
  speed, and reliability. Trusted by traders worldwide, MT5 supports advanced execution,
  real-time pricing, and deep market insights.
</p>

<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
  With GenZBroking on MT5, access sophisticated charting tools, automated trading systems, and
  comprehensive analytics to manage risk efficiently and trade confidently across global markets.
</p>

<button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
  Start Trading Now
</button>

          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={images.metaTrader5}
              alt="MetaTrader 5 Platform" 
              className="w-full max-w-md rounded-xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>


    {/* fifth section */}
     <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
  Trade Confidently with GenZBroking on MetaTrader 5
</h2>

<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
  MetaTrader 5 (MT5) is a powerful multi-asset trading platform built to support fast execution,
  real-time pricing, and advanced market analysis. Designed for traders of all experience levels,
  MT5 delivers reliability, precision, and flexibility.
</p>

<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
  With GenZBroking on MT5, access sophisticated charting tools, automated trading strategies, and
  comprehensive analytical features. Optimize your trading performance with intelligent tools
  that adapt to dynamic global market conditions.
</p>


            {/* Download Blocks */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {downloadOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {option.icon}
                  <span>{option.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={images.mobileTrader  }
              alt="MetaTrader 5 Platform" 
              className="w-full max-w-md rounded-xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>

<Fund/>


    </>
  );
}
