import React from "react";
import Photo3 from "../assets/photo-3.svg";

const Testimonial = () => {
  return (
    <section className="container mx-auto py-20 px-10" id="testimonials">
      {/* 1. GRID LAYOUT: Splits text and image into two columns on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content Column */}
        <div className="space-y-8 relative">
          {/* Visual Quote Icon (The large "“") */}

          <h3 className="text-4xl font-lora font-semibold leading-tight text-midnight">
            Trusted by industry leaders & experts
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            “Switching to this SaaS platform was a game-changer for our
            business. Before, we struggled with inefficiencies, outdated
            systems, and a lack of real-time collaboration. Now, everything is
            streamlined, and our team works seamlessly from anywhere.”
          </p>

          <div>
            <p className="font-bold text-midnight">Michael Reynolds</p>
            <span className="text-sm text-slate-500">COO at NexaCorp</span>
          </div>

          <button className="bg-tahiti text-midnight px-6 py-3 rounded font-semibold hover:brightness-95 transition-all">
            View all testimonials
          </button>
        </div>

        {/* Image Column */}

        <div className="relative">
          <span className="absolute  -left-4 top-15 text-8xl text-midnight font-serif leading-none">
            “
          </span>
          <img
            src={Photo3}
            alt="Michael Reynolds"
            className="rounded w-full h-auto shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
