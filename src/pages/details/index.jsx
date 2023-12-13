import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
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
  const [data, setData] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleNavigte() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchDetailsDish() {
      try {
        const response = await api.get(`/dishes/details/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchDetailsDish();
  }, []);

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
            <BackButtonIcon onClick={handleNavigte} />
            <ButtonText title="voltar" onClick={handleNavigte} />
          </section>

          {data && (
            <section id="content-product">
              <div id="logo-product">
                <img src={Dish} alt="imagem de salada" />
              </div>

              <section id="description-product">
                <h1>{data.name}</h1>
                <p>{data.description}</p>

                {data.ingredients && (
                  <ul className="ingredients">
                    {data.ingredients.map((ingredient) => (
                      <Ingredients
                        key={ingredient.id}
                        ingredient={ingredient.name}
                      />
                    ))}
                  </ul>
                )}

                <div id="buttons">
                  <OrderDishes numberOfDishes="01" />
                  <Button
                    name={`pedir ∙ R$ ${data.price}`}
                    icon
                    id="addReceiptMobile"
                  />
                  <Button
                    name={`incluir ∙ R$ ${data.price}`}
                    id="addReceiptDesktop"
                  />
                </div>
              </section>
            </section>
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
