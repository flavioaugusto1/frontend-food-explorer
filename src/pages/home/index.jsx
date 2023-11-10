import { Container } from "./style";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

import "@splidejs/react-splide/css/core";

import Fruits from "../../assets/fruits.png";

import { Header } from "../../components/Header";
import { CardFood } from "../../components/CardFood";
import { Footer } from "../../components/Footer";
import { useState } from "react";

export function Home() {
  const [slide, setSlide] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [items, setItems] = useState(1);
  const [receipt, setReceipt] = useState(0);

  function handleReceipt() {
    setReceipt((prevState) => prevState + items);
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
          <Splide
            className="dishes"
            options={{
              fixedWidth: 200,
              gap: "6rem",
              pagination: false,
              arrows: false,
            }}
          >
            {slide.map((slide) => (
              <SplideSlide key={slide.src}>
                <CardFood
                  title="Salada Ravanello"
                  price={`R$ 49,97`}
                  numberOfDishes="01"
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>

        <section id="main_dishes">
          <h2>Pratos principais</h2>
          <Splide
            className="dishes"
            options={{
              fixedWidth: 200,
              gap: "6rem",
              pagination: false,
              arrows: false,
            }}
          >
            {slide.map((slide) => (
              <SplideSlide key={slide.src}>
                <CardFood
                  title="Salada Ravanello"
                  price={`R$ 49,97`}
                  numberOfDishes="01"
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>

        <section id="dessert">
          <h2>Sobremesas</h2>
          <Splide
            className="dishes"
            options={{
              fixedWidth: 200,
              gap: "6rem",
              pagination: false,
              arrows: false,
            }}
          >
            {slide.map((slide) => (
              <SplideSlide key={slide.src}>
                <CardFood
                  title="Salada Ravanello"
                  price={`R$ 49,97`}
                  numberOfDishes="01"
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>

      <Footer />
    </Container>
  );
}
