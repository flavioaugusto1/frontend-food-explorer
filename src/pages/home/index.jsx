import { Container } from "./style";

import Fruits from "../../assets/fruits.png";

import { Header } from "../../components/Header";
import { CardFood } from "../../components/CardFood";
import { Footer } from "../../components/Footer";
import { useState } from "react";

export function Home() {
  const [items, setItems] = useState(1);
  const [receipt, setReceipt] = useState(0);

  function handleReceipt() {
    setReceipt(prevState => prevState + items)
  }
  function handleItems() {
    setItems((prevState) => prevState + 1);
  }

  return (
    <Container>
      <Header receipts={receipt} />
      <div id="content">
        <div id="wrap">
          <section id="infos">
            <img src={Fruits} alt="Imagem de frutas" />
            <div id="texts">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </section>
        </div>

        <section id="meals">
          <h2>Refeições</h2>
          <div className="dishes">
            <CardFood
              title="Salada Ravanello"
              price={`R$ 49,97`}
              numberOfDishes="01"
            />
          </div>
        </section>

        <section id="main_dishes">
          <h2>Pratos Principais</h2>
          <div className="dishes">
            <CardFood
              title="Salada Ravanello"
              price={`R$ 49,97`}
              numberOfDishes={items}
              onAddItems={handleItems}
              addReceiptItems={handleReceipt}
            />
          </div>
        </section>

        <section id="dessert">
          <h2>Sobremesas</h2>
          <div className="dishes">
            <CardFood
              title="Salada Ravanello"
              price={`R$ 49,97`}
              numberOfDishes="01"
            />
          </div>
        </section>
      </div>

      <Footer />
    </Container>
  );
}
