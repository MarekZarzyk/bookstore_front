import React from "react";
import "./Catalog.css";

export const Catalog = () => {
  return (
    <div className="catalog">
      <h3>Katalog</h3>
      <ul>
        <li>
          <a href="/all">Wszystkie</a>
        </li>
        <li>
          <a href="/category/elektronika">Elektronika</a>
        </li>
        <li>
          <a href="/category/web">Web</a>
        </li>
        <li>
          <a href="/category/robotyka">Robotyka</a>
        </li>
        <li>
          <a href="/category/informatyka">Informatyka</a>
        </li>
      </ul>
    </div>
  );
};
