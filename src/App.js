import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap

// importing route and switch
import { Route, Switch } from "react-router-dom";

// Impoting Pages
import Home from "./Pages/HomePage.jsx";
import About from "./Pages/AboutPage";
import Products from "./Pages/ProductsPage.jsx";
import Contact from "./Pages/ContactPage.jsx";
import SingleProduct from "./Pages/SingleProductPage.jsx";
import Default from "./Pages/DefaultPage.jsx";
import Cart from "./Pages/CartPage";

// Importing Components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SideCart from "./Components/SideCart";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      {/* Navbar, SideBar,Cart */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
