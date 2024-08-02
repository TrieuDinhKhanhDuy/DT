import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import instance from "../../../api";
import { Product } from "../../../interfaces/Products";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import { Link } from "react-router-dom";
import { message } from "antd";

type Props = {};

const Home = (props: Props) => {
  const { addCartItem, cartItems } = useShoppingContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = (content: string) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content,
        duration: 2,
      });
    }, 700);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    })();
  }, []);

  const handleAddToCart = (item: Product) => {
    addCartItem({ ...item, qty: 1 });
    openMessage('Thêm vào giỏ hàng thành công!');
  };

  // Tìm số lượng của sản phẩm trong giỏ hàng
  const getQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.qty : 0;
  };

  return (
    <>
      {contextHolder}
      <div className="mx-16 mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, 20).map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-md flex flex-col justify-between"
              style={{ background: "#F4F5F7" }}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <Link to={`/product/${item.id}`}>
                  <h1 className="text-xl font-bold mb-3">{item.name}</h1>
                </Link>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <p className="font-bold text-red-500 text-lg">
                  ${Number(item.price).toFixed(2)}
                </p>
                <span className="text-2xl flex items-center">
                  <BsCartCheck
                    onClick={() => handleAddToCart(item)}
                    className="cursor-pointer hover:text-green-500"
                  />
                  {/* Hiển thị số lượng */}
                  {getQuantity(item.id) > 0 && (
                    <span className="ml-2 text-sm text-gray-600">
                      ({getQuantity(item.id)})
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
