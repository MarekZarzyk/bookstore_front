import React from "react";
import logo from "../../assets/book-256.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo-container">
          <img src={logo} alt="bookstore logo" />
          <h1>Bookstore</h1>
        </div>
        <p>Twoje ulubione książki!</p>
      </div>

      <div className="user-panel">
        <button>zaloguj się</button>
      </div>
    </header>
  );
};
