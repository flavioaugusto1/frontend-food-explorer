import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, Content, BackButtonIcon } from "./style";

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
  const [price, setPrice] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  function handleBackNavigte() {
    navigate(-1);
  }

  function handleUpdateDishNavigate() {
    navigate(`/update/${id}`);
  }

  function formatPrice(price) {
    const formatedPrice = price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setPrice(formatedPrice);
  }

  useEffect(() => {
    async function fetchDetailsDish() {
      try {
        const response = await api.get(`/dishes/details/${id}`);
        setData(response.data);
        formatPrice(response.data.price);
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
            <BackButtonIcon onClick={handleBackNavigte} />
            <ButtonText title="voltar" onClick={handleBackNavigte} />
          </section>

          {data && (
            <section id="content-product">
              <div id="logo-product">
                <img
                  src={`${api.defaults.baseURL}/files/${data.image}`}
                  alt="imagem de salada"
                />
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
                  {[USER_ROLE.CUSTOMER].includes(user.role) && (
                    <>
                      <OrderDishes numberOfDishes="01" />
                      <Button
                        name={`pedir ∙ ${price}`}
                        icon
                        id="addReceiptMobile"
                      />
                      <Button
                        name={`incluir ∙ ${price}`}
                        id="addReceiptDesktop"
                      />
                    </>
                  )}

                  {[USER_ROLE.ADMIN].includes(user.role) && (
                    <Button
                      name="Editar prato"
                      onClick={handleUpdateDishNavigate}
                    />
                  )}
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
