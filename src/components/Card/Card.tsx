import React from "react";
import { BookEntity } from "types";
import "./Card.css";

export const Card = (props: BookEntity) => {
  const { id, title, author, image_url, price, quantity } = props;
  const imageEndpoint = `http://localhost:3001/${image_url}`;

  const availability =
    quantity > 5
      ? "dostępny"
      : quantity > 0
      ? "ostatnie sztuki"
      : "niedostepny";

  const availabilityClass =
    quantity > 5 ? "available" : quantity > 0 ? "little" : "not-available";

  return (
    <div className="book-card">
      <a href={`/book/${id}`}>
        <img
          className="cover"
          src={imageEndpoint}
          alt={`Okładka książki ${title} autorstwa ${author}`}
        />
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <h4 className="author">{author}</h4>
          <p className={`availability ${availabilityClass}`}>{availability}</p>
        </div>
      </a>
      <p className="price">cena: {price.toFixed(2)} PLN</p>
    </div>
  );
};
