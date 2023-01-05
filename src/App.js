import List from "./component/List";
import "../src/style.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContextProvider";
import Cart from "./component/Cart";
import Details from "./component/details/Details";

function App() {
	return (
		<CartContextProvider>
			<Navbar />
			<Routes>
				<Route path="/details/:id" element={<Details />} />
				<Route path="/" element={<List />} />
				{/* <Cart /> */}
			</Routes>
		</CartContextProvider>
	);
}

export default App;
