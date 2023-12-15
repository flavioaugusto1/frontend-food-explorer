import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

import "@splidejs/react-splide/css/core";

import Fruits from "../../assets/fruits.png";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { CardFood } from "../../components/CardFood";
import { Footer } from "../../components/Footer";

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [receipt, setReceipt] = useState(0);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleAddItemOnCart(value) {
    setReceipt((prevState) => prevState + value);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/all?search=${search}`);

        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header receipts={receipt} onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

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
              gap: "1rem",
              pagination: false,
              breakpoints: {
                1024: {
                  arrows: false,
                },
              },
            }}
          >
            {data.map(
              (dish) =>
                dish.category === "prato_principal" && (
                  <SplideSlide key={dish.id}>
                    <CardFood
                      data={dish}
                      addItemsOnCart={handleAddItemOnCart}
                    />
                  </SplideSlide>
                )
            )}
          </Splide>
        </section>

        <section id="drinks">
          <h2>Bebidas</h2>
          <Splide
            className="dishes"
            options={{
              fixedWidth: 200,
              gap: "1rem",
              pagination: false,
              breakpoints: {
                1024: {
                  arrows: false,
                },
              },
            }}
          >
            {data.map(
              (dish) =>
                dish.category === "bebidas" && (
                  <SplideSlide key={dish.id}>
                    <CardFood
                      data={dish}
                      addItemsOnCart={handleAddItemOnCart}
                    />
                  </SplideSlide>
                )
            )}
          </Splide>
        </section>

        <section id="dessert">
          <h2>Sobremesas</h2>
          <Splide
            className="dishes"
            options={{
              fixedWidth: 200,
              gap: "1rem",
              pagination: false,
              breakpoints: {
                1024: {
                  arrows: false,
                },
              },
            }}
          >
            {data.map(
              (dish) =>
                dish.category === "sobremesas" && (
                  <SplideSlide key={dish.id}>
                    <CardFood
                      data={dish}
                      addItemsOnCart={handleAddItemOnCart}
                    />
                  </SplideSlide>
                )
            )}
          </Splide>
        </section>
      </div>

      <Footer />
    </Container>
  );
}
