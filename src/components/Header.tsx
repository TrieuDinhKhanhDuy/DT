import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
const Header = () => {
  return (
    <div className="w-full">
    <div className="headers flex justify-between items-center px-10 w-full">
      {/* Phần trái */}
      <div className="flex-1 flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLVqFUcHEhfstPmbDTiTotKzuIzbxN4WGoBMYwpIuVonaVWrBhPzH35ArOA5FBnV7aNmgFke6txXZP1PkBrcykn5jHEbJez3Si5l-AfFFBoaRSxojE1LJFb66vlBPn2QgMEzEBuEL64z6PoypbDLM0VwAKr9B65uuC4Plx79MWRN13vK6SBG1Tt513D1~DKkxgCOchHBx-VAx3fBUc1DwElSul5Cg0tEZ0K6aJoYrl5lLcOBaHS8DLaR~RFBycZtobuDYoW-9IJTW1oOj5oA~xqOO1VF~PIOl6rwi4ItKrvDpz7Wjb0bYpDhRFWfVhihNDjEP88bisjgZz~CDJgNHg__"
          alt=""
          width={"100px"}
        />
        <h3 className="font-bold text-3xl">FURINO</h3>
      </div>
      
      {/* Phần giữa */}
      <ul className="flex justify-center flex-1">
        <li className="px-14 py-2">Home</li>
        <li className="px-14 py-2">Shop</li>
        <li className="px-14 py-2">About</li>
        <li className="px-14 py-2">Contact</li>
      </ul>
      
      {/* Phần phải */}
      <div className="flex-1 flex justify-end items-center">
        <FaRegUser className="mr-4 text-xl" />
        <CiSearch className="mr-4 text-xl" />
        <CiHeart className="mr-4 text-xl" />
        <BsCart2  className="mr-4 text-xl"/>
      </div>
    </div>
  </div>
  
  );
};

export default Header;
