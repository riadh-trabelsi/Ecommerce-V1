import React, { Component } from "react";
import NavBar from "./layout/NavBar";
import Products from "./components/Products";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layout/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
//import dummydata from './data.json'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: "products",
      product : {},
      searchQuerry : "", 
      cart : JSON.parse(localStorage.getItem("cart")) || []
    }
    this.changeView = this.changeView.bind(this)
    this.changeProduct = this.changeProduct.bind(this)
    this.setState = this.setState.bind(this)
  }
  componentDidMount() {
    axios.get("http://localhost:3000/data.json").then((res) => {
      this.setState({ data: res.data });
      //this.setState ({data:dummydata})
    });
  }
  changeView(view){
    this.setState({
      view : view
    })
  }
  changeProduct(obj){
    this.setState({
      product:obj
    })
  }
  render() {
    return (
      <div>
        <NavBar changeView = {this.changeView} setState = {this.setState} cart={this.state.cart}/>
       
        {this.state.view === "products" ? (
          <Products setState = {this.setState} cart={this.state.cart} products={this.state.data} changeView = {this.changeView} changeProduct={this.changeProduct} searchQuerry = {this.state.searchQuerry} />
        ) :this.state.view === "productDetails"? (
          <ProductDetails product={this.state.product}/>
        ):this.state.view === "cart" ? ( 
          <Cart  cart={this.state.cart}/> 
        ):""}
       
        <Footer />
      </div>
    );
  }
}
