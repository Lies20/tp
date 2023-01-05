import List from './component/List';
import "../src/style.css"
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { CartContextProvider } from './context/CartContextProvider';
import Cart from './component/Cart';

function App() {
  return (
    <CartContextProvider>
      <Navbar/>
      {/* <List/> */
      <Cart />}
    </CartContextProvider>
  );
}

export default App;
