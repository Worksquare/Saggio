import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://workspace.megascrypto.com/public/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const userData = await res.json();

      if (!res.ok) {
        //   setIsLoading(false);
        //   setError(userData.error);

        throw new Error("Could not fetch user");
      }

      if (res.ok) {
        setIsLoading(false);

        localStorage.setItem("user", JSON.stringify(userData));

        dispatch({ type: "LOGIN", payload: userData });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { signup, isLoading, error };
};
