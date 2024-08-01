import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingContextProps = {
  children: ReactNode;
};

type cartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

type ProductItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

interface ShoppingContextType {
  cartQty: number;
  totalPrice: number;
  cartItems: cartItem[]; // Đổi từ cartItem thành cartItems
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }: ShoppingContextProps) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  
  const increaseQty = (id: number) => {
    console.log(id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  const decreaseQty = (id: number) => {
    console.log(id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      if (currentCartItem.qty === 1) {
        removeCartItem(id);
      }
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  const addCartItem = (product: ProductItem) => {
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id);
      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        const newItems = { ...product, qty: 1 };
        setCartItems([...cartItems, newItems]);
      }
    }
    console.log(product);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeCartItem = (id: number) => {
    const currentCartItemIndex = cartItems.findIndex((item) => item.id === id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    setCartItems(newItems);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,  // Đổi từ cartItem thành cartItems
        cartQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        addCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
