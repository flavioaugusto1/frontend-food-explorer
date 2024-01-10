import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../services/notifyStatus";

import {
  Container,
  HeartIcon,
  PencilIcon,
  OrderDishes,
  PlusIcon,
  MinusIcon,
} from "./style";

import { Button } from "../Button";

export function CardFood({ data, addItemsOnCart, imgDish, ...rest }) {
  const { user } = useAuth();
  const [numberItem, setNumberItem] = useState(1);

  const [favorited, setFavorited] = useState(false);

  const [price, setPrice] = useState(data.price);
  const [showPrice, setShowPrice] = useState(data.price);
  const initialPrice = data.price;

  const navigate = useNavigate();

  function increasedItem() {
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

  function formatPrice(price) {
    const formatedPrice = price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setShowPrice(formatedPrice);
  }

  function handleNavigateDetails() {
    navigate(`/details/${data.id}`);
  }

  function handleNavigateUpdate() {
    navigate(`/update/${data.id}`);
  }

  function handleFavorited() {
    const isFavorited = favorited ? setFavorited(false) : setFavorited(true);
    return;
  }

  useEffect(() => {
    formatPrice(price);
  }, [price]);

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <PencilIcon onClick={handleNavigateUpdate} />
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <HeartIcon isFavorited={favorited} onClick={handleFavorited} />
      )}

      <img
        src={imgDish}
        alt="Imagem de uma salada"
        onClick={handleNavigateDetails}
      />
      <div id="titleDish" onClick={handleNavigateDetails}>
        {data.name}
      </div>
      <span id="descriptionDish" onClick={handleNavigateDetails}>
        {data.description}
      </span>
      <div id="price">{showPrice}</div>

      {user.role === USER_ROLE.CUSTOMER && (
        <div id="buttons">
          <OrderDishes>
            <MinusIcon onClick={decreasedItem} />
            <span>{numberItem}</span>
            <PlusIcon onClick={increasedItem} />
          </OrderDishes>
          <Button name="incluir" onClick={() => addItemsOnCart(numberItem)} />
        </div>
      )}
    </Container>
  );
}
