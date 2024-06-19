import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShoes, deleteShoe } from "../services/api.js";
import ShoeCard from "./ShoeCard";
import "../styles/ShoeList.css";

function ShoeList() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoeData = await getShoes();
        setShoes(shoeData);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteShoe(id);
      setShoes(shoes.filter((shoe) => shoe.id !== id));
    } catch (error) {
      console.error("Error deleting shoe:", error);
    }
  };

  return (
    <div className="shoe-list">
      <h2>Shoe List Page</h2>
      <div className="shoe-list-container">
        {shoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            size={shoe.size}
            price={shoe.price}
            img={shoe.img}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ShoeList;
