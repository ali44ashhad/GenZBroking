import React from 'react'
import ExclusiveBonuses from './ExclusiveBonuses'

const Promotions = () => {
  return (
    <>
        <div className="flex items-center justify-center bg-gray-100 px-4 py-12 md:py-20 mt-30">
  {/* Main Container */}
  <div className="w-7xl overflow-hidden rounded-[2rem] 
    bg-gradient-to-br from-[#003B95] via-[#001A4D] to-[#050B18]
    px-6 py-12 md:px-12 md:py-16 text-center shadow-xl">

    {/* Content Wrapper */}
    <div className="max-w-xl mx-auto flex flex-col items-center">

      {/* Subheading */}
      <span className="text-[10px] md:text-xs font-semibold tracking-[0.18em] 
        text-emerald-400 uppercase mb-3">
        Promotions
      </span>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
        Get More from Your Trades
      </h2>

      {/* Description */}
      <p className="text-blue-100/70 text-sm md:text-base max-w-md">
        Boost your trading with our Promotions and Bonuses, designed to give
        you an edge in today’s fast-moving markets.
      </p>

    </div>
  </div>
</div>


<ExclusiveBonuses/>
    </>
  )
}

export default Promotions