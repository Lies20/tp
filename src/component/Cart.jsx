import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

function Cart() {
	const { cart } = useContext(CartContext);

	// console.log(cart);

	const deleteCart = (e) => {
		cart.pop(cart);
	};

	return (
		<div>
			<section class="list">
				{cart.map((value, index) => {
					return (
						<>
							<article>
								<img
									alt=""
									class="img"
									src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"
								/>
								<h2 class="brand">{value.title}</h2>
								<p class="price">{value.price}€</p>
								{/* <p class="price">{cart.length}</p> */}
								<button type="button" onClick={deleteCart}>
									Sup
								</button>
							</article>
						</>
					);
				})}
				{/* <article>
					<img
						alt=""
						class="img"
						src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"
					/>
					<h2 class="brand">Product 1 brand </h2>
					<p class="price">120£</p>
					<p class="price">{cart.length}</p>
				</article> */}
			</section>
		</div>
	);
}

export default Cart;
