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
				<h2>{product.title}</h2>
				<div>{product.price}</div>
			</article>
			<p id="brand">Brand</p>
			<article id="description">
				<p>{product.description}</p>
			</article>
			<article id="bloc">
				<div id="category">
					<p>{product.category}</p>
					<div class="rate">
						<input type="radio" id="star5" name="rate" value="5" />
						<label for="star5" title="text">
							5 stars
						</label>
						<input type="radio" id="star4" name="rate" value="4" />
						<label for="star4" title="text">
							4 stars
						</label>
						<input type="radio" id="star3" name="rate" value="3" />
						<label for="star3" title="text">
							3 stars
						</label>
						<input type="radio" id="star2" name="rate" value="2" />
						<label for="star2" title="text">
							2 stars
						</label>
						<input type="radio" id="star1" name="rate" value="1" />
						<label for="star1" title="text">
							1 star
						</label>
					</div>
				</div>
				<Link to='/cart'>
					<button id="button">Add to cart</button>
				</Link>
			</article>
		</main>
	);
}

export default Details;
