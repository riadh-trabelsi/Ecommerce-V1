import React, { Component } from "react";
import OneProduct from "./OneProduct";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: [],
    };
  }
  componentDidMount() {
    this.setState({ prod: this.props.products });
  }
  render() {
    console.log("logs", this.props);
    return (
      <>
        <div
          className="d-flex flex-wrap justify-content-center gap-3 mb-5 px-3 pb-3"
          style={{ paddingTop: 100 }}
        >
          {this.props.products
            .filter((e, i) =>
              e.productName
                .toLowerCase()
                .includes(this.props.searchQuerry.toLowerCase())
            )
            .map((element, index) => {
              return (
                <OneProduct
                  key={index}
                  cart={this.props.cart}
                  element={element}
                  changeView={this.props.changeView}
                  changeProduct={this.props.changeProduct}
                  setState={this.props.setState}
                />
              );
            })}
        </div>
      </>
    );
  }
}
