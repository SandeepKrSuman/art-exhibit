import styles from "./Contact.module.css";

export default function Contact() {
  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
  };

  return (
    <section className={styles.contact}>
      <div className={styles.col1}>
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" autoFocus required />
          <input type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message..."></textarea>
          <button>Submit</button>
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
