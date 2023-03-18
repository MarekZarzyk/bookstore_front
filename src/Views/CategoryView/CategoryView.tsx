import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { BookEntity } from "types";
import { NotFoundView } from "../NotFoundView/NotFoundView";

export const CategoryView = () => {
  const [bookList, setBookList] = useState<BookEntity[]>([]);
  const { category } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://localhost:3001/books/category/${category}`
      );
      const data = await res.json();
      setBookList(data);
    })();
  }, []);
  if (!bookList) {
    return <NotFoundView />;
  }

  return (
    <section className="content">
      {bookList.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
    </section>
  );
};
