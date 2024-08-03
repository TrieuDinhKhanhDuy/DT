import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext, ProductContextType } from "../../contexts/ProductContext";
import { Product } from "../../interfaces/Products";
import instance from "../../api";

const Dashboard = () => {
	const [products,setProducts] = useState<Product[]>([])
	const getAllProducts =async () => {
		try {
			const {data} = await instance.get("/products")
			setProducts(data)
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getAllProducts()
	})
	return (
		<div>
			<h1>Hello Admin</h1>
			<Link to="/admin/product-add" className="btn btn-primary">
				Them san pham
			</Link>
			<table className="table table-bodered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Tittle</th>
						<th>Price</th>
						<th>Category</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<Link to={`/admin/product-edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>
								{/* <button className="btn btn-danger" onClick={() => removeProduct(item.id)}>
									Remove
								</button> */}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
