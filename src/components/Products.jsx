import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// IMPORT YOUR BROCHURE IMAGES
import gate1 from "../assets/gate.png";
import gate2 from "../assets/gate-2.png";
import gate3 from "../assets/gate-3.png";
import gate4 from "../assets/gate.png";
import gate5 from "../assets/gate-2.png";

import win1 from "../assets/uPVC/upvc-1.png";
import win2 from "../assets/gate-3.png";
import win3 from "../assets/gate-2.png";
import win4 from "../assets/gate-3.png";
import win5 from "../assets/gate-2.png";

const collectionsData = {
  "aluminium-gates": {
    id: "01",
    label: "Aluminium Gates",
    items: [
      { no: "01", title: "Modern Gates", image: gate1 },
      { no: "03", title: "LED Gates", image: gate2 },
      { no: "05", title: "Designer Gates", image: gate3 },
      { no: "08", title: "Premium Gates", image: gate4 },
      { no: "11", title: "Signature Gates", image: gate5 },
    ],
  },
  "upvc-windows": {
    id: "02",
    label: "uPVC Windows",
    items: [
      { no: "12", title: "Sliding Windows", image: win1 },
      { no: "13", title: "Casement Windows", image: win2 },
      { no: "16", title: "Fixed Windows", image: win3 },
      { no: "17", title: "Awning Windows", image: win4 },
      { no: "20", title: "Folding Doors", image: win5 },
    ],
  },
  "steel-gates": {
    id: "03",
    label: "Steel Gates",
    items: [
      { no: "21", title: "Stainless Steel Gates", image: gate1 },
      { no: "23", title: "Laser Cut Gates", image: gate2 },
      { no: "25", title: "Industrial Gates", image: gate3 },
      { no: "28", title: "Forged Steel Gates", image: gate4 },
      { no: "31", title: "Minimal Steel Gates", image: gate5 },
    ],
  },
  "glass-doors": {
    id: "04",
    label: "Glass Doors",
    items: [
      { no: "32", title: "Frameless Glass Doors", image: win1 },
      { no: "34", title: "Sliding Partition Doors", image: win2 },
      { no: "36", title: "Bi-Fold Glass Systems", image: win3 },
      { no: "38", title: "Acoustic Glass Doors", image: win4 },
      { no: "40", title: "Pivot Glass Doors", image: win5 },
    ],
  },
  railings: {
    id: "05",
    label: "Premium Railings",
    items: [
      { no: "41", title: "Glass Balustrades", image: gate1 },
      { no: "43", title: "Minimalist Handrails", image: gate2 },
      { no: "45", title: "Balcony Railing Systems", image: gate3 },
      { no: "48", title: "Laser Cut Balcony", image: gate4 },
      { no: "50", title: "Staircase Railings", image: gate5 },
    ],
  },
};

export default function Products() {
  const [activeTab, setActiveTab] = useState("aluminium-gates");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const currentCollection = collectionsData[activeTab];

  const activeProduct =
    currentCollection.items[selectedItemIndex] || currentCollection.items[0];

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSelectedItemIndex(0);
  };

  return (
    <section
      className="bg-[#F4F1EA] pt-14 md:pt-16 pb-0 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 md:mb-12 items-start">
          <div className="lg:col-span-8">
            <p className="text-[11px] sm:text-xs tracking-[4px] sm:tracking-[5px] uppercase text-[#9d7a46] mb-6 md:mb-8">
              Product Portfolio
            </p>

            <h2 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-light tracking-tight text-neutral-900 leading-[0.95]">
              Architectural{" "}
              <span className="font-normal text-[#b2874c]">systems.</span>
            </h2>
          </div>
        </div>

        {/* TABS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-nowrap gap-3 pb-8 md:pb-10 mb-10 md:mb-12 border-b border-neutral-300/40">
          {Object.entries(collectionsData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`w-full lg:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
                activeTab === key
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                  : "bg-white/40 text-neutral-600 border-neutral-300/60 hover:bg-white hover:text-neutral-900"
              }`}
            >
              <span className="font-mono text-[10px] sm:text-xs text-neutral-400 mr-2">
                {data.id}
              </span>
              <span className="truncate">{data.label}</span>
            </button>
          ))}
        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2 order-2 lg:order-1">
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                Collection / {currentCollection.id}
              </span>

              <h3 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-6 md:mb-8">
                {currentCollection.label}
              </h3>

              <div className="space-y-2 sm:space-y-3">
                {currentCollection.items.map((item, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setSelectedItemIndex(index)}
                    onClick={() => setSelectedItemIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-center justify-between group/btn border ${
                      selectedItemIndex === index
                        ? "bg-white border-neutral-300 shadow-sm sm:pl-7"
                        : "bg-transparent border-transparent hover:bg-neutral-200/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span
                        className={`text-[11px] sm:text-xs font-mono shrink-0 ${
                          selectedItemIndex === index
                            ? "text-orange-500"
                            : "text-neutral-400"
                        }`}
                      >
                        {item.no}
                      </span>

                      <span className="font-medium text-neutral-800 tracking-wide text-sm sm:text-base truncate">
                        {item.title}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={`transition-all duration-300 shrink-0 ${
                        selectedItemIndex === index
                          ? "text-orange-500 opacity-100"
                          : "text-neutral-400 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-300/60 hidden lg:block">
              <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                Active Preview
              </p>

              <p className="text-xl font-medium text-neutral-900">
                {activeProduct.title}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-[#F8F5EF] rounded-2xl sm:rounded-3xl overflow-hidden relative group shadow-inner border border-neutral-300/60 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 min-h-[280px] sm:min-h-[400px] md:min-h-[500px]">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-full max-h-[600px] object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Mobile Active Preview */}
            <div className="mt-5 lg:hidden">
              <p className="text-[11px] text-neutral-400 uppercase tracking-widest mb-1">
                Active Preview
              </p>

              <p className="text-lg font-medium text-neutral-900">
                {activeProduct.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
