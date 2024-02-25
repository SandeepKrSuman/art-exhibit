import { useRef } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const buttonRef = useRef(null);

  const handleSubmit = (event) => {
    const button = buttonRef.current;
    button.textContent = "✔ Subscribed! 🎉";
    button.style.backgroundColor = "#65B741";
    button.disabled = true;
    button.style.cursor = "not-allowed";
    event.preventDefault();
  };

  return (
    <section className={styles.newsletter}>
      <h1>Stay Connected</h1>
      <div className={styles.container}>
        <p>
          Stay in the loop with our latest artistic offerings! Subscribe now.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="off"
            required
          />
          <button ref={buttonRef}>Subscribe</button>
        </form>
      </div>
    </section>
  );
}
