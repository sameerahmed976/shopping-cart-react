import React from "react";
import { useGlobalContext } from "./Context";

import image from "./public/Logo66.svg";

const Navbar = () => {
  const { amount } = useGlobalContext();
  console.log(amount);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={image} alt="logo" className="logo__image" />
            <h1 className="logo__heading">myShop</h1>
          </div>
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="cart__logo"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l1.36 8.164a1 1 0 00.987.836h9.306a1 1 0 00.986-.836L19 10M5 10h3m-3 0H4m15 0h-3m3 0h1M8 10l1-5m-1 5h8m0 0l-1-5m-6 9v1m6-1v1m-3-1v1"
              />
            </svg>

            <p className="cart--count">{amount}</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
