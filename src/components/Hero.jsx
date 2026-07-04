import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ag10 from "../assets/Aluminium/ag-10.jpeg";
import sg3 from "../assets/Steel gate/sg-3.jpg";
import gate1 from "../assets/gate.png";
import gate2 from "../assets/gate-2.png";
import gate3 from "../assets/gate-3.png";

const images = [gate3, gate1, gate2];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#F4F1EA] overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-25">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
            }}
            loop
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt=""
                  className="
                    w-full
                    h-[350px]
                    sm:h-[500px]
                    md:h-[600px]
                    lg:h-[750px]
                    object-cover
                    rounded-[25px]
                    sm:rounded-[35px]
                    lg:rounded-[55px]
                  "
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Badge */}
          <div
            className="
              absolute top-4 left-4
              sm:top-6 sm:left-6
              lg:top-8 lg:left-8
              z-10
              bg-white/90
              backdrop-blur-lg
              px-4 py-2
              sm:px-5 sm:py-3
              lg:px-6 lg:py-3
              rounded-full
              shadow-xl
            "
          >
            <p className="uppercase tracking-[2px] lg:tracking-[3px] text-[10px] sm:text-xs">
              Premium Gates
            </p>
          </div>

          {/* Right Number */}
          <div
            className="
              absolute top-4 right-4
              sm:top-6 sm:right-6
              lg:top-8 lg:right-8
              z-10
              bg-white
              rounded-full
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-24 md:h-24
              lg:w-28 lg:h-28
              flex flex-col
              justify-center
              items-center
              shadow-xl
            "
          >
            <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-500 tracking-[2px]">
              DESIGN
            </span>

            <span className="text-xl sm:text-3xl lg:text-4xl font-bold">
              01
            </span>
          </div>

          {/* Collection */}
          <div
            className="
              absolute bottom-4 left-4
              sm:bottom-6 sm:left-6
              lg:bottom-8 lg:left-8
              z-10
              bg-white
              rounded-2xl
              lg:rounded-3xl
              px-4 py-3
              sm:px-5 sm:py-4
              lg:px-7 lg:py-5
              shadow-xl
            "
          >
            <p className="text-xs sm:text-sm text-gray-500">Collection</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">20+</h2>
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 mt-10 sm:mt-14 lg:mt-20">
          <div>
            <h1
              className="
                text-[42px]
                sm:text-[60px]
                md:text-[75px]
                lg:text-[95px]
                leading-[0.9]
                font-normal
              "
            >
              BUILT TO LAST
            </h1>

            <h1
              className="
                text-[42px]
                sm:text-[60px]
                md:text-[75px]
                lg:text-[95px]
                leading-[1]
                font-normal
              "
            >
              DESIGNED <span className="text-[#B58A48]">TO IMPRESS</span>
            </h1>
          </div>

          <div className="max-w-sm flex flex-col justify-end pb-0 lg:pb-4">
            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
              Modern aluminium gates designed for luxury homes, combining
              durability, aesthetics and architecture.
            </p>

            <button className="mt-6 sm:mt-8 lg:mt-10 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm border-b border-black w-fit pb-2 hover:pr-3 transition-all">
              Explore →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
