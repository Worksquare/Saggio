import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    // const unsub = () => {
    //   const user = JSON.parse(localStorage.getItem("user"));

    //   if (user) {
    //     dispatch({ type: "AUTH_IS_READY", payload: user });
    //   }
    // };

    // return () => unsub();

    if (user) {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    }
  }, []);

  console.log("Authention State: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
