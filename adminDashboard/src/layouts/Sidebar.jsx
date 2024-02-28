import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="position-fixed bg-warning p-5 "
      style={{ height: "100vh", width: 300, zIndex: 1 }}
    >
      <h3>
        <Link
          to="/sana"
          className="text-dark"
          style={{ textDecoration: "none" }}
        >
          Settings
        </Link>
      </h3>
      <h3>
        <Link
          to="/"
          className="text-dark"
          style={{ textDecoration: "none" }}
        >
          Dashboard
        </Link>
      </h3>
      <h3>
        <Link to="/products" className="text-dark" style={{ textDecoration: "none" }}>
          Products
        </Link>
      </h3>
    </div>
  );
}

export default Sidebar;
