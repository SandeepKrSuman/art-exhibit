import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import Trending from "../Trending/Trending";
import Featured from "../Featured/Featured";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <Navbar />
      <Carousel />
      <Header />
      <Trending />
      <Featured />
      <Newsletter />
      <Footer />
    </section>
  );
}
