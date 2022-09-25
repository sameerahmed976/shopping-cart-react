import React from "react";
import { useGlobalContext } from "./Context";

const ShoppingCart = () => {
  const {
    cart: data,
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
    total,
    fetchData,
  } = useGlobalContext();

  if (data.length === 0) {
    return (
      <section>
        <h1 className="cart__empty">Your cart is current empty</h1>
        <button className="btn btn--refresh" onClick={() => fetchData()}>
          refresh all
        </button>
      </section>
    );
  }

  return (
    <>
      <main className="main">
        <h2 className="main__heading">Your Shopping Cart</h2>

        <section className="cart__container">
          {data.map((item) => {
            {
              // const { img, title, id, amount, price } = item;
              // console.log(item);

              return (
                <article className="cart__item" key={item.id}>
                  <img src={item.img} alt="image" className="cart__image" />
                  <article className="cart__content">
                    <h3 className="cart__title">{item.title}</h3>
                    <h4 className="cart__price">₹ {item.price}</h4>
                    <button
                      className="btn btn--remove"
                      onClick={() => removeItem(item.id)}
                    >
                      remove
                    </button>
                  </article>
                  <article className="btn--group">
                    <button
                      className="btn btn--up"
                      onClick={() => increaseItem(item.id)}
                    >
                      <svg
                        data-src="https://api.macosicons.com/uploads/triangle_up_24px_1ce0aeef5f.svg"
                        id="triangle-up-filled"
                        fill="none"
                        className="icon-image icon-image-24"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        data-attributes-set="width,height,xmlns"
                        data-rendered="true"
                      >
                        <g clipPath="url(#clip0_376_25516)">
                          <path
                            d="M8.527 9.078L5.42 14.515c-1.521 2.662-2.282 3.993-1.703 4.989.578.996 2.11.996 5.176.996h6.214c3.066 0 4.598 0 5.177-.996.578-.996-.183-2.327-1.704-4.989l-3.107-5.437C13.931 6.38 13.161 5.03 12 5.03c-1.16 0-1.931 1.349-3.473 4.047z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_376_25516">
                            <path fill="currentColor" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <p className="cart__count--single">{item.amount}</p>
                    <button
                      className="btn btn--down"
                      onClick={() => decreaseItem(item.id)}
                    >
                      <svg
                        data-src="https://api.macosicons.com/uploads/triangle_down_24px_79e155d877.svg"
                        id="triangle-down-filled"
                        fill="none"
                        className="icon-image icon-image-24"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        data-attributes-set="width,height,xmlns"
                        data-rendered="true"
                      >
                        <g clipPath="url(#clip0_376_25517)">
                          <path
                            d="M15.497 15.206l3.202-5.763c1.47-2.648 2.206-3.972 1.626-4.957-.58-.986-2.095-.986-5.123-.986H8.798c-3.028 0-4.543 0-5.123.986-.58.985.156 2.31 1.626 4.957l3.202 5.763c1.547 2.784 2.32 4.176 3.497 4.176s1.95-1.392 3.497-4.176z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_376_25517">
                            <path fill="currentColor" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </article>
                </article>
              );
            }
          })}
        </section>

        <section className="total__section">
          <hr />
          <section className="total__section--amount">
            <h5 className="total">Total</h5>
            <p className="price">₹ {total}</p>
          </section>
          <button className="btn btn--clear" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </section>
      </main>
    </>
  );
};

export default ShoppingCart;

{
  /* 
        <section className="cart__container">
          {data.map(({ amount, img, id, price, title }) => {
            {
              <article className="cart__item">
                <img src={img} alt="image" className="cart__image" />
                <article className="cart__content">
                  <h3 className="cart__title">name</h3>
                  <h4 className="cart__price">₹ 34234</h4>
                  <button className="btn btn--remove">remove</button>
                </article>
                <article className="btn--group">
                  <button className="btn btn--up">
                    <svg
                      data-src="https://api.macosicons.com/uploads/triangle_up_24px_1ce0aeef5f.svg"
                      id="triangle-up-filled"
                      fill="none"
                      className="icon-image icon-image-24"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-attributes-set="width,height,xmlns"
                      data-rendered="true"
                    >
                      <g clipPath="url(#clip0_376_25516)">
                        <path
                          d="M8.527 9.078L5.42 14.515c-1.521 2.662-2.282 3.993-1.703 4.989.578.996 2.11.996 5.176.996h6.214c3.066 0 4.598 0 5.177-.996.578-.996-.183-2.327-1.704-4.989l-3.107-5.437C13.931 6.38 13.161 5.03 12 5.03c-1.16 0-1.931 1.349-3.473 4.047z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_376_25516">
                          <path fill="currentColor" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p className="cart__count--single">2</p>
                  <button className="btn btn--down">
                    <svg
                      data-src="https://api.macosicons.com/uploads/triangle_down_24px_79e155d877.svg"
                      id="triangle-down-filled"
                      fill="none"
                      className="icon-image icon-image-24"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-attributes-set="width,height,xmlns"
                      data-rendered="true"
                    >
                      <g clipPath="url(#clip0_376_25517)">
                        <path
                          d="M15.497 15.206l3.202-5.763c1.47-2.648 2.206-3.972 1.626-4.957-.58-.986-2.095-.986-5.123-.986H8.798c-3.028 0-4.543 0-5.123.986-.58.985.156 2.31 1.626 4.957l3.202 5.763c1.547 2.784 2.32 4.176 3.497 4.176s1.95-1.392 3.497-4.176z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_376_25517">
                          <path fill="currentColor" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </article>
              </article>;
            }
          })}
        </section> */
}
