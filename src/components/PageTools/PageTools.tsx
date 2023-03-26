import React from "react";
import "./PageTools.css";

export const PageTools = () => {
  return (
    <section className="page-tools">
      <form>
        <div className="search">
          <label>
            szukaj
            <input type="text" />
          </label>
          <button></button>
        </div>
      </form>
      <div className="basket">
        <p>koszyk</p>
        <span>0</span>
      </div>
    </section>
  );
};
