import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./SocialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };

  // Component Did Mount
  componentDidMount() {
    // Local data Set up
    this.setProducts(items);
  }

  // setProducts
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      return product;
    });
    // featured Products
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    // Get Max price
    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        featuredProducts: featuredProducts,
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        max: maxPrice,
        price: maxPrice
      },
      () => {
        this.addTotal();
      }
    );
  };

  // This returns a Single Product
  // This is to get the single product from the Local Storage.
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  // This is to get the cart products from the Local Storage.
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  // Get Totals
  // Calculating all the values like total,subTotal and tax
  getTotal = () => {
    let subTotal = 0; //without tax
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return { cartItems, subTotal, tax, total };
  };

  // Add Totals
  addTotal = () => {
    const totals = this.getTotal();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  // sync Storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  // Add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      //If the items is not present in the cart
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price; //Individual Total
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotal();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  // Set Single Product ( Used to open Single Page )
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({ singleProduct: { ...product }, loading: false });
  };

  //Handle Sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //Handle SideCart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //close Cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  //open Cart
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  // Cart Functionalities
  // increment
  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.price * cartItem.count;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };
  // decrement
  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count = cartItem.count - 1;
    // if (cartItem.count <= 0) {
    //   this.removeItem(id);
    // } else {
    //   cartItem.total = cartItem.price * cartItem.count;
    //   cartItem.total = parseFloat(cartItem.total.toFixed(2));
    // }
    if (cartItem.count > 0) {
      cartItem.total = cartItem.price * cartItem.count;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
    } else if (cartItem.count < 0) {
      cartItem.count = 0;
      cartItem.total = cartItem.price * cartItem.count;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
    } else {
      this.removeItem(id);
    }
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotal();
        this.syncStorage();
      }
    );
  };
  // removeItem
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotal();
      this.syncStorage();
    });
  };

  // Clear Cart
  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.addTotal();
      this.syncStorage();
    });
  };

  // Handle Filtering
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.sortData();
      }
    );
  };

  // Sort Data
  sortData = () => {
    let { storeProducts, price, company, shipping, search } = this.state;
    price = parseInt(price);
    let tempProducts = [...storeProducts];
    // Filter Company based on Company
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => {
        return item.company === company;
      });
    }
    // Filter Company based on Price
    tempProducts = tempProducts.filter(item => item.price <= price);

    // Filter Company based on Shipping
    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }

    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
      });
    }

    this.setState({ filteredProducts: tempProducts });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
