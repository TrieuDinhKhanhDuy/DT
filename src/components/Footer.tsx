import React from "react";

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-16 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-300 pb-8">
        <ul className="flex-1 list-none mb-8 sm:mb-0">
          <li className="text-xl font-bold mb-4">Funiro.</li>
          <li className="text-base text-gray-500">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </li>
        </ul>
        <ul className="flex-1 list-none mb-8 sm:mb-0 sm:ml-16">
          <li className="text-xl font-bold mb-4 text-gray-500">Links</li>
          <li className="mb-2 font-semibold">Home</li>
          <li className="mb-2 font-semibold">Shop</li>
          <li className="mb-2 font-semibold">About</li>
          <li className="mb-2 font-semibold">Contact</li>
        </ul>
        <ul className="flex-1 list-none mb-8 sm:mb-0">
          <li className="text-xl font-bold mb-4 text-gray-500">Help</li>
          <li className="mb-2 font-semibold">Privacy Policies</li>
          <li className="mb-2 font-semibold">Returns</li>
          <li className="mb-2 font-semibold">Payment Options</li>
        </ul>
        <ul className="flex-1 list-none">
          <li className="text-xl font-bold mb-4 text-gray-500">Newsletter</li>
          <li>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="bg-gray-700 text-white px-3 py-2 rounded-md border-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">
              SUBSCRIBE
            </button>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 mt-8">
        <p className="text-center text-base font-semibold mt-8 mb-8 text-gray-500">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
