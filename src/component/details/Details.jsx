import { valueToNode } from "@babel/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
			<img src="img/chart.jpg" alt="chat" />
			<article id="prix">
				<h1>{product.title}</h1>
				<div id="montant">100eu</div>
			</article>
			<article id="description">
				<p>Brand</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
					optio, culpa ratione illum officia aperiam tempore
				</p>
			</article>
			<article id="bloc">
				<div id="category">
					<p>Category</p>
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
				<div id="button">Add to cart</div>
			</article>
		</main>
	);
}

export default Details;
