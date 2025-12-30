import React, { useEffect, useRef } from "react";
import images from "../assets/images";

const payments = [
  { name: "MPI", img: images.mpi },
  { name: "Airtel", img: images.airtel },
  { name: "M-Pesa", img: images.mpesa },
  { name: "MTN", img: images.mtn },
  { name: "Wire", img: images.wireTransfer },
  { name: "Kora", img: images.koraPay },
  { name: "Bank", img: images.banktransfer },
  { name: "USDT", img: images.usdt },
  { name: "Visa", img: images.visa },
];

const Fund = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = false;

    // start scrolling after delay
    const timeout = setTimeout(() => {
      start = true;
    }, 2000);

    const scroll = () => {
      if (!start) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      slider.scrollLeft += 0.5; // speed

      // seamless loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
   <section className="w-full bg-white py-16 px-4">
  
  {/* INNER CONTENT WRAPPER */}
  <div className="w-full max-w-7xl mx-auto text-center">

    <p className="text-green-500 uppercase text-sm font-semibold tracking-wider">
      Multi-assets global broker
    </p>

    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
      Fund Your Account Instantly with <br className="hidden md:block" />
      Secure, Flexible Payment Options
    </h2>

    {/* Carousel */}
    <div ref={sliderRef} className="mt-12 overflow-hidden w-full">
      <div className="flex gap-6 w-max py-6">
        {[...payments, ...payments].map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] md:min-w-[160px] h-[70px] md:h-[80px]
                       bg-white rounded-xl shadow-md flex items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[110px] md:w-[140px] h-[50px] md:h-[60px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
        Open Account
      </button>
      <button className="px-8 py-3 rounded-lg border border-gray-800 text-gray-900 font-semibold hover:bg-gray-100 transition">
        Try Free Demo
      </button>
    </div>

  </div>
</section>

  );
};

export default Fund;
