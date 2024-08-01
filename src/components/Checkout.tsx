import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import Support from './Support';
import Footer from './Footer';
import { FaRegTrashCan } from "react-icons/fa6";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image:"1",name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, image:"1", name: 'Product 2', price: 15, quantity: 1 },
    { id: 3, image:"1", name: 'Product 3', price: 20, quantity: 3 },
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Header />
      <Banner />
      
      <div className="mx-8 mt-20 flex">
        <div className="flex-1">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200 border">
              <thead className="bg-gray-100">
                <tr style={{background:"#F9F1E7"}}>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold  uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold  uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold  uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold  uppercase tracking-wider">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img className="h-12 w-12 object-cover rounded" src="https://via.placeholder.com/50" alt="Product" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><FaRegTrashCan /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="flex-1 ml-4" >
          <div className="bg-white p-4 border border-gray-200 rounded-md text-center" style={{background:"#F9F1E7"}}>
            <h2 className="text-3xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-center gap-32 mt-8">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-800">${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-center gap-32 mt-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold" style={{color :"#B88E2F"}}>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="text-black px-16 py-2 mt-4 rounded-xl border border-black">Checkout</button>
          </div>
        </div>
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default Checkout;
