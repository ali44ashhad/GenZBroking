import React from 'react';
import Fund from '../../components/Fund';

const Partner = () => {
  return (
   <>
    <div className="mt-30 bg-slate-50 min-h-screen py-12 px-4 md:px-8 font-sans selection:bg-emerald-100">
      <div className="max-w-5xl mx-auto">

        <section className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-gray-100 space-y-10">

          {/* Heading */}
          <div className="text-center space-y-6">
            <h4 className="text-emerald-500 font-bold text-sm tracking-widest uppercase">
              Become a Genzbroking Partner
            </h4>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Maximize Your Earnings as an Introducing Broker (IB)
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed">
              At Genzbroking, we help brokers and partners build a thriving business by referring traders to our world-class trading platform. Whether you are experienced or just starting out, our IB Program is designed to help you grow, earn, and succeed.
            </p>
          </div>

          {/* Why Partner */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">
              Why Join Genzbroking?
            </h3>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Competitive & Transparent Commissions:</span> Earn up to $10 per lot traded. Higher trading volumes mean higher rewards. Tiered commission structures and customized plans available for top performers.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Fast & Reliable Payouts:</span> Receive your commissions daily or weekly, directly to your preferred account without delays.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Powerful Tracking Dashboard:</span> Monitor your referrals, client activity, and earnings in real-time using our intuitive Partner Portal.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Diverse Trading Instruments:</span> Promote Forex, Gold, Indices, Crypto, and more to your network.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Dedicated IB Support:</span> Receive personalized guidance from our experienced affiliate & partnership team.
            </p>
          </div>

          {/* Who Can Join */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-800">
              Who Can Join?
            </h3>

            <p className="text-slate-600">Independent Forex brokers</p>
            <p className="text-slate-600">Trading educators & signal providers</p>
            <p className="text-slate-600">Financial influencers and content creators</p>
            <p className="text-slate-600">Community leaders with active trader networks</p>
            <p className="text-slate-600">Anyone with a network of trading enthusiasts!</p>
            <p className="text-slate-600 font-medium">
              No prior license required. Simply register and start referring.
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-800">
              How It Works
            </h3>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Sign Up:</span> Join as a Genzbroking Partner by completing a simple registration form. <span className="text-emerald-500 font-medium">(Register Now)</span>
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Refer Traders:</span> Share your unique referral link or onboard clients directly.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">Earn Commissions:</span> Watch your earnings grow as your referred traders execute trades.
            </p>
          </div>

          {/* Bonus */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-800">
              Bonus Programs & IB Challenges
            </h3>

            <p className="text-slate-600">
              Genzbroking rewards top-performing IBs with performance bonuses, seasonal perks, and special giveaways. Keep an eye on leaderboard challenges and promotional campaigns.
            </p>

            <p className="font-bold text-emerald-600 text-lg">
              IB Gold Legend Program
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Join Today – Free & Simple
            </h3>

            <p className="text-slate-600">
              Begin your journey to financial growth. Sign up now and become part of the Genzbroking IB Network.
            </p>

            <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
              Join Now as IB
            </button>

            <p className="text-slate-500">
              Questions? Reach us at <span className="font-medium">support@genzbroking.com</span>
            </p>
          </div>

        </section>
      </div>
    </div>

    <Fund/>
   </>
  );
};

export default Partner;


        //  <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
        //   <div className="flex flex-col md:flex-row gap-6 mb-8">
        //     <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
        //         <img src="https://cdn-icons-png.flaticon.com/512/1063/1063372.png" alt="Legal" className="w-10 h-10 opacity-80" />
        //     </div>
        //     <div>
        //       <h4 className="text-emerald-500 font-bold text-xs tracking-widest uppercase">GenZBroking</h4>
        //       <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Legal Information</h2>
        //     </div>
        //   </div>
        //   <p className="text-slate-400 text-sm md:text-base leading-loose text-justify">
        //     Regulations GenZBroking brand under Spectra Global LTD is a regulated financial services provider, committed to maintaining the highest standards of transparency, integrity, and client protection. United Arab Emirates Spectra Global LTD is licensed by the Securities and Commodities Authority (SCA) in the United Arab Emirates, reinforcing our commitment to regional compliance and investor protection. SCA License Number: 20200000307 Mauritius Spectra Global LTD (MU) is authorized by the Financial Services Commission (FSC) of the Republic of Mauritius as an Investment Dealer. Company Registration Number: 19453 License Number: GB22201302
        //   </p>
        // </section>

        //  <section className="relative overflow-hidden rounded-[40px] min-h-[400px] flex items-center group">
        //    <div className="absolute inset-0 z-0">
        //     <img 
        //       src="https://images.unsplash.com/photo-1611974714658-d78e38d43891?q=80&w=2070&auto=format&fit=crop" 
        //       alt="Trading Background" 
        //       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        //     />
        //      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
        //   </div>

        //    <div className="relative z-10 px-8 md:px-20 py-16 max-w-3xl">
        //     <h4 className="text-emerald-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
        //       Where Trust Matters.
        //     </h4>
        //     <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        //       Trade With A Reliable Broker
        //     </h2>
        //     <p className="text-blue-100/80 text-lg mb-10 max-w-lg leading-relaxed">
        //       GenZBroking offers an extensive range of products and services, providing a top-notch trading experience.
        //     </p>
        //     <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white hover:text-blue-950 transition-all duration-300 backdrop-blur-sm">
        //       Read more about GenZBroking
        //     </button>
        //   </div>
        // </section>