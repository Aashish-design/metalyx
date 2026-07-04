"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    number: "01",
    title: "Industries",
    answer:
      "We serve industrial, commercial and infrastructure sectors with precision manufacturing solutions.",
  },
  {
    number: "02",
    title: "Customization",
    answer:
      "Every product can be tailored according to project requirements, dimensions and finishes.",
  },
  {
    number: "03",
    title: "Quality",
    answer:
      "Strict inspection standards ensure consistent quality throughout production.",
  },
  {
    number: "04",
    title: "Delivery",
    answer:
      "Optimized manufacturing processes help us deliver projects on time.",
  },
  {
    number: "05",
    title: "Support",
    answer:
      "Our team remains available throughout the complete project lifecycle.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F4F1EA] py-1 md:pb-16 overflow-hidden lg:-mt-3">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[5px] text-[10px] md:text-xs text-[#B58A48] mb-4 md:mb-5">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-none">
            Common <span className="text-[#B58A48]">Questions.</span>
          </h2>
        </div>

        {/* Desktop / Large Screen Layout */}
        <div className="hidden lg:flex gap-5 h-[520px]">
          {faqs.map((faq, index) => {
            const isActive = active === index;

            return (
              <div
                key={faq.number}
                onMouseEnter={() => setActive(index)}
                className={`
                  relative overflow-hidden cursor-pointer
                  border transition-all duration-700 ease-out
                  ${
                    isActive
                      ? "flex-[4] bg-[#ECE4D7] border-[#B58A48]"
                      : "flex-1 bg-[#F8F5EF] border-[#DDD2C0] hover:bg-[#EFE8DC]"
                  }
                `}
              >
                <div className="h-full flex flex-col p-8 xl:p-10">
                  {/* Number */}
                  <span
                    className={`text-5xl xl:text-6xl font-light ${
                      isActive ? "text-[#B58A48]" : "text-[#C8B28A]"
                    }`}
                  >
                    {faq.number}
                  </span>

                  {/* Active Card */}
                  {isActive ? (
                    <>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-4xl xl:text-5xl font-light mb-8 text-black">
                          {faq.title}
                        </h3>

                        <p className="text-base xl:text-lg leading-8 xl:leading-9 text-neutral-600 max-w-lg">
                          {faq.answer}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#D2C3AB] pt-6">
                        <span className="uppercase text-xs tracking-[4px] text-[#B58A48]">
                          Metalyx Standards
                        </span>

                        <ArrowUpRight size={28} className="text-[#B58A48]" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1"></div>

                      <div>
                        <h4 className="text-xl font-light text-black leading-snug">
                          {faq.title}
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden mt-8 md:mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.number}
              className="border border-[#DDD2C0] bg-[#F8F5EF] p-5 sm:p-6"
            >
              <span className="text-[#B58A48] text-3xl sm:text-4xl font-light">
                {faq.number}
              </span>

              <h3 className="text-2xl sm:text-3xl mt-4 mb-3 font-light">
                {faq.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-7">
                {faq.answer}
              </p>

              <div className="flex items-center justify-between border-t border-[#D2C3AB] pt-5 mt-6">
                <span className="uppercase text-[10px] tracking-[3px] text-[#B58A48]">
                  Metalyx Standards
                </span>

                <ArrowUpRight size={22} className="text-[#B58A48]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
