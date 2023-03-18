import React from "react";
import "./Catalog.css";

export const Catalog = () => {
  return (
    <div className="catalog">
      <h3>Katalog</h3>
      <ul>
        <li>
          <a href="/kategorie/all">Wszystkie</a>
        </li>
        <li>
          <a href="/kategorie/elektornika">Elektronika</a>
        </li>
        <li>
          <a href="/kategorie/web">Web</a>
        </li>
        <li>
          <a href="/kategorie/robotyka">Robotyka</a>
        </li>
        <li>
          <a href="/kategorie/informatyka">Informatyka</a>
        </li>
      </ul>
    </div>
  );
};
