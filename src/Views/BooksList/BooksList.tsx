import React, { useEffect, useState } from "react";
import { BookEntity } from "types";
import "./BooksList.css";
import { Card } from "../../components/Card/Card";

export const BooksList = () => {
  const [bookList, setBookList] = useState<BookEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/books/all`);
      const data = await res.json();
      setBookList(data);
    })();
  }, []);

  return (
    <section className="content">
      {bookList.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
    </section>
  );
};
