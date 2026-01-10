import React from "react";

const Services = () => {
  const services = [
    {
      title: "Workflow Automation",
      text: "Optimize your processes with intelligent automation reducing manual tasks",
      action: "Learn more",
    },
    {
      title: "Data Security & Compliance",
      text: "Protect sensitive data with enterprise-grade security and stay compliant with regulations.",
      action: "Learn more",
    },
    {
      title: "Cloud-Based",
      text: "Seamlessly scale your operations with a reliable and secure cloud-hosted platform.",
      action: "Learn more",
    },
    {
      title: "AI-Powered Insights",
      text: "Leverage data-driven insights to make informed business decisions with analytics.",
      action: "Learn more",
    },
    {
      title: "Remote Collaboration",
      text: "Enhance teamwork with integrated tools that enable seamless communication.",
      action: "Learn more",
    },
    {
      title: "Custom API Integrations",
      text: "Connect your favorite apps and services with our flexible API integrations.",
      action: "Learn more",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-10 font-lora" id="services">
      <h2 className="text-center text-4xl font-lora mb-16 text-slate-700">
        Discover our powerful solutions
      </h2>

      {/* 1. GRID WRAPPER MOVED OUTSIDE THE MAP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            {/* 2. OPTIONAL: Add a light blue bg to the first card like your screenshot */}
            <div
              className={`p-6 rounded-lg w-full ${
                index === 0 ? "bg-indigo-50/50" : ""
              }`}
            >
              <h3 className="text-xl font-lora text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.text}
              </p>
              <button className="flex items-center gap-2 text-slate-500 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded transition-all text-sm">
                {service.action} <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
