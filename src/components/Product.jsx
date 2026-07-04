import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

// BROCHURE IMAGE ASSETS
import gate1 from "../assets/gate.png";
import gate2 from "../assets/gate-2.png";
import gate3 from "../assets/gate-3.png";
import win1 from "../assets/uPVC/upvc-1.png";

// Aluminium Gates
// import ag1 from "../assets/Aluminium/ag-1.jpeg";
import ag2 from "../assets/Aluminium/ag-2.jpeg";
import ag3 from "../assets/Aluminium/ag-3.jpeg";
import ag4 from "../assets/Aluminium/ag-4.jpeg";
import ag5 from "../assets/Aluminium/ag-5.jpeg";
import ag6 from "../assets/Aluminium/ag-6.jpeg";
import ag7 from "../assets/Aluminium/ag-7.jpeg";
import ag8 from "../assets/Aluminium/ag-8.jpeg";
import ag9 from "../assets/Aluminium/ag-9.jpeg";
import ag10 from "../assets/Aluminium/ag-10.jpeg";

// Glass Door
import gd1 from "../assets/Glass door/gd-1.jpg";
import gd2 from "../assets/Glass door/gd-2.jpg";
import gd3 from "../assets/Glass door/gd-3.jpg";
import gd4 from "../assets/Glass door/gd-4.jpg";
import gd5 from "../assets/Glass door/gd-5.jpg";
import gd6 from "../assets/Glass door/gd-6.jpg";
import gd7 from "../assets/Glass door/gd-7.jpg";

// Glass Railing
import gr1 from "../assets/Glass railing/gr-1.jpg";
import gr2 from "../assets/Glass railing/gr-2.jpg";
import gr3 from "../assets/Glass railing/gr-3.jpg";
import gr4 from "../assets/Glass railing/gr-4.jpg";
import gr5 from "../assets/Glass railing/gr-5.jpg";
import gr6 from "../assets/Glass railing/gr-6.jpg";
import gr7 from "../assets/Glass railing/gr-7.jpg";

// Steel Gate
import sg1 from "../assets/Steel gate/sg-1.jpg";
import sg2 from "../assets/Steel gate/sg-2.jpg";
import sg3 from "../assets/Steel gate/sg-3.jpg";
import sg4 from "../assets/Steel gate/sg-4.jpg";
import sg5 from "../assets/Steel gate/sg-5.jpg";
import sg6 from "../assets/Steel gate/sg-6.jpg";
import sg7 from "../assets/Steel gate/sg-7.jpg";
import sg8 from "../assets/Steel gate/sg-8.jpg";
import sg9 from "../assets/Steel gate/sg-9.jpg";

// uPVC
import uPVC1 from "../assets/uPVC-1/uPVC-1.jpeg";
import uPVC2 from "../assets/uPVC-1/uPVC-2.jpeg";
import uPVC3 from "../assets/uPVC-1/uPVC-3.jpeg";
import uPVC4 from "../assets/uPVC-1/uPVC-4.jpeg";
import uPVC5 from "../assets/uPVC-1/uPVC-5.jpeg";
import uPVC6 from "../assets/uPVC-1/uPVC-6.jpeg";
import uPVC7 from "../assets/uPVC-1/uPVC-7.jpeg";
import uPVC8 from "../assets/uPVC-1/uPVC-8.jpeg";
import uPVC9 from "../assets/uPVC-1/uPVC-9.jpeg";
import uPVC10 from "../assets/uPVC-1/uPVC-10.jpeg";
import uPVC11 from "../assets/uPVC-1/uPVC-11.jpeg";
import uPVC12 from "../assets/uPVC-1/uPVC-12.jpeg";
import uPVC13 from "../assets/uPVC-1/uPVC-13.jpeg";
import uPVC14 from "../assets/uPVC-1/uPVC-14.jpeg";
import uPVC15 from "../assets/uPVC-1/uPVC-15.jpeg";

const categories = [
  "All Systems",
  "Aluminium Gates",
  "uPVC Windows",
  "Steel Gates",
  "Glass Doors",
  "Glass Railings",
];

const productCatalog = [
  // --- Aluminium Gates (10 Images) ---
  {
    id: "01",
    category: "Aluminium Gates",
    // title: "The Linear Monolith",
    location: "Series A-1",
    image: ag10,
  },
  {
    id: "02",
    category: "Aluminium Gates",
    // title: "LED Linear Profile",
    location: "Series A-2",
    image: ag2,
  },
  {
    id: "03",
    category: "Aluminium Gates",
    // title: "Signature Louvre Gate",
    location: "Series A-3",
    image: ag3,
  },
  {
    id: "04",
    category: "Aluminium Gates",
    // title: "Flush Handle Core",
    location: "Series A-4",
    image: ag4,
  },
  {
    id: "05",
    category: "Aluminium Gates",
    // title: "Modern Aero Slats",
    location: "Series A-5",
    image: ag5,
  },
  {
    id: "06",
    category: "Aluminium Gates",
    // title: "Contemporary Solid Pivot",
    location: "Series A-6",
    image: ag6,
  },
  {
    id: "07",
    category: "Aluminium Gates",
    // title: "Minimalist Border Panel",
    location: "Series A-7",
    image: ag7,
  },
  {
    id: "08",
    category: "Aluminium Gates",
    // title: "Architectural Grid Gate",
    location: "Series A-8",
    image: ag8,
  },
  {
    id: "09",
    category: "Aluminium Gates",
    // title: "Urban Shield System",
    location: "Series A-9",
    image: ag9,
  },
  {
    id: "10",
    category: "Aluminium Gates",
    // title: "Premium Slatted Boundary",
    location: "Series A-10",
    image: ag10,
  },

  // --- uPVC Windows (16 Images - including win1) ---
  {
    id: "11",
    category: "uPVC Windows",
    // title: "Minimalist Casement",
    location: "Series W-1",
    image: win1,
  },
  {
    id: "12",
    category: "uPVC Windows",
    // title: "Panoramic Sliding Aperture",
    location: "Series W-2",
    image: uPVC1,
  },
  {
    id: "13",
    category: "uPVC Windows",
    // title: "Double-Glazed Fixed Frame",
    location: "Series W-3",
    image: uPVC2,
  },
  {
    id: "14",
    category: "uPVC Windows",
    // title: "Awning Ventilation Pod",
    location: "Series W-4",
    image: uPVC3,
  },
  {
    id: "15",
    category: "uPVC Windows",
    // title: "Tilt & Turn Premium",
    location: "Series W-5",
    image: uPVC4,
  },
  {
    id: "16",
    category: "uPVC Windows",
    // title: "Acoustic Glazing Suite",
    location: "Series W-6",
    image: uPVC5,
  },
  {
    id: "17",
    category: "uPVC Windows",
    // title: "Thermal Frame Horizon",
    location: "Series W-7",
    image: uPVC6,
  },
  {
    id: "18",
    category: "uPVC Windows",
    // title: "Classic Arch Sash",
    location: "Series W-8",
    image: uPVC7,
  },
  {
    id: "19",
    category: "uPVC Windows",
    // title: "Multi-Track Slider",
    location: "Series W-9",
    image: uPVC8,
  },
  {
    id: "20",
    category: "uPVC Windows",
    // title: "Slimline Profile Vent",
    location: "Series W-10",
    image: uPVC9,
  },
  {
    id: "21",
    category: "uPVC Windows",
    // title: "Contemporary Villa Frame",
    location: "Series W-11",
    image: uPVC10,
  },
  {
    id: "22",
    category: "uPVC Windows",
    // title: "Bay Window Layout",
    location: "Series W-12",
    image: uPVC11,
  },
  {
    id: "23",
    category: "uPVC Windows",
    // title: "Sky View Fixed Top",
    location: "Series W-13",
    image: uPVC12,
  },
  {
    id: "24",
    category: "uPVC Windows",
    // title: "Georgian Bar Accent",
    location: "Series W-14",
    image: uPVC13,
  },
  {
    id: "25",
    category: "uPVC Windows",
    // title: "High-Span Slide System",
    location: "Series W-15",
    image: uPVC14,
  },
  {
    id: "26",
    category: "uPVC Windows",
    // title: "Executive Soundproof Bay",
    location: "Series W-16",
    image: uPVC15,
  },

  // --- Steel Architecture
  {
    id: "27",
    category: "Steel Gates",
    // title: "Forged Matrix Gate",
    location: "Series S-1",
    image: sg1,
  },
  {
    id: "28",
    category: "Steel Gates",
    // title: "Laser-Cut Aero Gate",
    location: "Series S-2",
    image: sg2,
  },
  {
    id: "29",
    category: "Steel Gates",
    // title: "Industrial Armor Barrier",
    location: "Series S-3",
    image: sg3,
  },
  {
    id: "30",
    category: "Steel Gates",
    // title: "Oxidized Geometric Panel",
    location: "Series S-4",
    image: sg4,
  },
  {
    id: "31",
    category: "Steel Gates",
    // title: "Heavy Structural Wing",
    location: "Series S-5",
    image: sg5,
  },
  {
    id: "32",
    category: "Steel Gates",
    // title: "Linear Mesh Enclosure",
    location: "Series S-6",
    image: sg6,
  },
  {
    id: "33",
    category: "Steel Gates",
    // title: "Minimal Rod Framework",
    location: "Series S-7",
    image: sg7,
  },
  {
    id: "34",
    category: "Steel Gates",
    // title: "Contemporary Iron Lattice",
    location: "Series S-8",
    image: sg8,
  },
  {
    id: "35",
    category: "Steel Gates",
    // title: "Brushed Tech Portal",
    location: "Series S-9",
    image: sg9,
  },
  {
    id: "36",
    category: "Steel Gates",
    // title: "Classic Modernist Gate",
    location: "Series S-10",
    image: gate1,
  },
  {
    id: "37",
    category: "Steel Gates",
    // title: "Architectural Screen Pivot",
    location: "Series S-11",
    image: gate2,
  },
  {
    id: "38",
    category: "Steel Gates",
    // title: "Heritage Forged Core",
    location: "Series S-12",
    image: gate3,
  },

  // --- Glass Doors (7 Images) ---
  {
    id: "39",
    category: "Glass Doors",
    // title: "The Floating Pivot",
    location: "Series G-1",
    image: gd1,
  },
  {
    id: "40",
    category: "Glass Doors",
    // title: "Sliding Partition Grid",
    location: "Series G-2",
    image: gd2,
  },
  {
    id: "41",
    category: "Glass Doors",
    // title: "Bi-Fold Acoustic System",
    location: "Series G-3",
    image: gd3,
  },
  {
    id: "42",
    category: "Glass Doors",
    // title: "Heavy Hydraulic Entrance",
    location: "Series G-4",
    image: gd4,
  },
  {
    id: "43",
    category: "Glass Doors",
    // title: "Frameless Clear Pass",
    location: "Series G-5",
    image: gd5,
  },
  {
    id: "44",
    category: "Glass Doors",
    // title: "Frosted Studio Track",
    location: "Series G-6",
    image: gd6,
  },
  {
    id: "45",
    category: "Glass Doors",
    // title: "Black Profile French Door",
    location: "Series G-7",
    image: gd7,
  },

  // --- Premium Railings (7 Images) ---
  {
    id: "46",
    category: "Glass Railings",
    // title: "Continuous Balustrade",
    location: "Series R-1",
    image: gr1,
  },
  {
    id: "47",
    category: "Glass Railings",
    // title: "Minimalist Handrail Track",
    location: "Series R-2",
    image: gr2,
  },
  {
    id: "48",
    category: "Glass Railings",
    // title: "Staircase Structural Mesh",
    location: "Series R-3",
    image: gr3,
  },
  {
    id: "49",
    category: "Glass Railings",
    // title: "Spigot Glass System",
    location: "Series R-4",
    image: gr4,
  },
  {
    id: "50",
    category: "Glass Railings",
    // title: "Side-Mounted Profile",
    location: "Series R-5",
    image: gr5,
  },
  {
    id: "51",
    category: "Glass Railings",
    // title: "Standoff Button Railing",
    location: "Series R-6",
    image: gr6,
  },
  {
    id: "52",
    category: "Glass Railings",
    // title: "Top-Channel Crystal View",
    location: "Series R-7",
    image: gr7,
  },
];

export default function Product() {
  const [activeFilter, setActiveFilter] = useState("All Systems");
  const [selectedImage, setSelectedImage] = useState(null);

  const fullCatalog = productCatalog.filter(
    (item) => activeFilter === "All Systems" || item.category === activeFilter,
  );

  const filteredCatalog =
    activeFilter === "All Systems" ? fullCatalog.slice(0, 15) : fullCatalog;

  return (
    <section
      id="products"
      className="bg-[#F4F1EA] text-neutral-900 pt-10 md:pt-20 pb-1 px-4 sm:px-8 lg:px-8 selection:bg-neutral-900 selection:text-white antialiased"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* EDITORIAL CATALOGUE HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-neutral-300 pb-10 w-full overflow-hidden">
          <div className="space-y-1 shrink-0">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[10px] sm:text-xs text-[#B58A48] mb-4 sm:mb-6">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter leading-none text-neutral-900">
              Products <span className="text-[#B58A48]">Showcase.</span>
            </h2>
          </div>

          {/* LUXURY UI TABS (No Scrollbar, Flex Wrap Optimized, Ultra Smooth Transitions) */}
          <div className="w-full lg:w-auto border-t border-neutral-300/60 lg:border-none pt-8 lg:pt-0">
            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 ease-out rounded-full border shrink-0 ${
                      isActive
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-md scale-[1.03]"
                        : "bg-white/40 text-neutral-600 border-neutral-300/70 hover:bg-white hover:text-neutral-900 hover:border-neutral-400"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FLUSH ROW GRID - Grid transitions smoothly when catalog updates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start auto-rows-max transition-all duration-500">
          {filteredCatalog.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between cursor-pointer group w-full animate-fade-in"
              onClick={() => setSelectedImage(product.image)}
              style={{
                animation: "fadeIn 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards",
              }}
            >
              {/* Image Box */}
              <div className="w-full aspect-[16/10] bg-neutral-200/60 overflow-hidden relative transition-all duration-500 border border-neutral-300/40">
                <div className="absolute inset-0 bg-neutral-900/5 opacity-40 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.25,1,0.5,1) group-hover:scale-[1.04]"
                />

                {/* Micro Meta Label */}
                <div className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-widest text-neutral-700 bg-[#F4F1EA]/90 backdrop-blur-md px-2 py-1 uppercase rounded-sm border border-neutral-300/50">
                  {product.id} &middot; {product.category.split(" ")[0]}
                </div>

                <div className="absolute bottom-4 right-4 z-20 w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <ArrowUpRight size={15} strokeWidth={2} />
                </div>
              </div>

              {/* Specs Label Area */}
              <div className="mt-4 pt-1 group-hover:border-neutral-400 transition-colors duration-500">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-neutral-800 group-hover:text-neutral-900 transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for Grid Items */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* ULTRA-CLEAN FULL SCREEN LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur"
            onClick={() => setSelectedImage(null)}
          >
            <X size={22} strokeWidth={2} />
          </button>

          {/* Clean Display Frame */}
          <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Architectural Preview"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
