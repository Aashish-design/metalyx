import { useState } from "react";
import { ArrowRight } from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "Understanding your project requirements and objectives.",
  },
  {
    number: "02",
    title: "Planning",
    text: "Material selection and technical consultation.",
  },
  {
    number: "03",
    title: "Production",
    text: "Precision manufacturing and quality control.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "Timely execution and project support.",
  },
];

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Web3Forms ki access key yahan enter karein
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="project" className="bg-[#F4F1EA] pt-8 pb-14 md:py-18 lg:py-16">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Border */}
        <div className="border-t border-[#D9CEBD] mb-10 md:mb-12"></div>

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16 lg:mb-20">
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[10px] sm:text-xs text-[#B58A48] mb-4 sm:mb-6">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light">
            Tell us about <span className="text-[#B58A48]">your project.</span>
          </h2>

          <p className="mt-6 sm:mt-8 text-base md:text-lg text-neutral-500 leading-7 md:leading-8 max-w-xl">
            Share your project details, timelines and requirements. Our team
            will get back to you with the right solution.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-12">
              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  Phone
                </label>

                <input
                  type="text"
                  name="Phone"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  Email
                </label>

                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  City
                </label>

                <input
                  type="text"
                  name="City"
                  placeholder="Mumbai"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  Project Type
                </label>

                <input
                  type="text"
                  name="Project Type"
                  placeholder="Commercial"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                  Material
                </label>

                <input
                  type="text"
                  name="Material"
                  placeholder="Steel / Aluminium"
                  className="w-full bg-transparent border-b border-[#D9CEBD] pb-3 sm:pb-4 outline-none text-base sm:text-lg placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="mt-10 md:mt-14">
              <label className="block text-[10px] sm:text-[11px] uppercase tracking-[3px] sm:tracking-[4px] text-neutral-400 mb-3 sm:mb-4">
                Project Details
              </label>

              <textarea
                rows="5"
                name="Project Details"
                placeholder="Tell us about your project requirements..."
                className="w-full bg-transparent border-b border-[#D9CEBD] pb-4 outline-none resize-none text-base sm:text-lg placeholder:text-neutral-400"
              />
            </div>

            {/* Status Feedback Text */}
            {result && (
              <p className="mt-4 text-sm font-medium text-[#B58A48]">
                {result}
              </p>
            )}

            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto justify-center bg-[#1C1C1C] text-white px-8 sm:px-10 py-4 uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm flex items-center gap-3 transition hover:bg-[#B58A48] disabled:bg-neutral-500"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <ArrowRight size={16} />
              </button>

              <span className="text-sm text-neutral-500">
                Response within 24–48 hours.
              </span>
            </div>
          </form>

          {/* Process */}
          <div className="lg:col-span-5">
            <div className="border-t border-[#D9CEBD]">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="py-6 sm:py-8 border-b border-[#D9CEBD] group cursor-pointer"
                >
                  <div className="flex gap-4 sm:gap-8">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#B58A48] min-w-[45px] sm:min-w-[60px]">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl mb-2 transition-transform duration-300 group-hover:translate-x-2">
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-base text-neutral-500 leading-6 sm:leading-7">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-sm text-neutral-500 leading-7 max-w-sm">
              From the first conversation to final delivery, every step is
              handled with precision and attention to detail.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
