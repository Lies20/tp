import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

function Navbar() {
	const { cart } = useContext(CartContext);
	return (
		<div>
			<header>
				<h1 class="title">My Store</h1>
				<div class="icon">
					<p class="pricenav">{cart.length}</p>
					<div>
						<i class="fa-solid fa-cart-shopping" />
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
