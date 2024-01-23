import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import { toastNotify } from "../../services/notifyStatus";

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
  const { state } = useLocation();

  const [data, setData] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [receipt, setReceipt] = useState(state.key.receipts);

  const [price, setPrice] = useState(null);
  const [showPrice, setShowPrice] = useState(price);
  const initialPrice = data.price;

  const [numberItem, setNumberItem] = useState(1);

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

    setShowPrice(formatedPrice);
  }

  async function increasedItem() {
    if (numberItem === 20) {
      toastNotify.warn("O máximo de itens é 20");
      return;
    }
    setNumberItem((prevState) => prevState + 1);
    setPrice((prevState) => prevState + initialPrice);
  }

  function decreasedItem() {
    if (numberItem === 1) {
      toastNotify.warn("O mínimo de itens é 1");
      return;
    }
    setNumberItem((prevState) => prevState - 1);
    setPrice((prevState) => prevState - initialPrice);
  }

  function handleAddItemOnCart(value) {
    setReceipt((prevState) => prevState + value);
  }

  useEffect(() => {
    async function fetchDetailsDish() {
      try {
        const response = await api.get(`/dishes/details/${id}`);
        setData(response.data);
        setPrice(response.data.price);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDetailsDish();
  }, []);

  useEffect(() => {
    if (price) {
      formatPrice(price);
    }

    return;
  }, [price]);

  return (
    <Container>
      <Header receipts={receipt} onOpenMenu={() => setMenuIsOpen(true)} />
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
                      <OrderDishes
                        numberOfDishes={numberItem}
                        onAddItems={increasedItem}
                        onDecreaseItem={decreasedItem}
                      />
                      <Button
                        name={`pedir ∙ ${showPrice}`}
                        icon
                        id="addReceiptMobile"
                        onClick={() => handleAddItemOnCart(numberItem)}
                      />
                      <Button
                        name={`incluir ∙ ${showPrice}`}
                        id="addReceiptDesktop"
                        onClick={() => handleAddItemOnCart(numberItem)}
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
