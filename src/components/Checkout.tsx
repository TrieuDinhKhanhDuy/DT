import React from 'react';
import { message } from 'antd';  // Nhập `message` từ Ant Design
import Header from './Header';
import Banner from './Banner';
import Support from './Support';
import Footer from './Footer';
import { useShoppingContext } from '../contexts/ShoppingContext';
import { FaRegTrashCan } from 'react-icons/fa6';

const Checkout = () => {
  const { cartItems, clearCart, totalPrice, removeCartItem } = useShoppingContext();
  const [messageApi, contextHolder] = message.useMessage();  
  const handleCheckout = () => {
    messageApi.open({
      type: 'success',
      content: 'Thanh toán thành công!',
      duration: 10,
    });
    clearCart(); 
  };

  return (
    <div>
      {contextHolder}  {/* Đặt `contextHolder` ở phần đầu của DOM để thông báo có thể hiển thị */}
      <Header />
      <Banner />

      <div className="mx-8 mt-20 flex">
        <div className="flex-1">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200 border">
              <thead className="bg-gray-100">
                <tr style={{ background: "#F9F1E7" }}>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img className="h-12 w-12 object-cover rounded" src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{item.qty}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => removeCartItem(item.id)}>
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-1 ml-4">
          <div className="bg-white p-4 border border-gray-200 rounded-md text-center" style={{ background: "#F9F1E7" }}>
            <h2 className="text-3xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-center gap-32 mt-8">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-800">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-center gap-32 mt-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold" style={{ color: "#B88E2F" }}>${totalPrice.toFixed(2)}</span>
            </div>
            
            <button onClick={handleCheckout}
              className="text-black px-16 py-2 mt-4 rounded-xl border border-black"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default Checkout;
