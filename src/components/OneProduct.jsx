import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
export default class OneProduct extends Component {


  addToCart(element) {
    this.props.setState({
      cart: [...this.props.cart, element],
    });
  }
  render(props) {
    return (
      <>
        <Card
          className=" mx-auto my-1"
          style={{ width: "18rem", height: "450px" }}
        >
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card.Img
              variant="top"
              height={200}
              width={200}
              src={this.props.element.imageURL}
              alt="image"
              loading="lazy"
            />
          </motion.div>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.element.productName}</Card.Title>
            <Card.Text>{this.props.element.description.slice(0, 10)}</Card.Text>
            <Card.Text>{this.props.element.price}</Card.Text>
            <Card.Text>{this.props.element.category}</Card.Text>
            <div className="d-flex justify-content-between ">
              <Button
                variant="primary"
                size="warning"
                onClick={() => {
                  this.props.changeProduct(this.props.element);
                  this.props.changeView("productDetails");
                }}
              >
                View more
              </Button>
              <span></span>{" "}
              <Button
                variant="primary"
                size="sm"
                onClick={async(e) => {
               await   this.addToCart(this.props.element);
                  localStorage.setItem("cart", JSON.stringify(this.props.cart));
                }}
              >
                add to cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}
