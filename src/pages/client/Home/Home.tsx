import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import instance from "../../../api";
import { Product } from "../../../interfaces/Products";
import { useShoppingContext } from "../../../contexts/ShoppingContext";

type Props = {};

const Home = (props: Props) => {
  const {addCartItem} = useShoppingContext()
  const [products,setProducts] = useState<Product[]>([])
  useEffect(() => {
    (async () => {
      const {data} = await instance.get("/products")
    setProducts(data) 
     })()
  },[])
   return (
     <div className="mx-16 mt-9">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {products.map((item) => (
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
          <h1 className="text-xl font-bold mb-3">{item.name}</h1>
        </div>
        <div className="flex justify-between mt-auto ">
          <p className=" font-bold text-red-500 text-lg">${item.price}</p>
          <span className="text-2xl">
            <BsCartCheck onClick={() => addCartItem(item)} className=":hover cursor-pointer"/>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

   );
};

export default Home;
