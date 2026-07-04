import about1 from "../assets/gate.png";
import about2 from "../assets/gate-2.png";
import about3 from "../assets/uPVC/upvc-3.png";
import about4 from "../assets/uPVC/upvc-1.png";
import about5 from "../assets/uPVC/upvc-2.png";

export default function About() {
  const images = [about1, about3, about2, about4, about5];

  const stats = [
    { value: "10+", label: "Years" },
    { value: "500+", label: "Projects" },
    { value: "20+", label: "Collections" },
    { value: "30+", label: "Products" },
  ];

  return (
    <section
      id="about"
      className="bg-[#F4F1EA] text-[#1A1A1A] pt-10 md:pt-18 pb-1 md:pb-4 overflow-hidden"
    >
      {/* Infinite Smooth Marquee Track */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Flex Container */}
        <div className="flex w-max gap-3 md:gap-4 px-2 animate-marquee">
          {/* First Render Set (Reduced Sizing) */}
          {images.map((img, index) => (
            <div
              key={`set1-${index}`}
              className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] aspect-[3/4] flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl shadow-sm bg-neutral-200"
            >
              <img
                src={img}
                alt="Architectural Portfolio"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}

          {/* Duplicated Render Set */}
          {images.map((img, index) => (
            <div
              key={`set2-${index}`}
              className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] aspect-[3/4] flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl shadow-sm bg-neutral-200"
            >
              <img
                src={img}
                alt="Architectural Portfolio Duplicated"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clean Asymmetric Content Base Panel */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-10 lg:px-16 mt-10 md:mt-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4 md:pt-12 border-t border-neutral-300/80">
          {/* Main Structural Copy */}
          <div className="lg:col-span-5">
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed tracking-tight">
              Every detail we design - from aluminium systems to architectural
              entrances - is rooted in craftsmanship, engineering precision, and
              the belief that great design should feel effortless.
            </p>
          </div>

          {/* Secondary Subtext & Action Trigger */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start space-y-6 lg:space-y-0">
            <p className="text-sm md:text-base font-light text-neutral-500 leading-relaxed">
              We merge innovation, contemporary aesthetics and precision
              engineering to create architectural experiences that perform
              beautifully and leave a lasting impression.
            </p>
            <button className="group flex items-center gap-4 text-base font-medium tracking-wider uppercase border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors duration-200">
              More about us <span>→</span>
            </button>
          </div>

          {/* Metric Counter Panels */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-neutral-300 pl-4"
              >
                <span className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
