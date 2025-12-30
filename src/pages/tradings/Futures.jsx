import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FuturesFAQData } from "../../data/data";
import Fund from "../../components/Fund";

const Futures = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="mt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-tr from-[#040b18] via-[#0c3b78] to-[#040b18] px-6 py-20 md:py-28 text-center shadow-2xl">

            <span className="block text-[#00FFA3] uppercase tracking-[0.3em] text-[10px] md:text-xs font-extrabold mb-6">
              Smart Futures Trading
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Futures Trading Built for Modern Traders
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Trade futures with confidence on <strong>genzBroking</strong>.
              Access global markets, manage risk efficiently, and execute trades
              faster with next-generation trading tools designed for precision
              and speed.
            </p>

            <button className="bg-white text-[#001D4A] font-bold py-4 px-10 rounded-xl hover:scale-105 transition active:scale-95 shadow-lg">
              Start Trading Futures
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-gray-100 px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16 text-gray-700">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Unlock New Futures Opportunities with genzBroking
            </h2>
            <p className="leading-relaxed mb-3">
              Futures trading allows you to anticipate market movements and
              act ahead of time. Whether markets rise or fall, futures give you
              the flexibility to trade both directions with confidence.
            </p>
            <p className="leading-relaxed">
              genzBroking equips traders with the tools, insights, and execution
              speed required to stay competitive in fast-moving futures markets.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Trade a Wide Range of Futures Markets
            </h2>
            <p className="leading-relaxed mb-3">
              Futures contracts allow traders to speculate or hedge on assets
              such as stock indices, commodities, currencies, and more — without
              owning the underlying asset.
            </p>
            <p className="leading-relaxed">
              With genzBroking, you can trade index futures, energy products,
              metals, and currency futures through one powerful trading account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Advanced Trading Tools for Better Decisions
            </h2>
            <p className="leading-relaxed mb-3">
              Our platform offers real-time pricing, advanced charting,
              customizable indicators, and lightning-fast execution to help you
              stay ahead of market volatility.
            </p>
            <p className="leading-relaxed">
              From short-term scalping to long-term futures strategies,
              genzBroking supports every trading style.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Why Trade Futures with genzBroking?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fast Execution:</strong> Low-latency trade processing</li>
              <li><strong>Global Markets:</strong> Trade futures across regions</li>
              <li><strong>Transparent Pricing:</strong> No hidden costs</li>
              <li><strong>Dedicated Support:</strong> Expert assistance when you need it</li>
            </ul>
            <p className="mt-4">
              Whether you're testing strategies with a demo account or trading
              live, genzBroking gives you full control over your futures journey.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="px-4 py-20 bg-[#051937]">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-[#00FF87] uppercase tracking-widest text-sm font-semibold mb-4">
            FAQs
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
            Futures Trading Explained
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Get answers to common questions about futures trading,
            accounts, platforms, and risk management.
          </p>

          <div className="space-y-4 text-left">
            {FuturesFAQData.map((item, index) => (
              <div
                key={index}
                className="bg-[#0f2a52] rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-5 text-white"
                >
                  <span className="font-semibold text-base md:text-lg">
                    {item.question}
                  </span>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>

                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FUND COMPONENT ================= */}
      <Fund />
    </>
  );
};

export default Futures;
