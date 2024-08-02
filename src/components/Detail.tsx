import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Products";
import instance from "../api";
import { useShoppingContext } from "../contexts/ShoppingContext";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { message } from "antd";

const Detail: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();
  const { addCartItem } = useShoppingContext();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Thêm giỏ hàng thành công!",
        duration: 2,
      });
    }, 700);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const getProduct = async (id: string) => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addCartItem({ ...product, qty: quantity });
      openMessage();
    }
  };

  return (
    <>
      {contextHolder}
      <Header />
      <div className="relative w-full">
        <div
          className="w-full h-60 bg-cover bg-opacity-50"
          style={{ backgroundColor: "#f9f1e7" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-3">Shop</h3>
              <span className="flex items-center justify-center font-bold">
                Home <MdKeyboardArrowRight className="text-2xl" /> {product?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img src={product?.image} alt={product?.name} width={500} className="mx-auto lg:mx-0" />
          </div>
          {product && (
            <div className="flex-1 lg:pl-8 mt-4 lg:mt-0">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-2xl text-gray-500 mt-2">${product.price}</p>
              <div className="flex items-center mt-4">
                <div className="flex items-center text-yellow-500 border-r border-gray-300 pr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.429 8.2 1.191-5.934 5.785 1.4 8.17L12 18.897l-7.334 3.864 1.4-8.17L.133 9.207l8.2-1.191L12 .587z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5 Customer Review</span>
              </div>
              <div className="mt-4">
                <span className="block text-sm font-medium text-gray-700">Size</span>
                <div className="flex space-x-2 mt-2">
                  <button className="border rounded bg-size-color px-3 py-1">L</button>
                  <button className="border rounded px-3 py-1">XL</button>
                  <button className="border rounded px-3 py-1">XS</button>
                </div>
              </div>
              <div className="mt-4">
                <span className="block text-sm font-medium text-gray-700">Color</span>
                <div className="flex space-x-2 mt-2">
                  <button className="w-6 h-6 rounded-full bg-purple-600"></button>
                  <button className="w-6 h-6 rounded-full bg-black"></button>
                  <button className="w-6 h-6 rounded-full bg-gold-500"></button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="border rounded-l px-3 py-1"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="border-t border-b text-center h-8 w-12"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="border rounded-r px-3 py-1"
                >
                  +
                </button>
              </div>
              <button
                className="mt-4 border border-solid border-black bg-600 text-black py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>

              <div className="mt-8">
                <div className="mt-4">
                  <span className="block text-sm font-medium text-gray-700">SKU</span>
                  <p className="text-gray-600">SS001</p>
                </div>
                <div className="mt-4">
                  <span className="block text-sm font-medium text-gray-700">Category</span>
                  <p className="text-gray-600">Sofas</p>
                </div>
                <div className="mt-4">
                  <span className="block text-sm font-medium text-gray-700">Tags</span>
                  <p className="text-gray-600">Sofa, Chair, Home, Shop</p>
                </div>
                <div className="mt-4">
                  <span className="block text-sm font-medium text-gray-700">Share</span>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-600" aria-label="Share on Facebook">
                      <FaFacebook />
                    </button>
                    <button className="text-400" aria-label="Share on LinkedIn">
                      <RxLinkedinLogo />
                    </button>
                    <button className="text-500" aria-label="Share on Twitter">
                      <FaTwitter />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold">Description</h2>
                <p className="mt-2 text-gray-600">
                  Embodying the raw, wayward spirit of rock 'n' roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p className="mt-2 text-gray-600">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
