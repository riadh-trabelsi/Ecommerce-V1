import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <div
      className="position-fixed w-100 bg-primary top-0  d-flex justify-content-around align-items-center"
      style={{ height: 70, zIndex: 2 }}
    >
      <input type="text" placeholder="search" className="bg-white rounded" />
      <div className="d-flex gap-3 pt-3">
        <p>sfectoria</p>
        <p>logout</p>
      </div>
    </div>
  );
}

export default Navbars;
