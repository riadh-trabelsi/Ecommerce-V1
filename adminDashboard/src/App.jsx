import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Products from "./pages/Products/views/Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch data from the api
    axios
      .get("http://localhost:5173/data.json")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: 300 }}>
        <Navbar />
        <Footer />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
