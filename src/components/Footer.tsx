import React from "react";

const Footer = () => {
  return (
   
    <div className="mx-16 h-auto">
    <div className="flex justify-between items-start border-b-1 border-gray-700">
      <ul className="flex-1 list-none mt-8">
        <li className="text-xl font-bold mb-10">Funiro.</li>
        <li className="text-base" style={{color:"#9F9F9F"}}>400 University Drive Suite 200 Coral Gables, FL 33134 USA</li>
      </ul>
      <ul className="flex-1 list-none mt-8 ml-52">
        <li className="text-xl font-bold mb-10" style={{color:"#9F9F9F"}}>Links</li>
        <li className="mb-10 font-semibold">Home</li>
        <li className="mb-10 font-semibold">Shop</li>
        <li className="mb-10 font-semibold">About</li>
        <li className="mb-10 font-semibold">Contact</li>
      </ul>
      
      <ul className="flex-1 list-none mt-8">
        <li className="text-xl font-bold mb-10" style={{color:"#9F9F9F"}}>Help</li>
        <li className="mb-10 font-semibold">Privacy Policies</li>
        <li className="mb-10 font-semibold">Returns</li>
        <li className="mb-10 font-semibold">Payment Options</li>
      </ul>
      
      <ul className="flex-2 list-none mt-8">
        <li className="text-xl font-bold mb-10" style={{color:"#9F9F9F"}}>Newsletter</li>
        <li>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="bg-gray-700 text-white px-3 py-2 rounded-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">SUBSCRIBE</button>
        </li>
      </ul>
    </div>
    
    <div className="border-t border-gray-300 mt-8">
      <p className="text-xl font-semibold mt-8 mb-8">2023 furino. All rights reverved</p>
    </div>
  </div>
  
  );
};

export default Footer;
