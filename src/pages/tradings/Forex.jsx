import React, { useState } from 'react';
import { FAQData } from '../../data/data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Fund from '../../components/Fund';
import images from '../../assets/images';

const Forex = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="mt-30 py-12 space-y-20">

        {/* Blue Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
  <div className="relative overflow-hidden rounded-[40px] py-24 px-6 text-center shadow-xl">
    
    {/* Background Image */}
    <img
      src={images.heroBg}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />

    {/* Overlay Gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#001D4A]/70 via-[#003B8E]/60 to-[#0051C3]/70"></div>

    {/* Main Hero Content */}
    <div className="relative z-10 max-w-3xl mx-auto">
      <span className="text-[#00FFA3] uppercase tracking-[0.3em] text-[10px] md:text-xs font-black mb-4 block">
        Smart Online Stock Trading Starts Here
      </span>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
        Invest in Stocks With the <br className="hidden md:block" /> Best Trading Platform
      </h2>
      <p className="text-blue-100 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
        Invest in global stocks with zero commission, real-time control, and professional-grade tools. Access over 350 equities from major global markets on the Genzbroking platform built for speed, security, and flexible strategy execution.
      </p>
      <button className="bg-white text-[#001D4A] font-bold py-3 md:py-4 px-10 md:px-14 rounded-md hover:scale-105 transition-transform duration-300 shadow-lg active:scale-95">
        Get Started
      </button>
    </div>
  </div>
</section>


      </div>

      {/* Forex Info Section */}
      <div className="bg-gray-200 w-full md:max-w-7xl mx-auto rounded-[40px] py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Opportunities */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Forex Trading Opportunities with Genzbroking</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Forex trading market is one of the most liquid and fast-moving in the world. With trillions traded daily, it's a global arena packed with opportunity. Whether you're an experienced Forex trader or stepping in for the first time, the market offers constant movement and real potential to grow your capital.
              </p>
              <p>
                At Genzbroking, we don't just provide access to the Forex market; we help you trade it with confidence. Our mission is to create a seamless, intuitive experience where strategy meets execution, powered by modern tools and high-speed technology.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Forex Trading: Overview & Market Framework</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Forex trading involves buying and selling currencies 24/5. Traders aim to profit from currency price changes in a dynamic, global market.
              </p>
              <p>
                Each trade involves a currency pair. Forex brokers and traders operate in this space with the goal of profiting from fluctuations in exchange rates.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Major Pairs:</strong> Popular currencies like EUR/USD, USD/JPY, GBP/USD.</li>
                <li><strong>Minor Pairs:</strong> Pairs excluding USD, e.g., EUR/GBP, AUD/JPY.</li>
                <li><strong>Exotic Pairs:</strong> Major currencies paired with emerging markets, e.g., USD/TRY, EUR/ZAR.</li>
              </ul>
            </div>
          </section>

          {/* Terminologies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Forex Market Terminologies</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Pip:</strong> Smallest unit in currency pricing.</li>
              <li><strong>Bid:</strong> Price buyers are willing to pay.</li>
              <li><strong>Ask:</strong> Price sellers are willing to accept.</li>
              <li><strong>Spread:</strong> Difference between bid and ask prices.</li>
              <li><strong>Lot:</strong> Standard trading volume.</li>
              <li><strong>Leverage:</strong> Borrowed funds to increase position size.</li>
              <li><strong>Margin:</strong> Funds required to open/maintain positions.</li>
              <li><strong>Position:</strong> Trader’s current market stance.</li>
            </ul>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Best Practices for Forex Trading</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Diversify Your Portfolio:</strong> Trade multiple pairs to reduce risk.
              </li>
              <li>
                <strong>Use a Platform Built for Traders:</strong> Take advantage of real-time charts, indicators, and fast execution.
              </li>
              <li>
                <strong>Start with a Demo Account:</strong> Practice strategies risk-free before using real capital.
              </li>
            </ul>
          </section>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full md:max-w-7xl mx-auto my-10 rounded-[40px] bg-[#051937] flex flex-col items-center p-6 md:p-12 font-sans">
        <div className="max-w-4xl w-full text-center">
          <h4 className="text-[#00FF87] uppercase tracking-widest text-sm md:text-base font-semibold mb-4">
            Frequently Asked Questions
          </h4>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Your Trading Questions, Clarified
          </h1>
          <p className="text-gray-400 text-sm md:text-lg mb-10">
            Find quick, clear answers to the most common trading, account, and platform questions.
          </p>

          <div className="space-y-4 text-left">
            {FAQData.map((item, index) => (
              <div key={index} className="bg-[#102a50] rounded-xl overflow-hidden border border-white/5">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-white hover:bg-white/5 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold">{item.question}</span>
                  <div className="bg-white/10 rounded-full p-1">
                    {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Fund />
    </>
  );
};

export default Forex;
