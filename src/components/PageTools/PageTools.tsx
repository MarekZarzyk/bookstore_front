import React from "react";
import "./PageTools.css";

export const PageTools = () => {
  return (
    <section className="page-tools">
      <div className="search">
        <label>
          szukaj
          <input type="text" />
        </label>
        <button>znajdź!</button>
      </div>
      <div className="basket">
        <p>koszyk</p>
        <span>0</span>
      </div>
    </section>
  );
};
