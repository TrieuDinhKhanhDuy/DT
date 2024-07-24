import { useEffect, useState } from "react";
import instance from "../../../api";
import { Product } from "../../../interfaces/Products";
import { BsCartCheck } from "react-icons/bs";
type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  const fetchProducts = async () => {
    try {
      const { data } = await instance.get(`/products`);
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-16 mt-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow-md " style={{background:"#F4F5F7"}}>
            <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h1 className="text-xl font-bold mb-3">{item.title}</h1>
            <div className="flex justify-between items-center">
            <p className="text-gray-600 font-bold">${item.price}</p>
            <span className="text-2xl"><BsCartCheck /></span>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
