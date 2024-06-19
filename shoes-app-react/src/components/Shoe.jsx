import React from "react";
import { Link } from "react-router-dom";
import "../styles/Shoe.css";

function Shoe() {
  return (
    <div className="shoe">
      <h2>Shoe Detail Page</h2>
      <Link to="/shoes">
        <button>Back to Shoe List</button>
      </Link>
    </div>
  );
}

export default Shoe;
