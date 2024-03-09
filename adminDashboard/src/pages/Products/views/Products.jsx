import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from "../../../store/productSlice";
function Products() {
  const navigate = useNavigate()
const productSlice = useSelector(state=>state.products)
const dispatch = useDispatch()
console.log(productSlice, "this is message for ps")
  useEffect(()=>{
    // fetch data from the api 
   // axios.get("http://localhost:5173/data.json").then((response)=>{
    //console.log(response.data)
   // setProducts(response.data)
   //}).catch((error)=>console.log(error))
   dispatch(getProducts())
  },[dispatch])



  return (
    <div className="d-flex justify-content-center flex-wrap" style={{paddingTop:80,paddingBottom:80}}>
      {productSlice.products?.map((element,index)=>{
return (
    <Card style={{ width: "18rem"}} key={index}>
    <Card.Img
      variant="top"
      src={element.imageURL}
      width={300}
      height={300}
      loading="lazy"
    />
    <Card.Body>
      <Card.Title>{element?.productName}</Card.Title>
      <Card.Text>
        {element?.description.slice(0, 15)}...
      </Card.Text>
      <Card.Title>{element?.price}</Card.Title>
      <div className="d-flex justify-content-between">
      {/* <Link to={`OneProduct/${element.id}`}> */}
         <Button variant="warning"
       onClick={()=>{
        navigate(`OneProduct/${element.id}`)
       }}
        >
          View More</Button> 
          {/* </Link> */}
        <Button variant="info">Add to Cart</Button>
      </div>
    </Card.Body>
  </Card>
)
      })}
    </div>
  )
}

export default Products;
