import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useShoppingContext } from "../contexts/ShoppingContext";
import { TiTrash } from "react-icons/ti";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const { cartQty, cartItems, totalPrice,removeCartItem } = useShoppingContext();

  return (
    <div className="w-full">
      <div className="headers flex justify-between items-center px-10 w-full">
        {/* Left Section */}
        <div className="flex-1 flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLVqFUcHEhfstPmbDTiTotKzuIzbxN4WGoBMYwpIuVonaVWrBhPzH35ArOA5FBnV7aNmgFke6txXZP1PkBrcykn5jHEbJez3Si5l-AfFFBoaRSxojE1LJFb66vlBPn2QgMEzEBuEL64z6PoypbDLM0VwAKr9B65uuC4Plx79MWRN13vK6SBG1Tt513D1~DKkxgCOchHBx-VAx3fBUc1DwElSul5Cg0tEZ0K6aJoYrl5lLcOBaHS8DLaR~RFBycZtobuDYoW-9IJTW1oOj5oA~xqOO1VF~PIOl6rwi4ItKrvDpz7Wjb0bYpDhRFWfVhihNDjEP88bisjgZz~CDJgNHg__"
            alt="Logo"
            width={"100px"}
          />
          <h3 className="font-bold text-3xl">FURINO</h3>
        </div>

        {/* Center Section */}
        <ul className="flex justify-center flex-1">
          <li className="px-14 py-2">Home</li>
          <li className="px-14 py-2">Shop</li>
          <li className="px-14 py-2">About</li>
          <li className="px-14 py-2">Contact</li>
        </ul>

        {/* Right Section */}
        <div className="flex-1 flex justify-end items-center">
          <FaRegUser className="mr-4 text-xl" />
          <CiSearch className="mr-4 text-xl" />
          <CiHeart className="mr-4 text-xl" />
          <div className="relative">
            <div className="cursor-pointer" onClick={toggleCart}>
              <BsCart2 className="mr-4 text-2xl" />
              <span className="px-1 bg-yellow-500 rounded-3xl text-[5px] absolute -top-3.5 right-2">
                {cartQty}
              </span>
            </div>

            {isOpen && (
             <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
             <table className="w-full text-sm text-left text-gray-700">
               <thead className="bg-gray-100 border-b border-gray-300">
                 <tr>
                   <th className="p-2">Image</th>
                   <th className="p-2">Name</th>
                   <th className="p-2">Price</th>
                   <th className="p-2">Qty</th>
                   <th className="p-2"></th>
                 </tr>
               </thead>
               <tbody className="text-sm text-left text-gray-700 text-center" style={{width:'100%', background:"white"}}>
                 {cartItems.map((item) => (
                   <tr key={item.id} className="w-full">
                     <td className="p-2">
                       <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full" />
                     </td>
                     <td className="p-2">{item.name}</td>
                     <td className="p-2 text-green-500">${item.price}</td>
                     <td className="p-2">{item.qty}</td>
                     <td className="p-2 text-xl text-red-500">
                       <button onClick={() => removeCartItem(item.id)}>
                         <TiTrash />
                       </button>
                     </td>
                   </tr>
                 ))}
                 <tr>
                   <td colSpan="5" className="p-2 border-t border-gray-300">
                     <div className="flex justify-between font-semibold">
                       <span className="text-md">Total:</span>
                       <span className="text-red-500">${totalPrice}</span>
                     </div>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
           
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
