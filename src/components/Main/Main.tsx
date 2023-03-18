import React from "react";
import "./Main.css";
import { Catalog } from "../Catalog/Catalog";
import { PageTools } from "../PageTools/PageTools";
import { BooksList } from "../BooksList/BooksList";

export const Main = () => {
  return (
    <div className="container">
      <Catalog />
      <div className="main-view">
        <PageTools />
        <BooksList />
      </div>
    </div>
  );
};
