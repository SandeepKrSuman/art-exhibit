import { useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import { AuthState } from "../../context/AuthContext";
import api from "../../api";
import styles from "./Login.module.css";

export default function Login() {
  const [newac, setNewac] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    state: { isLoading },
    authDispatch,
  } = AuthState();

  const handleSignUp = async () => {
    authDispatch({ type: "SET_LOADING", payload: { status: true } });
    try {
      const postData = { fname, lname, email, password };
      const res = await api.signup(postData);
      if (res.data.error) {
        toast.error(res.data.errorMsg);
        authDispatch({ type: "SET_LOADING", payload: { status: false } });
      } else {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        toast.success("Signup successful!");
        authDispatch({ type: "SET_AUTH" });
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.errorMsg || "Something went wrong!");
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    }
  };

  const handleSignIn = async () => {
    authDispatch({ type: "SET_LOADING", payload: { status: true } });
    try {
      const postData = { email, password };
      const res = await api.signin(postData);
      if (res.data.error) {
        toast.error(res.data.errorMsg);
        authDispatch({ type: "SET_LOADING", payload: { status: false } });
      } else {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        toast.success("Login Successful!");
        authDispatch({ type: "SET_AUTH" });
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.errorMsg || "Something went wrong!");
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newac ? handleSignUp() : handleSignIn();
  };

  return (
    <section className={styles.login}>
      {isLoading ? (
        <Skeleton width={"100%"} height={300} />
      ) : (
        <>
          <h1>{newac ? "Create Account" : "Login"}</h1>
          <form className={styles.details} onSubmit={handleSubmit}>
            {newac && (
              <>
                <label htmlFor="fname">First Name:</label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="off"
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor="lname">Last Name:</label>
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  autoComplete="off"
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </>
            )}
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="on"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>{newac ? "Sign Up" : "Sign In"}</button>
            <span onClick={() => setNewac((prev) => !prev)}>
              {newac
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </span>
          </form>
        </>
      )}
    </section>
  );
}
