import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../../store/productSlice";

function OneProduct() {
  const element = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(typeof productId, productId, "this is the params");

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);

  return (
    <div style={{ paddingTop: 80 }}>
      <>
        <Card
          className=" mx-auto my-1"
          style={{ width: "18rem", height: "450px" }}
        >
          <Card.Img
            variant="top"
            height={200}
            width={200}
            src={element?.imageURL}
            alt="image"
            loading="lazy"
          />

          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{element.productName}</Card.Title>
            <Card.Text>ok</Card.Text>
            <Card.Text>ok</Card.Text>
            <Card.Text>ok</Card.Text>
            <div className="d-flex justify-content-between ">
              <Button variant="primary" size="warning">
                View more
              </Button>
              <span></span>{" "}
              <Button variant="primary" size="sm">
                add to cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    </div>
  );
}

export default OneProduct;
