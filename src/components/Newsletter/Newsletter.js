import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h1>Stay Connected</h1>
      <div className={styles.container}>
        <p>
          Stay in the loop with our latest artistic offerings! Subscribe now.
        </p>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}
