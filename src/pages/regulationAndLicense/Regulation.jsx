import React from 'react'
import Fund from '../../components/Fund'
import images from '../../assets/images'

const Regulation = () => {
  return (
    <>
 <div className="mt-25 w-full flex justify-center px-4 py-16 md:py-24 bg-white">
  {/* Container restricted to 7xl */}
  <div className="w-full max-w-7xl relative">
    
    {/* Main Card */}
    <div className="relative overflow-hidden rounded-[40px] py-20 px-6 text-center shadow-2xl">

      {/* Background Image */}
      <img
        src={images.contactBg}
        alt="Company Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020b18]/20"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto">

        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase">
          OUR COMPANY
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
          Regulated & Licensed Globally
        </h1>

        <p className="text-blue-50 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl">
          GenZBroking operates under{" "}
          <span className="text-emerald-300 font-bold">
            Spectra Global LTD (Mauritius)
          </span>
          , fully licensed and regulated to provide a secure and transparent trading environment.
        </p>

      </div>
    </div>
  </div>
</div>

{/* regulation next section */}
<div className="flex flex-col gap-10 p-4 md:p-10 bg-gray-50 min-h-screen">
      
      {/* --- UPPER SECTION: Legal Information --- */}
      <div className="max-w-7xl mx-auto w-full rounded-[32px] p-8 md:p-12 shadow-sm bg-gray-200">
        <div className="flex items-center gap-4 mb-6">
          {/* Logo / Icon Placeholder */}
          <div className="w-12 h-12 flex-shrink-0">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2910/2910311.png" 
              alt="Legal Icon" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[#2DD4BF] font-bold text-xs tracking-widest uppercase">GenZBroking</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Legal Information</h2>
          </div>
        </div>
        
      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
  GenZBroking, operating under <span className="font-bold">Spectra Global LTD</span>, is a fully regulated financial 
  services provider committed to transparency, integrity, and client protection. In the United Arab Emirates, Spectra 
  Global LTD is licensed by the Securities and Commodities Authority (SCA), demonstrating our dedication to compliance and 
  secure capital management (SCA License Number: 20200000307). In Mauritius, Spectra Global LTD is authorized by the Financial 
  Services Commission (FSC) as an Investment Dealer, ensuring reliable and compliant investment services (Company Registration Number:
   199453, License Number: GB22201302).
</p>

      </div>

      {/* --- LOWER SECTION: Trade Banner --- */}
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden rounded-[40px] aspect-[16/9] md:aspect-[21/9] lg:aspect-[25/9]">
        
        {/* Background Image Block */}
        <img 
          src="https://images.unsplash.com/photo-1611974714658-d78e38d43891?q=80&w=2070&auto=format&fit=crop" 
          alt="Trading Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content Overlay */}
     <div className="relative z-10 h-[300] flex flex-col justify-center 
  px-5 sm:px-6 md:px-20 
  text-white space-y-4 md:space-y-6 overflow-hidden">

  {/* Heading Block */}
  <div className="max-w-xl">
   <span className="text-[#2DD4BF] font-semibold 
      text-[10px] sm:text-xs md:text-sm 
      tracking-widest uppercase">
  Trusted by Traders Worldwide
</span>
<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
      font-bold mt-2 leading-tight">
  Trade with Confidence and Security
</h1>

  </div>

  {/* Description */}
  
<p className="text-gray-200 max-w-md 
      text-sm sm:text-base md:text-lg 
      leading-relaxed">
  GenZBroking delivers a comprehensive suite of trading instruments and services, 
  ensuring a seamless, reliable, and professional trading experience.
</p>

  {/* CTA */}
  <div className="pt-3 sm:pt-4">
    <button className="border border-white 
      text-white font-semibold 
      text-sm sm:text-base
      py-2.5 sm:py-3 px-6 sm:px-8 
      rounded-lg 
      hover:bg-white hover:text-blue-900 
      transition-all duration-300">
      Read more about GenZBroking
    </button>
  </div>
</div>

      </div>

    </div>

    <Fund/>
    </>
  )
}

export default Regulation