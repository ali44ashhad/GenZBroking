import React from 'react'
import { links } from '../../data/data'
import { ArrowUpRight } from 'lucide-react';
import Fund from '../../components/Fund';
import images from '../../assets/images';

const FormsAndDocuments = () => {
  return (
    <>
       <div className="my-20 flex items-center justify-center pt-20 md:pt-40 px-4">
  {/* Main Container */}
  <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem] px-6 py-16 md:py-24 text-center shadow-2xl">

    {/* Background Image */}
    <img
      src={images.formAndDocument}
      alt="Trading Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay for readability */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Content Wrapper */}
    <div className="relative max-w-xl md:max-w-2xl mx-auto flex flex-col items-center z-10">
      
      {/* Subheading Label */}
      <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] text-emerald-400 uppercase mb-3 md:mb-4">
        Exclusive Offers
      </span>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
        Enhance Your Trading Rewards
      </h2>

      {/* Description */}
      <p className="text-blue-100/70 text-sm sm:text-base md:text-base mb-6 md:mb-10 max-w-xs sm:max-w-md md:max-w-lg leading-relaxed">
        Take advantage of our tailored promotions and bonus programs, designed to give you extra value and an edge in today’s competitive trading environment.
      </p>

    </div>
  </div>
</div>



{/* forms next section */}
{/* <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
  <div className="max-w-6xl w-full bg-white rounded-3xl shadow-sm p-6 md:p-16">
     <h2 className="text-center text-gray-900 text-base sm:text-lg md:text-xl font-semibold mb-10 sm:mb-12 leading-relaxed">
      For your own benefit and protection, please read the documents below and any other information 
      made available to you via this website before opening an account or placing an order.
    </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-4 px-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <span className="text-sm sm:text-base font-medium border-b border-transparent group-hover:border-blue-800">
            {link.title}
          </span>
          <div className="ml-2 p-1 rounded-full border border-blue-600 group-hover:border-blue-800">
            <ArrowUpRight size={14} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      ))}
    </div>
  </div>
</div> */}

    <Fund/>
    </>
  )
}

export default FormsAndDocuments