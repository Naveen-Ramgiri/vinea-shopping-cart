import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Header from './Layouts/Header/Header';
import Footer from "./Layouts/Footer/Footer";
import MenProductListings from './Components/ProductListing/MenProductListings/MenProductListings';
import AccessoriesListings from './Components/ProductListing/AccessoriesListings/AccessoriesListings';
import JewelleryListings from './Components/ProductListing/JewelleryListings/JewelleryListings';
import Cart from './Components/Cart/Cart';
import Hamburger from "./Layouts/Hamburger/Hamburger";
import LoginApp from "./Components/Authenticate/SignIn/LoginApp";
import SignUp from "./Components/Authenticate/SignUp/SignUp";
import WomenProductListing from './Components/ProductListing/WomenProductListing/WomenProductListing'
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Shipmethod from "./Components/Checkout/Shipmethod";
import Paymentmethods from "./Components/Checkout/Paymentmethods";
import Review from "./Components/Checkout/Review";
import OrderSuccess from "./Components/Checkout/OrderSuccess";
import LoginForm from "./Components/Authenticate/SignIn/LoginForm";
import AllProducts from "./Components/ProductListing/AllProducts/AllProducts";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Header countCartItems={cartItems.length} />
        <Hamburger countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/women" exact element={<WomenProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/men" element={<MenProductListings />} />
          <Route path="/jewellery" element={<JewelleryListings />} />
          <Route path="/electronics" element={<AccessoriesListings />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allproducts" element={<AllProducts/>}/>

          <Route path="/checkout" element={<Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/shipmethod" element={<Shipmethod cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/payment" element={<Paymentmethods cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/review" element={<Review cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="/orderconfirmation" element={<OrderSuccess cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
