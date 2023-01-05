import { valueToNode } from "@babel/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Details.css";

function Details() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	return (
		<main>
			<img src={product.image} alt="chat" />
			<article id="prix">
				<h1>{product.title}</h1>
				<div id="montant">{product.price}</div>
			</article>
			<article id="description">
				<p>Brand</p>
				<p>{product.description}</p>
			</article>
			<article id="bloc">
				<div id="category">
					<p>{product.category}</p>
					<div>
						<span>
							<i class="fa-regular fa-star" />
						</span>
						<span>
							<i class="fa-regular fa-star" />
						</span>
						<span>
							<i class="fa-regular fa-star" />
						</span>
						<span>
							<i class="fa-regular fa-star" />
						</span>
						<span>
							<i class="fa-regular fa-star" />
						</span>
					</div>
				</div>
				<Link to='/cart'>
					<div id="button">Add to cart</div>
				</Link>
			</article>
		</main>
	);
}

export default Details;
