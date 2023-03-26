import React from "react";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "../Catalog/Catalog";
import { PageTools } from "../PageTools/PageTools";
import { BooksList } from "../../Views/BooksList/BooksList";
import { SingleBookView } from "../../Views/SingelBook/SingleBook";
import { CategoryView } from "../..//Views/CategoryView/CategoryView";
import { NotFoundView } from "../../Views/NotFoundView/NotFoundView";
import "./Main.css";

export const Main = () => {
  return (
    <div className="container">
      <Catalog />
      <div className="main-view">
        <PageTools />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/all" element={<BooksList />} />
          <Route path="/book/:id" element={<SingleBookView />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
    </div>
  );
};
