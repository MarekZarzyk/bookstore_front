import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookEntity } from "types";
import "./SingleBook.css";

export const SingleBookView = () => {
  const [book, setBook] = useState<BookEntity | null>(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/books/book/${params.id}`);
      const data = await res.json();
      setBook(data);
    })();
  }, []);

  if (book === null) {
    return <p>wczytywanie..</p>;
  }
  const {
    id,
    author,
    title,
    price,
    description,
    image_url,
    quantity,
    category,
  } = book;

  return (
    <div className="wrapper">
      <div className="book-cover">
        <img
          className="cover"
          src={`http://localhost:3001/${image_url}`}
          alt={`Okładka książki ${title} autorstwa ${author}`}
        />
      </div>
      <div className="book-details">
        <h2 className="title">{title}</h2>
        <h3 className="author">Autorzy: {author}</h3>
        <div className="description">
          <p>Opis: </p>
          <p>{description}</p>
        </div>
      </div>
      <div className="basket">
        <p className="price">{price.toFixed(2)} PLN</p>
        <button className="add-to-basket">Dodaj do koszyka</button>
      </div>
    </div>
  );
};
