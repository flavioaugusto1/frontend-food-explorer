import { useState } from "react";
import { Container, Content, BackButtonIcon } from "./style";
import Dish from "../../assets/dish_264.png";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";
import { Ingredients } from "../../components/Ingredients";
import { OrderDishes } from "../../components/OrderDishes";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Header receipts="0" onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

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
            <OrderDishes numberOfDishes="01" />
            <Button name={`pedir . R$ 25,00`} icon id="addReceipt" />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
