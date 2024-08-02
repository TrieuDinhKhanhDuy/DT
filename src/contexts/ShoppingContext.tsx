
import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

type ShoppingContextProps = {
  children: ReactNode;
};

type CartItem = {
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
  cartItems: CartItem[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem & { qty: number }) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }: ShoppingContextProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const increaseQty = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const addCartItem = (product: ProductItem & { qty: number }) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: product.qty }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeCartItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
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
