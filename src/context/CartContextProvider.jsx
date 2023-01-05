import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([
		// {
		// 	id: 1,
		// 	title: "audi RS3",
		// 	price: "10",
		// 	category: "Electronics",
		// 	description: "Desc Product1",
		// 	image: "product1.jpg",
		// },
		// {
		// 	id: 2,
		// 	title: "Product 2",
		// 	price: "20",
		// 	category: "Electronics",
		// 	description: "Desc Product2",
		// 	image: "product2.jpg",
		// },
	]);

	return (
		<CartContext.Provider value={{ cart: cart, setCart: setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartContextProvider };
