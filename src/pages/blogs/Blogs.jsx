import React from 'react';
import { Globe, BarChart3 , ArrowRightCircle } from 'lucide-react';
import BlogNextSection from './BlogNextSection';
import Fund from '../../components/Fund';
import { blogPosts } from '../../data/data';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
 <>
     <div className="mt-30 flex items-center justify-center h-150 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#003B95] to-[#001A4D] px-6 py-16 md:py-24 text-center shadow-2xl">
        
        {/* Background Decorative Icons - Hidden on small screens for cleaner UI */}
        <div className="absolute left-[-20px] top-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 rotate-12">
            <Globe size={80} className="text-cyan-400" />
          </div>
        </div>

        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 -rotate-12">
            <BarChart3 size={100} className="text-cyan-400" />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          {/* Top Label */}
         <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
  Data-Driven Trading Insights
</span>

{/* Main Heading */}
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
  GENZbroking Market Insights & Learning
</h1>

{/* Description */}
<p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
  Explore the Enzbroking Blog for expert analysis, trading strategies, and actionable market insights 
  across Forex, stocks, indices, CFDs, and commodities. Stay informed, sharpen your trading skills, 
  and make confident, data-driven decisions with our in-depth content.
</p>


        </div>
      </div>
    </div>


{/* blogs */}
<section className="bg-gray-50 py-5 px-4 sm:px-6 lg:px-8 ">
  
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
    Insights That Shape Smarter Trading Decisions
  </h2>

  <p className="text-gray-600 text-base sm:text-lg leading-relaxed pb-4">
    Stay ahead of the markets with in-depth analysis across crypto innovation,
    global trading strategies, and macro market trends. From the evolution of
    DeFi ecosystems and session-based trading tactics to long-term commodity
    cycles driving the green economy, our insights are designed to help traders
    and investors navigate complexity with confidence.
  </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {blogPosts.map((post) => (
  <div
    key={post.id}
    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100"
  >
    {/* Image */}
    <div className="h-56 w-full overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-grow">
      <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-md w-fit mb-6">
        {post.category}
      </span>

      <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4 line-clamp-3">
        {post.title}
      </h2>

      <p className="text-gray-500 text-lg leading-relaxed mb-8 line-clamp-3">
        {post.description}
      </p>

      {/* Footer */}
      <div className="mt-auto">
        <Link
          to={`/blogs/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
        >
          Read more
          <ArrowRightCircle className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </section>



    <BlogNextSection/>
    <Fund/>
 </>
  );
};

export default Blogs;






