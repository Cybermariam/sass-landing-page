import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  const pricingPlan = [
    {
      title: "Basic",
      price: "9.90",
      features: ["Essential tools", "Customer support", "100 resources"],
    },
    {
      title: "Business",
      price: "29.99",
      featured: true,
      features: [
        "Advanced features",
        "Customer support",
        "Unlimited resources",
        "Automation",
        "Payment system",
      ],
    },
    {
      title: "Standard",
      price: "19.99",
      features: ["Advanced tools", "Customer support", "Unlimited resources"],
    },
  ];

  return (
    <div className="bg-background2 py-20 px-10 font-lora" id="pricing">
      <div className="container mx-auto">
        <h3 className="text-center text-4xl mb-8 text-slate-700 font-lora">
          Your business, your perfect plan
        </h3>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="p-1 rounded-md flex bg-slate-100">
            <button className="bg-midnight rounded-sm text-sm text-white px-6 py-2">
              Monthly
            </button>
            <button className="text-slate-600 px-6 py-2 text-sm">Yearly</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {pricingPlan.map((plan, index) => {
            // 1. Define the base colors once
            const isFeatured = plan.featured;
            const cardBg = isFeatured
              ? "bg-[#05255f] text-white"
              : "bg-white text-slate-800";
            const cardLayout = isFeatured
              ? "scale-110 z-10 py-12 shadow-xl"
              : "h-fit border-2 border-slate-100 shadow-sm";

            // 2. Only use this for the icons/borders that don't inherit text color perfectly
            const iconColor = isFeatured ? "text-white" : "text-[#05255f]";

            return (
              <div
                key={index}
                className={`flex flex-col p-8 rounded transition-all ${cardBg} ${cardLayout}`}
              >
                <div className="text-center mb-6">
                  {/* No need for extra color classes here; they inherit from the parent cardBg */}
                  <span className="text-sm font-semibold tracking-widest uppercase opacity-90">
                    {plan.title}
                  </span>
                  <div className="text-4xl font-lora mt-4">
                    <span className="text-2xl align-top">$</span> {plan.price}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCircleCheck className={iconColor} />
                      <span className="text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-md font-bold transition-colors ${
                    isFeatured
                      ? "bg-[#FCD34D] text-midnight hover:bg-yellow-400"
                      : "bg-[#DFE3FF] text-midnight hover:bg-blue-200"
                  }`}
                >
                  Purchase Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
