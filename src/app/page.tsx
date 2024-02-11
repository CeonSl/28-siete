import Divider from "./components/divider";
import NavBar from "./components/navBar";
import Slider from "./components/slider";
import styles from "./page.module.css";
import Links from "./components/links";
import Paragraphs from "./components/paragraphs";
import Servicios from "./components/services";
import Contacto from "./components/contacto";


export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <NavBar />
      <Slider />
      <Links id="Filosofia" title="Filosofía "  >
        <Paragraphs />
      </Links>
      <Divider />
      <Links id="Servicios" title="Servicios "  >
        <Servicios />
      </Links>
      <Divider />
      <Links id="Contacto" title="Contacto ">
        <Contacto />
      </Links>
    </main>
  );
}
