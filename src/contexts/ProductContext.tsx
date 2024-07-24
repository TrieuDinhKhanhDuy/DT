import { createContext, useEffect, useReducer } from "react";
import instance from "../api";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/Products";
import productReducer from "../reducers/productReducer";
import { message } from "antd";

export type ProductContextType = {
	state: { products: Product[] };
	dispatch: React.Dispatch<any>;
	removeProduct: (_id: string | undefined) => void;
	handleProduct: (data: Product) => void;
};

export const ProductContext = createContext({} as ProductContextType);


const ProductProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(productReducer, { products: [] });
	const nav = useNavigate();
	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products`);
			console.log(data);
			dispatch({ type: "GET_PRODUCTS", payload: data.data });
		})();
	}, []);

	const removeProduct = async (_id: string | undefined) => {
		try {
			await instance.delete(`/products/${_id}`);
			dispatch({ type: "REMOVE_PRODUCT", payload: _id });
		} catch (error: any) {
			console.log(error);
		}
	};

	const handleProduct = async (product: Product) => {
		try {
			if (product._id) {
				const { data } = await instance.patch(`/products/${product._id}`, product);
				dispatch({ type: "UPDATE_PRODUCT", payload: data.data });
				alert(data.message);
			} else {
				console.log(product);
				const { data } = await instance.post(`/products`, product);
				dispatch({ type: "ADD_PRODUCT", payload: data.data });
				alert(data.message);
			}

			nav("/admin/products");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ProductContext.Provider value={{ state, dispatch, removeProduct, handleProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;