import React from 'react';
import ExploreTrading from './ExploreTrading';
import Testimonial from './Testimonial';
import Fund from '../../components/Fund';
import images from '../../assets/images';


const Company = () => {
 
  return (
    <>
     <div className="mt-50 relative w-[95%] md:w-[85%] lg:w-[70%] m-auto 
  min-h-[320px] md:min-h-[400px] lg:min-h-[700px] 
  flex items-center justify-center rounded-2xl overflow-hidden">

  {/* Background Image */}
  <img
    src={images.heroBg}
    alt="Global Trading"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Center Content */}
  <div className="relative z-10 text-center max-w-3xl px-5 md:px-12">
    <span className="text-emerald-400 uppercase tracking-wider text-xs md:text-base">
      About Our Company
    </span>

    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold mt-4">
      Built for Traders <br /> Driven by Integrity
    </h1>

    <p className="text-white/80 text-sm md:text-lg mt-4">
      We deliver a transparent trading environment supported by advanced technology,
      strong regulation, and a client-first approach.
    </p>

    <button className="mt-6 px-7 py-3 bg-white text-[#0B1441] font-semibold 
      rounded-full hover:bg-gray-200 transition-all duration-300">
      Start Your Journey
    </button>
  </div>
</div>



{/* second section  */}
<div className="bg-white min-h-screen py-16 px-4 font-sans text-gray-700">
  <div className="max-w-full lg:w-[70%] mx-auto">
    
    {/* Sub-header */}
    <p className="text-[#2DD4BF] font-semibold text-xs tracking-widest uppercase mb-4">
      Professional trading. Global reach.
    </p>

    {/* Main Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
      Built Around the Trader
    </h1>

    {/* About Section */}
    <section className="mb-10">
      <h2 className="text-xl font-bold text-black mb-4">Our Philosophy</h2>
      <div className="space-y-6 leading-relaxed text-[15px]">
        <p>
          At GenZBroking, our focus is simple: provide traders with a dependable platform
          where execution is fast, pricing is fair, and information is always clear.
          We remove unnecessary complexity so you can focus on your strategy.
        </p>
        <p>
          Backed by a team with deep experience in global financial markets, GenZBroking
          was created to meet the needs of modern traders — whether you're managing
          short-term positions or building long-term exposure.
        </p>
      </div>
    </section>

    {/* Regulation Section */}
    <section className="mb-10">
      <h3 className="text-md font-bold text-black mb-4">Regulation & Trust</h3>
      <div className="space-y-6 leading-relaxed text-[15px]">
        <p>
          GenZBroking operates under an <span className="font-bold">Investment Dealer License</span>
          regulated by the <span className="font-bold">Financial Services Commission (FSC) of Mauritius</span>.
          This ensures we meet strict standards for transparency, compliance, and client protection.
        </p>
        <p>
          Regulation isn’t a checkbox for us — it’s a commitment. We believe a
          secure and well-regulated environment is essential for long-term trading success.
        </p>
      </div>
    </section>

    {/* Markets Section */}
    <section className="mb-10">
      <h3 className="text-md font-bold text-black mb-4">Markets Available</h3>
      <p className="mb-4 text-[15px]">
        Trade multiple asset classes from one powerful platform:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6 text-[15px] ml-2">
        <li>Foreign Exchange (Forex)</li>
        <li>Major and regional indices</li>
        <li>Gold, silver, and metals</li>
        <li>Energy commodities</li>
        <li>Cryptocurrency CFDs</li>
      </ul>
      <p className="leading-relaxed text-[15px]">
        With access to over <span className="font-bold">300 tradable instruments</span>,
        GenZBroking enables you to diversify, hedge, and adapt as markets evolve.
      </p>
    </section>

    {/* Team Section */}
    <section className="mb-10">
      <h3 className="text-md font-bold text-black mb-4">Our Commitment</h3>
      <div className="space-y-6 leading-relaxed text-[15px]">
        <p>
          GenZBroking was founded by professionals who understand both the technical and
          human side of trading. We’ve seen the gaps in the industry — and built our
          services to close them.
        </p>
        <p>
          From execution speed to customer support, everything we do is designed
          to support real traders. We don’t just provide access to markets — we aim
          to be a reliable trading partner you can grow with.
        </p>
      </div>
    </section>

  </div>
</div>

<ExploreTrading/>
<Testimonial/>
<div className="relative w-full isolate">
  <Fund />
</div>

    </>
  );
};

export default Company;