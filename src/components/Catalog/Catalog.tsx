import React from "react";
import "./Catalog.css";
import { NavLink } from "react-router-dom";

export const Catalog = () => {
  return (
    <div className="catalog">
      <h3>Katalog</h3>
      <ul>
        <li>
          <NavLink to="/all">Wszystkie</NavLink>
        </li>
        <li>
          <NavLink to="/category/elektronika">Elektronika</NavLink>
        </li>
        <li>
          <NavLink to="/category/web">Web</NavLink>
        </li>
        <li>
          <NavLink to="/category/robotyka">Robotyka</NavLink>
        </li>
        <li>
          <NavLink to="/category/informatyka">Informatyka</NavLink>
        </li>
      </ul>
    </div>
  );
};
