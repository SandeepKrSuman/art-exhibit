import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [newac, setNewac] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    console.log("Sign Up");
    event.preventDefault();
  };

  const handleSignIn = (event) => {
    console.log("Sign In");
    event.preventDefault();
  };

  return (
    <section className={styles.login}>
      <h1>{newac ? "Create Account" : "Login"}</h1>
      <form
        className={styles.details}
        onSubmit={newac ? handleSignUp : handleSignIn}
      >
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
    </section>
  );
}
