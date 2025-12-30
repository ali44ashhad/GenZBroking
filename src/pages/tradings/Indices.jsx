import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { indicesFAQData } from "../../data/data";
import Fund from "../../components/Fund";

const Indices = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="mt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-tr from-[#040b18] via-[#0c3b78] to-[#040b18] px-6 py-20 md:py-28 text-center shadow-2xl">

            <span className="block text-[#00FFA3] uppercase tracking-[0.3em] text-[10px] md:text-xs font-extrabold mb-6">
              Trade the World’s Markets
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Indices Trading Made Simple & Powerful
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              With <strong>genzBroking</strong>, trade global stock indices and
              capture market-wide movements using one smart, high-performance
              trading platform.
            </p>

            <button className="bg-white text-[#001D4A] font-bold py-4 px-10 rounded-xl hover:scale-105 transition active:scale-95 shadow-lg">
              Start Trading Indices
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-gray-100 px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16 text-gray-700">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Smarter Index Trading with genzBroking
            </h2>
            <p className="leading-relaxed mb-3">
              Index trading allows you to follow the overall direction of a
              market rather than relying on the performance of individual stocks.
              It’s a powerful way to gain broad exposure with reduced single-asset risk.
            </p>
            <p className="leading-relaxed">
              genzBroking delivers a seamless index trading experience with fast
              execution, real-time pricing, and intuitive tools built for both
              beginners and experienced traders.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              What Are Indices & Why Trade Them?
            </h2>
            <p className="leading-relaxed mb-3">
              An index represents the performance of a group of stocks from a
              specific market, country, or industry. When you trade indices,
              you trade the collective movement of that group.
            </p>
            <p className="leading-relaxed">
              This approach helps smooth volatility while offering exposure to
              major economic trends and global growth.
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-6">
              <li><strong>Global Indices:</strong> Track worldwide market performance</li>
              <li><strong>Regional Indices:</strong> Focus on specific continents</li>
              <li><strong>Country Indices:</strong> Trade national benchmarks</li>
              <li><strong>Sector Indices:</strong> Invest in industries like tech or energy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Key Factors That Influence Index Prices
            </h2>
            <ul className="space-y-3">
              <li><strong>Market Sentiment:</strong> Confidence and fear move markets</li>
              <li><strong>Economic Data:</strong> Inflation, employment, GDP</li>
              <li><strong>Global Events:</strong> Geopolitics and policy changes</li>
              <li><strong>Sector Performance:</strong> Strong industries lift indices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Why Trade Indices with genzBroking?
            </h2>
            <p className="leading-relaxed mb-3">
              genzBroking combines advanced trading technology with transparent
              pricing and smooth execution to give traders a competitive edge.
            </p>
            <p className="leading-relaxed">
              Our platform supports strategic decision-making with professional
              charting tools, responsive performance, and reliable infrastructure.
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
            Indices Trading Explained
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Clear answers to common questions about index markets,
            strategies, and trading risks.
          </p>

          <div className="space-y-4 text-left">
            {indicesFAQData.map((item, index) => (
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

      {/* ================= FUND ================= */}
      <Fund />
    </>
  );
};

export default Indices;
