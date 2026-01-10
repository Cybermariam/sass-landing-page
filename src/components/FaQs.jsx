import React, { useState } from "react";

const FaQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What features are included?",
      featured: true,
      answer:
        "Our SaaS platform comes packed with powerful features designed to streamline your workflow,enhance productivity, and drive efficiency.",
    },
    {
      question: "Can I integrate it with my existing software?",
      answer: "Yes, we offer a 14-day free trial.",
    },
    {
      question: "What security measures are in place?",
      answer: "Yes, we offer a 14-day free trial.",
    },
    {
      question: "How do I get started with my free trial?",
      answer: "Yes, we offer a 14-day free trial.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "Yes, we offer a 14-day free trial.",
    },
    {
      question: "Can I customize the platform to fit my specific needs?",
      answer: "Yes, we offer a 14-day free trial.",
    },
  ];

  const toggleButton = (index) => {
    // FIXED: null closes it if it's already the active one
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className=" py-20 px-10 bg-background/30  relative font-lora"
      id="faq"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-medium font-lora max-w-70 leading-tight text-midnight mb-12 mx-auto">
          Have questions? We’ve got answers
        </h3>

        {/* Logic Fix: Added a wrapper to ensure the list items are centered and sized like the header */}
        <div className="">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            const isFeatured = faq.featured;

            // Kept your CSS exactly as requested
            const cardBg = isFeatured
              ? "bg-background -left-5 absolute px-5 py-2 rounded-t"
              : "bg-white px-4 py-2 border-b";

            return (
              <div key={index} className={`${cardBg} relative`}>
                <div className="flex align-center justify-between">
                  <h5 className="mb-3 text-sm">{faq.question}</h5>
                  <span
                    className="cursor-pointer" // Good for UX
                    onClick={() => toggleButton(index)} // Simplified the call
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="max-w-200 text-sm pb-4 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="bg-midnight text-white text-center rounded p-15 w-full relative -mb-45 mt-20 z-10">
          <h2 className="text-3xl font-lora font-light leading-tight pb-10 max-w-70 m-auto">
            Power up your business today
          </h2>
          <p className="text-sm">
            Get the tools you need to scale your operations.
          </p>
          <button className="bg-tahiti text-midnight mt-5  px-2 py-2 text-14 rounded hover:brightness-95 transition-all">
            Start your free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaQs;
