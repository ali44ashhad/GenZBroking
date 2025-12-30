import React from "react";
import { ArrowRightCircle, Check } from "lucide-react";
import {
  CFDStockData,
  forexData,
  indicesData,
  commoditiesData,
  cryptoData,
  featureCards,
} from "../../data/data";
import Fund from "../../components/Fund";
import images from "../../assets/images";


const Product = () => {
  return (
    <>
      <div className="font-sans space-y-24 px-4 md:px-8">

        {/* ================= HERO ================= */}
        <section className="mt-40 max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[420px] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0">
            <img
              src={images.contactBg}
              alt="Trading Markets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-3xl text-white">
            <p className="text-emerald-400 font-bold tracking-widest text-xs md:text-sm mb-4">
              MULTI-ASSET TRADING PLATFORM
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Trade Global Markets with genzBroking
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Access forex, stocks, indices, commodities, and crypto CFDs from one
              powerful trading ecosystem designed for speed, clarity, and control.
            </p>

            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Start Trading
            </button>
          </div>
        </section>

        {/* ========== REUSABLE PRODUCT SECTION ========== */}
        {[
          {
            title: "CFD Stocks",
            desc:
              "Trade price movements of global companies without owning shares. genzBroking lets you react quickly to earnings, news, and momentum with flexible CFD positions.",
            meta: ["Leverage up to 1:20", "Low margin requirements"],
            data: CFDStockData,
          },
          {
            title: "Forex",
            desc:
              "Trade major, minor, and exotic currency pairs with ultra-fast execution. Our forex environment is built for scalpers, day traders, and swing strategies.",
            meta: ["Spreads from 0.0 pips*", "Leverage up to 1:500"],
            data: forexData,
          },
          {
            title: "Indices",
            desc:
              "Capture the performance of entire economies instead of single stocks. Trade global benchmarks and ride broader market momentum.",
            meta: ["15+ Global Indices", "Leverage up to 1:100"],
            data: indicesData,
          },
          {
            title: "Commodities",
            desc:
              "Trade gold, oil, gas, and more. Commodity CFDs allow you to speculate on supply-demand shifts without physical ownership.",
            meta: ["High liquidity markets", "Leverage up to 1:100"],
            data: commoditiesData,
          },
          {
            title: "Crypto",
            desc:
              "Trade popular cryptocurrencies 24/7. Benefit from volatility with CFD trading while avoiding wallet or exchange complexity.",
            meta: ["BTC, ETH & more", "Leverage up to 1:50"],
            data: cryptoData,
          },
        ].map((section, idx) => (
          <section
            key={idx}
            className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-6 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                  {section.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                  {section.desc}
                </p>

                <ul className="space-y-1 text-gray-700 font-medium">
                  {section.meta.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  View instruments <ArrowRightCircle size={20} />
                </a>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg min-w-[640px]">
                  <thead>
                    <tr className="bg-blue-600 text-white text-xs md:text-sm">
                      <th rowSpan="2" className="p-4 text-left">Instrument</th>
                      <th colSpan="3" className="p-2 text-center">Min. Spread</th>
                      <th rowSpan="2" className="p-4 text-center">Platform</th>
                    </tr>
                    <tr className="bg-blue-600 text-white text-xs">
                      <th>Standard</th>
                      <th>Elite</th>
                      <th>ECN</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {section.data.map((item, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-semibold flex gap-2 items-center">
                          <span className="w-6 h-6 bg-gray-200 rounded-full text-xs flex items-center justify-center">
                            {item.name[0]}
                          </span>
                          {item.name}
                        </td>
                        <td className="text-center">{item.standards}</td>
                        <td className="text-center">{item.elite}</td>
                        <td className="text-center">{item.ecn}</td>
                        <td className="text-center">
                          <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold">
                            {item.platform}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </section>
        ))}

      </div>

      {/* ================= WHY GENZBROKING ================= */}
      <section className="px-4 md:px-10 py-20">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-900 to-black p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-[2rem] bg-white/10 backdrop-blur border border-white/10 p-6 md:p-8 text-white shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <Icon size={36} className="mx-auto mb-5" />
                    <h3 className="text-lg font-semibold text-center mb-6">
                      {card.title}
                    </h3>

                    <ul className="space-y-3">
                      {card.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 text-sm"
                        >
                          <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                            <Check size={12} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-8 bg-white text-black py-3 rounded-xl text-sm font-medium hover:bg-gray-200">
                    {card.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Fund />
    </>
  );
};

export default Product;
