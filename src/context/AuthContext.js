import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthenticationContext = createContext();

export default function AuthContext({ children }) {
  const [state, authDispatch] = useReducer(authReducer, {
    isLoading: false,
    isLogin: localStorage.getItem("accessToken") ? true : false,
  });

  useEffect(() => {
    authDispatch({ type: "SET_AUTH" });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ state, authDispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const AuthState = () => {
  return useContext(AuthenticationContext);
};
