import { Container, Content, BackButtonIcon } from "./style";
import Dish from "../../assets/dish_264.png";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Details() {
  return (
    <Container>
      <Header receipts="0" />
      <Content>
        <div id="wrap">
          <section id="backPage">
            <BackButtonIcon />
            <ButtonText title="voltar" />
          </section>

          <div id="logo-product">
            <img src={Dish} alt="imagem de salada" />
          </div>

          <section id="description-product">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <ul className="ingredients">
              <Ingredients ingredient="alface" />
              <Ingredients ingredient="limão" />
              <Ingredients ingredient="bacon" />
              <Ingredients ingredient="peito de frango" />
              <Ingredients ingredient="pimenta do reino" />
              <Ingredients ingredient="sal do himalia" />
            </ul>
          </section>

          <div id="buttons">
            <Button name={`pedir . R$ 25,00`} icon id="addReceipt" />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
