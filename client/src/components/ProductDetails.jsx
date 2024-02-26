import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
export default class ProductDetails extends Component {
  
  render(props) {
    return (
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
          src={this.props.product.imageURL}
          alt="image"
          loading="lazy"
        />
      </motion.div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{this.props.product.productName}</Card.Title>
        <Card.Text>{this.props.product.description.slice(0, 10)}</Card.Text>
        <Card.Text>{this.props.product.price}</Card.Text>
        <Card.Text>{this.props.product.category}</Card.Text>
        <div className="d-flex justify-content-between ">
         

          <span></span>{" "}
          <Button variant="primary" size="sm">
            add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
    )
  }
}
