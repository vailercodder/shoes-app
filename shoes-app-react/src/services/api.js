import axios from "axios";

const BASE_URL = "https://6672fe0c6ca902ae11b2b585.mockapi.io/";
const SHOES_API_URL = `${BASE_URL}/shoes`;

export const getShoes = async () => {
  try {
    const response = await axios.get(SHOES_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching shoes:", error);
    throw error;
  }
};

export const getShoe = async (id) => {
  try {
    const response = await axios.get(`${SHOES_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shoe:", error);
    throw error;
  }
};

export const addShoe = async (shoeData) => {
  try {
    const response = await axios.post(SHOES_API_URL, shoeData);
    return response.data;
  } catch (error) {
    console.error("Error adding shoe:", error);
    throw error;
  }
};

export const updateShoe = async (id, shoeData) => {
  try {
    const response = await axios.put(`${SHOES_API_URL}/${id}`, shoeData);
    return response.data;
  } catch (error) {
    console.error("Error updating shoe:", error);
    throw error;
  }
};

export const deleteShoe = async (id) => {
  try {
    const response = await axios.delete(`${SHOES_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting shoe:", error);
    throw error;
  }
};
