import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <Link to="/shoes">
        <button>View Shoes</button>
      </Link>
      <Link to="/shoes/add">
        <button>Add Shoe</button>
      </Link>
    </div>
  );
}

export default Home;
