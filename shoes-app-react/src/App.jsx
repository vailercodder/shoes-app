import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ShoeList from "./components/ShoeList";
import Shoe from "./components/Shoe";
import AddShoe from "./components/AddShoe";
import EditShoe from "./components/EditShoe";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <div className="logo">
            <Link to="/">ShoeStore</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/shoes/add">Add Shoe</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<ShoeList />} />
          <Route path="/shoes/:shoeId" element={<Shoe />} />
          <Route path="/shoes/add" element={<AddShoe />} />
          <Route path="/shoes/:shoeId/edit" element={<EditShoe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
