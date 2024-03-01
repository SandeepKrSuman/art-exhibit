import { useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const btnref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const button = btnref.current;
    button.textContent = "Message Sent!";
    button.style.backgroundColor = "#65B741";
    button.disabled = true;
    button.style.cursor = "not-allowed";
  };

  return (
    <section className={styles.contact}>
      <div className={styles.col1}>
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            autoFocus
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea name="message" placeholder="Message..."></textarea>
          <button ref={btnref}>Send Message</button>
        </form>
      </div>
      <div className={styles.col2}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004834854!2d77.04417366224577!3d28.527252739054855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708511163569!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
