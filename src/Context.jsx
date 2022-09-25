import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const AppContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  amount: 0,
  price: 0,
  cart: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "DISPLAY__ITEMS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: "TOTAL__AMOUNT",
    });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({
      type: "EMPTY CART",
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  const increaseItem = (id) => {
    dispatch({
      type: "INCREASE",
      payload: id,
    });
  };
  const decreaseItem = (id) => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseItem,
        decreaseItem,
        clearCart,
        removeItem,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, Context };
