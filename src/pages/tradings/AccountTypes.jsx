import React from 'react';
import { Check } from 'tabler-icons-react';
import { accounts } from '../../data/data';
import Fund from '../../components/Fund';

const AccountTypes = () => {
  return (
    <>
      {/* Promotions Section */}
      <div className="mt-20 flex items-center justify-center bg-gray-100 py-20 px-4 md:py-40">
        <div className="w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#003B95] via-[#001A4D] to-[#050B18] px-6 py-16 md:py-24 text-center shadow-2xl">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
              Promotions & Rewards
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Maximize Your Trading Benefits
            </h2>
            <p className="text-blue-100/70 text-sm md:text-base mb-10 max-w-lg">
              Take advantage of Genzbroking's latest promotions and bonuses designed to enhance your trading experience and give you a competitive edge.
            </p>
          </div>
        </div>
      </div>

      {/* Account Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-3">
              Choose the Right Account
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
              Compare Account Types
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {accounts.map((acc, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border
                ${acc.highlighted ? 'border-indigo-300 scale-[1.03]' : 'border-slate-100'} transition-transform duration-200`}
              >
                <div className="bg-indigo-100 text-indigo-600 text-center font-bold py-3 text-lg">
                  {acc.category}
                </div>

                <div className="px-6 md:px-8 py-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-2 bg-white/70 rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-indigo-600">{acc.type}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {acc.type === 'ECN' ? 'Raw Spreads From' : 'Variable Spreads From'}
                  </p>

                  <div className="flex justify-center items-end mt-4">
                    <span className="text-4xl md:text-5xl font-black text-slate-900">{acc.spread}</span>
                    <span className="ml-1 text-gray-500 text-sm">{acc.unit}*</span>
                  </div>

                  <div className="mt-5 bg-slate-50 rounded-full py-2 text-slate-600 font-semibold text-sm">
                    {acc.commission}
                  </div>

                  <div className="mt-6 md:mt-8 space-y-3 text-left">
                    {acc.features.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-slate-600">
                          <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          {item.label}
                        </div>
                        <span className="font-semibold text-slate-800">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 md:mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 md:py-4 rounded-xl font-bold transition">
                    {acc.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="w-full bg-gradient-to-r from-[#5145f6] via-[#3b82f6] to-[#10b981] rounded-2xl p-6 md:p-8 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {[
              { icon: '💸', text: 'Fast Withdrawals' },
              { icon: '🛡️', text: 'Zero Swap Accounts' },
              { icon: '👤', text: 'Tier-1 Fund Security' },
              { icon: '🤝', text: 'Dedicated Support' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 border border-white/30 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md text-xl">
                  {item.icon}
                </div>
                <span className="font-bold text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-[#00143a] rounded-2xl px-6 py-16 md:py-24 border border-white/5 shadow-2xl flex flex-col items-center text-center">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/trading-bg.jpg"
                alt="Trading Background"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-[#00143a]/80" />
            </div>

            <div className="relative z-20 max-w-3xl">
              <h4 className="text-[#10b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
                Trade Confidently
              </h4>
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
                Flexible Accounts for Every Trader
              </h1>
              <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-light mb-4">
                Genzbroking offers account types tailored for beginners, intermediate traders, and experts. Each account ensures security, transparency, and reliable execution.
              </p>
              <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-light">
                Trade with confidence and gain access to unique trading features, low spreads, and advanced tools.
              </p>
              <button className="mt-8 px-12 py-3 md:px-16 md:py-4 font-semibold text-white border border-blue-500/50 rounded-lg hover:bg-blue-600/10 hover:border-blue-400 transition">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Account Section */}
      <section className="flex justify-center items-center bg-gray-100 py-16 md:py-24 px-4">
        <div className="w-full max-w-[1200px] bg-[#f8f9fa] rounded-2xl p-8 md:p-16 shadow-lg text-center">
          <p className="text-[#00d094] font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase">
            Premium Accounts
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1d37] mb-8">
            Elite Accounts for Advanced Traders
          </h2>
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
            Gain priority execution, razor-thin spreads, and exclusive tools with Genzbroking Elite Accounts. Designed for professional traders seeking advanced trading conditions and full support.
          </p>
          <button className="bg-[#3b66f5] hover:bg-[#2a55e4] text-white px-12 py-4 md:px-16 md:py-5 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:-translate-y-1">
            Open Elite Account
          </button>
        </div>
      </section>

      <Fund />
    </>
  );
};

export default AccountTypes;
