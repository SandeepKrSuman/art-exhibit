import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>Welcome to ArtExhibit!</h2>
        <p>
          At ArtExhibit, we believe that art has the power to inspire,
          transform, and enrich our lives. Our journey began with a simple
          passion: to create a platform where artists could showcase their
          talents and art enthusiasts could discover exceptional works of art.
        </p>
        <p>
          Driven by our love for creativity and expression, we curated a diverse
          collection of paintings, sketches, and sculptures, each telling a
          unique story and capturing the essence of human imagination.
        </p>
        <p>
          Our mission is to connect artists with art lovers, fostering a vibrant
          community where creativity thrives and beauty is celebrated. Whether
          you{"'"}re a seasoned collector or an art enthusiast exploring for the
          first time, we invite you to join us on this journey of discovery and
          inspiration.
        </p>
        <p>Thank you for being a part of ArtExhibit.</p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/aboutbanner.png"
          alt="About ArtExhibit"
          className={styles.aboutImage}
        />
      </div>
    </div>
  );
}
