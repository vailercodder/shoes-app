import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addShoe } from "../services/api.js";
import "../styles/AddShoe.css";
import { Link } from "react-router-dom";

function AddShoe() {
  const [shoe, setShoe] = useState({ name: "", size: "", price: "", img: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addShoe(shoe);
      navigate("/shoes");
    } catch (error) {
      console.error("Error adding shoe:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoe((prevShoe) => ({ ...prevShoe, [name]: value }));
  };

  return (
    <div className="add-shoe">
      <h2>Add Shoe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={shoe.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Size:
          <input
            type="text"
            name="size"
            value={shoe.size}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={shoe.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="img"
            value={shoe.img}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Shoe</button>
      </form>
      <Link to="/shoes">
        <button>Back to Shoe List</button>
      </Link>
    </div>
  );
}

export default AddShoe;
