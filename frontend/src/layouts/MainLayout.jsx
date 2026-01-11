import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RotatingText from "../../animation/RotatingText";
import ClickSpark from "../../animation/ClickSpark";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
    
      </ClickSpark>
    </div>
  );
};

export default MainLayout;
