import React from 'react'
import ExclusiveBonuses from './ExclusiveBonuses'
import images from '../../assets/images'

const Promotions = () => {
  return (
    <>
       <div className="flex items-center justify-center px-4 py-12 md:py-20 mt-30">
  {/* Main Container */}
  <div className="relative w-7xl h-[300px] overflow-hidden rounded-[2rem] px-6 py-12 md:px-12 md:py-16 text-center shadow-xl">

    {/* Background Image */}
    <img
      src={images.promotionBack}
      alt="Background"
      className="absolute inset-0 w-full h-[300px] object-cover"
    />

    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content Wrapper */}
    <div className="relative max-w-xl mx-auto flex flex-col items-center z-10">

      {/* Subheading */}
      <span className="text-[10px] md:text-xs font-semibold tracking-[0.18em] 
        text-emerald-400 uppercase mb-3">
        Special Offers
      </span>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
        Maximize Your Trading Benefits
      </h2>

      {/* Description */}
      <p className="text-blue-100/70 text-sm md:text-base max-w-md">
        Take advantage of our exclusive promotions and bonus programs, crafted to give you 
        more opportunities and an edge in today’s dynamic markets.
      </p>

    </div>
  </div>
</div>


<ExclusiveBonuses/>
    </>
  )
}

export default Promotions