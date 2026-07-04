import {
  Flame,
  Clock3,
  Shield,
  Leaf,
  Bug,
  Droplets,
  Sparkles,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "FIRE RESISTANT",
    text: "Built to withstand extreme temperatures.",
  },
  {
    icon: Clock3,
    title: "LONG LIFE",
    text: "Designed for decades, not years.",
  },
  {
    icon: Shield,
    title: "ANTI CORROSION",
    text: "Protection against rust and wear.",
  },
  {
    icon: Leaf,
    title: "SUSTAINABLE",
    text: "Environmentally responsible production.",
  },
  {
    icon: Bug,
    title: "TERMITE FREE",
    text: "Safe from structural damage.",
  },
  {
    icon: Droplets,
    title: "WEATHER PROOF",
    text: "Performs in every climate.",
  },
  {
    icon: Sparkles,
    title: "LOW MAINTENANCE",
    text: "Less upkeep, more performance.",
  },
  {
    icon: Timer,
    title: "ON TIME DELIVERY",
    text: "Reliable execution and scheduling.",
  },
];

export default function Promises() {
  return (
    <section id="promises" className="py-7 sm:py-16 md:py-20 bg-[#F4F0E8]">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Border */}
        <div className="border-t border-[#d5c9b5] mb-8 md:mb-16 lg:mb-20"></div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <p className="text-[11px] sm:text-xs tracking-[4px] sm:tracking-[5px] uppercase text-[#9d7a46] mb-6 md:mb-8">
              Our Standards
            </p>

            <h2 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-none lg:leading-[0.95] font-light text-black">
              Engineered
              <span className="block text-[#b2874c]">Better.</span>
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-600 max-w-sm leading-relaxed">
              Every material and process is selected to deliver durability,
              precision and long-term performance.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-y-10 sm:gap-y-14 lg:gap-y-20 gap-x-6 md:gap-x-10 lg:gap-x-12">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border border-[#b2874c] flex items-center justify-center mb-4 sm:mb-5 lg:mb-8">
                    <Icon
                      size={20}
                      strokeWidth={1.3}
                      className="text-[#b2874c] sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                    />
                  </div>

                  <h3 className="text-[11px] sm:text-xs lg:text-sm tracking-[2px] sm:tracking-[3px] lg:tracking-[5px] font-medium mb-2 lg:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[13px] sm:text-sm text-neutral-500 leading-6">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-b border-[#d5c9b5] mt-14 sm:mt-16 md:mt-20 lg:mt-24"></div>
      </div>
    </section>
  );
}
