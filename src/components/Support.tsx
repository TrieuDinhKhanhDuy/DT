import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
const Support = () => {
  return (
    <div
      className="flex justify-around mt-14 h-40 items-center "
      style={{ background: "#FAF3EA" }}
    >
      <div className="flex items-center">
        <GiTrophyCup className="text-4xl mr-2" />
        <div>
          <h3 className="font-bold">High Quality</h3>
          <span style={{color : '#898989'}}>crafted from top materials</span>
        </div>
      </div>
      <div className="flex items-center">
        <IoCheckmarkDoneCircle className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">Warranty Protection</h3>
          <span style={{color : '#898989'}}>Over 2 years</span>
        </div>
      </div>
      <div className="flex items-center">
        <FaBoxOpen className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">Free Shipping</h3>
          <span style={{color : '#898989'}}>
            Order over 150 $
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <MdSupportAgent className="text-5xl mr-2" />
        <div>
          <h3 className="font-bold">24 / 7 Support</h3>
          <span style={{color : '#898989'}}>Dedicated support</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
