import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F4F1EA] pt-1 pb-10 md:pb-12">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Line */}
        <div className="border-t border-[#D7CCBB] mb-10 md:mb-14"></div>

        {/* CTA */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 mb-12 md:mb-24 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-xs text-[#B58A48] mb-5 md:mb-8">
              Let's Talk
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light">
              Ready to discuss{" "}
              <span className="text-[#B58A48]">your next project?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-start lg:items-end">
            <a
              href="mailto:sunshinemetalworld@gmail.com"
              className="group text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light flex items-center gap-2 md:gap-4 break-all"
            >
              sunshinemetalworld@gmail.com
              <ArrowUpRight
                size={24}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 py-10 md:py-12 border-t border-[#D7CCBB]">
          <div>
            <p className="text-[11px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-neutral-400 mb-4">
              Location
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Khajanchi Chauraha Fatima Bypass Road, Gorakhpur
            </p>
          </div>

          <div>
            <p className="text-[11px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-neutral-400 mb-4">
              Phone
            </p>

            <p className="text-base md:text-lg">+91 8318119005</p>
          </div>

          <div>
            <p className="text-[11px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-neutral-400 mb-4">
              Email
            </p>

            <p className="text-base md:text-lg break-all">
              sunshinemetalworld@gmail.com
            </p>
          </div>

          <div>
            <p className="text-[11px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-neutral-400 mb-4">
              Social
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
              <a href="#" className="hover:text-[#B58A48] transition-colors">
                Instagram
              </a>

              <a href="#" className="hover:text-[#B58A48] transition-colors">
                Facebook
              </a>

              <a href="#" className="hover:text-[#B58A48] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D7CCBB] pt-6 md:pt-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="text-lg sm:text-xl md:text-2xl tracking-[4px] sm:tracking-[6px] md:tracking-[8px] font-light">
              METALYX
            </div>
          </div>

          <div className="flex-1 text-right text-[11px] sm:text-xs md:text-sm text-neutral-500">
            © 2026 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
