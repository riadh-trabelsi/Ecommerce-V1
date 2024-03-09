import { useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../store/productSlice";
function Navbars() {
  const dispatch = useDispatch()
  const handleSearch = useCallback(event=>{
    dispatch(search(event.target.value))
  },[])
  return (
    <div
      className="position-fixed w-100 bg-primary top-0  d-flex justify-content-around align-items-center"
      style={{ height: 70, zIndex: 2 }}
    >
      <input type="text" placeholder="search" className="bg-white rounded" onChange={handleSearch}/>
      <div className="d-flex gap-3 pt-3">
        <p>sfectoria</p>
        <p>logout</p>
      </div>
    </div>
  );
}

export default Navbars;
