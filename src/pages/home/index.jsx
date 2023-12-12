import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

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
  const [mainDishes, setMainDishes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [receipt, setReceipt] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const dishes = await api.get("/dishes/all?search=prato_principal");
        const drinks = await api.get("/dishes/all?search=bebidas");
        const desserts = await api.get("/dishes/all?search=sobremesas");

        setMainDishes(dishes.data);
        setDrinks(drinks.data);
        setDesserts(desserts.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header
        receipts={receipt}
        onOpenMenu={() => setMenuIsOpen(true)}
        signOutUser={handleSignOut}
      />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        signOutUser={handleSignOut}
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
          {mainDishes && (
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
              {mainDishes.map((dish) => (
                <SplideSlide key={dish.id}>
                  <CardFood
                    title={dish.name}
                    description={dish.description}
                    price={`R$ ${dish.price}`}
                    numberOfDishes="01"
                    className="card-food"
                    onClick={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </section>

        <section id="drinks">
          <h2>Bebidas</h2>
          {drinks && (
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
              {drinks.map((dish) => (
                <SplideSlide key={dish.id}>
                  <CardFood
                    title={dish.name}
                    description={dish.description}
                    price={`R$ ${dish.price}`}
                    numberOfDishes="01"
                    className="card-food"
                    onClick={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </section>

        <section id="dessert">
          <h2>Sobremesas</h2>
          {desserts && (
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
              {desserts.map((dish) => (
                <SplideSlide key={dish.id}>
                  <CardFood
                    title={dish.name}
                    description={dish.description}
                    price={`R$ ${dish.price}`}
                    numberOfDishes="01"
                    className="card-food"
                    onClick={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </section>
      </div>

      <Footer />
    </Container>
  );
}
