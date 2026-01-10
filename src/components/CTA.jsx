import React from "react";

const CTA = () => {
  return (
    <div className="relative">
      <div className="bg-midnight text-white text-center rounded p-15 w-full -top-5 absolute">
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
  );
};

export default CTA;
