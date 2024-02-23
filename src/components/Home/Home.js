import Header from "../Header/Header";
import styles from "./Home.module.css";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Newsletter from "../Newsletter/Newsletter";
import HeaderPhone from "../Header/HeaderPhone";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <Header />
      <HeaderPhone />
      <Trending />
      <Featured />
      <Newsletter />
    </section>
  );
}
