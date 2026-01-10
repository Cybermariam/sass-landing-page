import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <div className="min-h-screen  w-full flex flex-col overflow-x-hidden">
      <Navbar />
      <LandingPage />

      <Footer />
    </div>
  );
};

export default App;
