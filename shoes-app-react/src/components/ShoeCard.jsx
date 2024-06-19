import React from "react";
import "../styles/ShoeCard.css";
import { Link } from "react-router-dom";

const ShoeCard = ({ id, name, size, price, img, handleDelete }) => {
  return (
    <div className="shoe-card">
      <h3>{name}</h3>
      <img src={img} alt={name} width="300px" height="150px" />
      <p>Size: {size}</p>
      <p>Price: ${price}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <Link to={`/shoes/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
export default ShoeCard;
