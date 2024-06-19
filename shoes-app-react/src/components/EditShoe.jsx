import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShoe, updateShoe } from "../services/api.js";
import "../styles/EditShoe.css";
function EditShoe() {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState({ name: "", size: "", price: "", img: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const shoeData = await getShoe(shoeId);
        setShoe(shoeData);
      } catch (error) {
        console.error("Error fetching shoe:", error);
      }
    };

    fetchShoe();
  }, [shoeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateShoe(shoeId, shoe);
      navigate("/shoes");
    } catch (error) {
      console.error("Error updating shoe:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoe((prevShoe) => ({ ...prevShoe, [name]: value }));
  };

  return (
    <div className="edit-shoe">
      <h2>Edit Shoe</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditShoe;
