import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import instance from "../../../api";
import { Product } from "../../../interfaces/Products";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import { Link } from "react-router-dom";
import { message } from "antd";

type Props = {};

const Home = (props: Props) => {
  const { addCartItem } = useShoppingContext();
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

  return (
    <>
      {contextHolder}
      <div className="w-full bg-cover bg-center mb-8" style={{ backgroundImage: "url('/path/to/your/banner/image.jpg')" }}>
        {/* Nội dung banner nếu có */}
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 mt-9">
        <div className="overflow-x-auto">
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, 20).map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 shadow-md flex flex-col justify-between"
                style={{ background: "#F4F5F7", minWidth: '250px' }}
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
                  <p className="font-bold text-red-500 text-lg">${item.price}</p>
                  <span className="text-2xl">
                    <BsCartCheck
                      onClick={() => handleAddToCart(item)}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
