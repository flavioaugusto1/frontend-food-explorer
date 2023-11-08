import { Container } from "./style";

import Fruits from "../../assets/fruits.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <div id="wrap">
        <section id="infos">
          <img src={Fruits} alt="Imagem de frutas" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </section>
      </div>

      <section id="meals"></section>

      <section id="main_dishes"></section>

      <section id="dessert"></section>

      <Footer />
    </Container>
  );
}
