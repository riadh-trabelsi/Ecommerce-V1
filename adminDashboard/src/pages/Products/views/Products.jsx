import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
function Products() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    // fetch data from the api 
   axios.get("http://localhost:5173/data.json").then((response)=>{
    console.log(response.data)
    setProducts(response.data)
   }).catch((error)=>console.log(error))
  },[])


  return (
    <div className="d-flex justify-content-center flex-wrap" style={{paddingTop:80,paddingBottom:80}}>
      {products?.map((element,index)=>{
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
      <Link to={`OneProduct/${element.id}`}> <Button variant="warning"
        onClick={()=>{
  
        }} 
        >
          View More</Button> </Link>
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
