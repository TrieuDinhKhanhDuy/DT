    import React, { useState } from "react";
    import { FaRegUser } from "react-icons/fa";
    import { BsCart2 } from "react-icons/bs";
    import { TiTrash } from "react-icons/ti";
    import { useShoppingContext } from "../contexts/ShoppingContext";
    import { MdOutlineLogin } from "react-icons/md";
    import { Link, NavLink, useNavigate } from "react-router-dom";
    import { useAuth } from "../contexts/AuthContext";
    import { FaListUl } from "react-icons/fa";

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
      const navigate = useNavigate();

      const toggleCart = () => {
        setIsOpen(!isOpen);
      };

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const { cartQty, cartItems, totalPrice, removeCartItem } = useShoppingContext();
      const { logout } = useAuth();

      const handleCheckout = () => {
        navigate('/checkout');
      };

      return (
        <div className="w-full">
          <div className="flex justify-between items-center px-4 sm:px-10 w-full py-2 bg-gray-100">
            {/* Left Section */}
            <div className="flex-1 flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLVqFUcHEhfstPmbDTiTotKzuIzbxN4WGoBMYwpIuVonaVWrBhPzH35ArOA5FBnV7aNmgFke6txXZP1PkBrcykn5jHEbJez3Si5l-AfFFBoaRSxojE1LJFb66vlBPn2QgMEzEBuEL64z6PoypbDLM0VwAKr9B65uuC4Plx79MWRN13vK6SBG1Tt513D1~DKkxgCOchHBx-VAx3fBUc1DwElSul5Cg0tEZ0K6aJoYrl5lLcOBaHS8DLaR~RFBycZtobuDYoW-9IJTW1oOj5oA~xqOO1VF~PIOl6rwi4ItKrvDpz7Wjb0bYpDhRFWfVhihNDjEP88bisjgZz~CDJgNHg__"
                alt="Logo"
                width={"100px"}
              />
              <h3 className="font-bold text-2xl sm:text-3xl ml-2">FURINO</h3>
            </div>

            {/* Center Section - hidden on mobile */}
            <ul className="hidden sm:flex justify-center flex-1">
              <NavLink to="/" className="px-4 py-2">Home</NavLink>
              <NavLink to="/shop" className="px-4 py-2">Shop</NavLink>
              <NavLink to="/about" className="px-4 py-2">About</NavLink>
              <NavLink to="/contact" className="px-4 py-2">Contact</NavLink>
            </ul>

            {/* Right Section */}
            <div className="flex-1 flex justify-end items-center">
              <NavLink to="/register" className="hidden sm:block">
                <FaRegUser className="mr-4 text-xl" />
              </NavLink>
              <div className="relative">
                <div className="cursor-pointer" onClick={toggleCart}>
                  <BsCart2 className="mr-4 text-2xl" />
                  <span className="px-1 bg-yellow-500 rounded-full text-xs absolute -top-2 right-2">
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
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
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
                          <td colSpan={5} className="p-2 border-t border-gray-300">
                            <div className="flex justify-between font-semibold">
                              <span>Total:</span>
                              <span className="text-red-500">${totalPrice.toFixed(2)}</span>
                            </div>
                            {cartItems.length > 0 && (
                              <button
                                onClick={handleCheckout}
                                className="mt-2 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                              >
                                Checkout
                              </button>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <button onClick={() => logout()} className="hidden sm:block">
                <MdOutlineLogin className="mr-4 text-xl" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              className="sm:hidden flex items-center text-2xl"
            >
              {menuOpen ? <MdOutlineLogin /> : <MdOutlineLogin />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="sm:hidden bg-white border-t border-gray-200">
              <ul className="flex flex-col items-center">
                <NavLink to="/" className="w-full text-center py-2 border-b border-gray-200" onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink to="/shop" className="w-full text-center py-2 border-b border-gray-200" onClick={toggleMenu}>
                  Shop
                </NavLink>
                <NavLink to="/about" className="w-full text-center py-2 border-b border-gray-200" onClick={toggleMenu}>
                  About
                </NavLink>
                <NavLink to="/contact" className="w-full text-center py-2 border-b border-gray-200" onClick={toggleMenu}>
                  Contact
                </NavLink>
                <NavLink to="/register" className="w-full text-center py-2" onClick={toggleMenu}>
                  <FaRegUser className="inline mr-2" /> Register
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      );
    };

    export default Header;
