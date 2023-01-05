import React, { useContext } from "react";
// import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { CartContext } from "../context/CartContextProvider";

function Navbar() {
	const { cart } = useContext(CartContext);
	const [showLinks, setShowLinks] = useState(false);
	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	};

	console.log(cart);

	// return (
	// 	<div>
	// 		<header>
	// 			<h1 class="title">My Store</h1>
	// 			<div class="icon">
	// 				<p class="pricenav">{cart.length}</p>
	// 				<div>
	// 					<i class="fa-solid fa-cart-shopping" />
	// 				</div>
	// 			</div>
	// 		</header>
	// 	</div>
	// );
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
			<div className="logo-menu">
				<button className="navbar__burger" onClick={handleShowLinks}>
					<span className="burger-bar" />
				</button>
				<h1 class="title">
					<Link to={"/"}>My Store</Link>
				</h1>
			</div>
			<div class="icon">
				<p class="pricenav">{cart.length}</p>{" "}
				<div>
					<i class="fa-solid fa-cart-shopping" />{" "}
				</div>{" "}
			</div>
			<div className="navbar__links">
				<Link to={"/electronics"} className="navbar__link">
					Electronics
				</Link>
				<Link to="/jewerly" className="navbar__link">
					Jewerly
				</Link>
				<Link to="/menclothing" className="navbar__link">
					Men's clothing
				</Link>
				<Link to="/womenclothing" className="navbar__link">
					Women's clothing
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
