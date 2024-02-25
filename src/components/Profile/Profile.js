import { useState } from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("example@yolo.com");

  const handleLogout = () => {
    setFname("");
    setLname("");
    console.log("Logout");
  };

  const handleProfileUpdate = (event) => {
    const profileData = { fname, lname, email };
    console.log(profileData);
    event.preventDefault();
  };

  return (
    <section className={styles.profile}>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
      <form className={styles.details} onSubmit={handleProfileUpdate}>
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
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          required
          disabled
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Update Profile</button>
      </form>
    </section>
  );
}
