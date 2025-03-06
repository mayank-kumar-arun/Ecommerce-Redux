import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full px-4 py-4">
      <div className="flex items-center justify-center">
        <hr className="h-px w-full sm:w-4/5 bg-gray-400 opacity-50 border-none" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-center sm:text-left">
        <div className="mb-2 sm:mb-0">
          <img className="h-16 sm:h-20" src={logo} alt="logo" />
        </div>
        <div>
          <p className="text-black text-xs sm:text-sm font-inter">
            Copyright {year} page by Mayank
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
