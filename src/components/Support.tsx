import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const Support = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-around mt-14 h-auto sm:h-40 items-center p-4 sm:p-0"
      style={{ background: "#FAF3EA" }}
    >
      <div className="flex items-center mb-4 sm:mb-0">
        <GiTrophyCup className="text-4xl mr-2" />
        <div>
          <h3 className="font-bold">High Quality</h3>
          <span className="text-gray-600">crafted from top materials</span>
        </div>
      </div>
      <div className="flex items-center mb-4 sm:mb-0">
        <IoCheckmarkDoneCircle className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">Warranty Protection</h3>
          <span className="text-gray-600">Over 2 years</span>
        </div>
      </div>
      <div className="flex items-center mb-4 sm:mb-0">
        <FaBoxOpen className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">Free Shipping</h3>
          <span className="text-gray-600">Order over 150 $</span>
        </div>
      </div>
      <div className="flex items-center mb-4 sm:mb-0">
        <MdSupportAgent className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">24 / 7 Support</h3>
          <span className="text-gray-600">Dedicated support</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
