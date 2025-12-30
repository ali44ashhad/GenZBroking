import React from 'react'
import { Globe, BarChart3  } from 'lucide-react';
import { installationStepsData } from '../../data/data';
import Fund from '../../components/Fund';


const InstallationMeta = () => {
  return (
 <>
     <div className="flex items-center justify-center h-200 bg-gray-100 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#003B95] to-[#001A4D] px-6 py-16 md:py-24 text-center shadow-2xl">
        
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
         <span className="block text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
          Data-Driven Trading Insights
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
          GenZBroking Trading Insights and Learning
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
          Explore the GenZBroking Blog for expert insights and analysis on futures,
          indices, stocks, currencies, CFDs, and Forex. Stay informed and ahead
          in the financial markets with our categorized content.
        </p>
        </div>
      </div>
    </div>



<div className="w-full max-w-7xl mx-auto rounded-[2.5rem] my-20 bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
  <div className="max-w-3xl w-full">

    {/* Header Section */}
    <header className="mb-10 text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        How to Download and Install MetaTrader 5
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Simple Setup Instructions for genzBroking Traders
      </h2>
      <div className="space-y-4 text-gray-500 text-base md:text-lg leading-relaxed">
        <p>
          Ready to trade globally with genzBroking? Setting up MetaTrader 5 is your first step. Don’t worry — we’ll guide you step-by-step so you can start trading confidently.
        </p>
        <p>
          Whether you’re new to trading platforms or have experience with other brokers, this guide ensures you can install and launch MT5 effortlessly.
        </p>
      </div>
    </header>

    {/* Stepper Section */}
    <div className="flex flex-col items-start mb-10">
      {installationStepsData.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center sm:items-start">
          {/* Row: Number Box + Text */}
          <div className="flex items-center mb-2 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-teal-500 text-white font-bold rounded-xl text-lg sm:text-xl shadow-md">
              {step.id}
            </div>
            <h3 className="ml-4 sm:ml-6 text-base sm:text-lg md:text-xl font-bold text-gray-800">
              {step.title}
            </h3>
          </div>

          {/* Connector Line */}
          {index !== installationStepsData.length - 1 && (
            <div className="w-12 sm:w-16 flex justify-center">
              <div className="h-8 border-l-2 border-dotted border-teal-500"></div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Info List Section */}
    <div className="mb-10">
      <p className="font-bold text-gray-900 mb-4 text-base md:text-lg">
        Key Interface Elements:
      </p>
      <ul className="space-y-3 text-gray-600 text-base md:text-lg">
        <li className="flex items-start">
          <span className="mr-3 text-gray-400">•</span>
          <span>
            <span className="font-bold text-gray-800">Market Watch:</span> View real-time prices for all instruments.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-gray-400">•</span>
          <span>
            <span className="font-bold text-gray-800">Navigator:</span> Access accounts, indicators, and expert advisors quickly.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-gray-400">•</span>
          <span>
            <span className="font-bold text-gray-800">Terminal:</span> Manage trades, balances, alerts, and account history efficiently.
          </span>
        </li>
      </ul>
      <p className="mt-4 text-gray-500 italic text-sm md:text-base">
        Take your time exploring — no need to memorize everything at once.
      </p>
    </div>

    {/* Download Buttons Section */}
    <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
      <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
        <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
        <div className="text-left">
          <p className="text-[10px] uppercase leading-none">Download for</p>
          <p className="text-lg font-semibold leading-none">Windows</p>
        </div>
      </button>

      <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
        <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
        <div className="text-left">
          <p className="text-[10px] uppercase leading-none">Download for</p>
          <p className="text-lg font-semibold leading-none">Mac / App Store</p>
        </div>
      </button>
    </div>

    {/* Account Security Section */}
    <div className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        Account Security
      </h2>
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        Protect your genzBroking account: avoid storing passwords in plain text, use a reliable password manager, and never access your account on shared or public devices. 
        If you notice unusual activity such as unauthorized trades or alerts, stop trading immediately and contact <span className="font-bold text-gray-800">genzBroking Support</span> at support@genzbroking.com.
      </p>
    </div>

    {/* Risk Warning Section */}
    <div className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        Risk Warning
      </h2>
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        Trading CFDs involves significant risk and may not suit everyone. Losses can exceed deposits, particularly for professional clients. 
        You do not own the underlying assets. Ensure you fully understand the risks and consider your financial situation before trading. 
        Read our <a href="#" className="text-blue-500 underline">Risk Disclosure Policy</a> for complete information.
      </p>
    </div>

  </div>
</div>

    <Fund/>
 </>
  )
}

export default InstallationMeta