// import React from "react";

// import { FiCloudDrizzle } from "react-icons/fi";

// const FeatureSection = () => {
//   return (
//     <section
//       id="section"
//       className="w-full flex justify-between flex-col mx-auto font-lora py-20"
//     >
//       <div>
//         <h1 className="md:text-center text-3xl md:max-w-100 mx-auto pb-7">
//           A platform that transforms the way you work
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="flex gap-4 pb-4">
//             <FiCloudDrizzle size={32} />
//             <div>
//               <h4 className="pb-2">Adapt to your needs</h4>
//               <p className="text-sm md:max-w-70">
//                 A fully customized SaaS solution that scales with your business
//                 growth
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 pb-4">
//             <FiCloudDrizzle size={32} />
//             <div>
//               <h4>Fully Remote</h4>
//               <p className="text-sm md:max-w-70">
//                 {" "}
//                 Choose the deployment option that best fits your operational
//                 needs
//               </p>
//             </div>
//           </div>

//           {/* 3rd  */}
//           <div className="flex gap-4 pb-4">
//             <FiCloudDrizzle size={32} />
//             <div>
//               <h4>Automation & Efficiency</h4>
//               <p className="text-sm md:max-w-70">
//                 Reduce manual tasks and improve productivity with smart
//                 automation.
//               </p>
//             </div>
//           </div>
//           {/* 4th */}

//           <div className="flex gap-4 pb-4">
//             <FiCloudDrizzle size={32} />
//             <div>
//               <h4>Fully Remote</h4>
//               <p className="text-sm md:max-w-70">
//                 Industry-leading security measures ensures your data remain
//                 protected.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;
import React from "react";
// I've used common Lucide/Feather icons that match your image better
import { FiSettings, FiCloud, FiZap, FiShield } from "react-icons/fi";

const FeatureSection = () => {
  // 1. Define your data in an array
  const features = [
    {
      id: 1,
      title: "Adapt to your needs",
      description:
        "A fully customized SaaS solution that scales with your business growth.",
      icon: <FiSettings size={40} className="text-midnight" />,
    },
    {
      id: 2,
      title: "Fully remote",
      description:
        "Choose the deployment option that best fits your operational needs.",
      icon: <FiCloud size={40} className="text-midnight" />,
    },
    {
      id: 3,
      title: "Automation & efficiency",
      description:
        "Reduce manual tasks and improve productivity with smart automation.",
      icon: <FiZap size={40} className="text-midnight" />,
    },
    {
      id: 4,
      title: "Secure & compliant",
      description:
        "Industry-leading security measures ensure your data remains protected.",
      icon: <FiShield size={40} className="text-midnight" />,
    },
  ];

  return (
    /* OUTER WRAPPER: Takes full screen width */
    <section id="section" className="w-full bg-white font-lora py-25">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <h2 className="text-center text-3xl md:text-5xl text-midnight font-medium mb-20 max-w-2xl mx-auto leading-tight">
          A platform that transforms the way you work
        </h2>

        {/* 2. Map through the features array */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-6">
              {/* Icon Container */}
              <div className="shrink-0 p-2">{feature.icon}</div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-midnight mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
