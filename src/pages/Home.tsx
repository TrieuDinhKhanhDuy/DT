import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import instance from "../api";
import { Product } from "../interfaces/Products";

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const { data } = await instance.get(`/products`);
    setProducts(data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((item) => (
        <div key={item._id} className="my-4 p-4 border border-gray-200 rounded-md">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="text-gray-600">Price: ${item.price}</p>
          <Button type="primary" size="large">
          <PlusCircleOutlined />
          Click Me!
        </Button>
        <h1 className="text-white">Hello các ban</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
