import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

import {
  Container,
  HeartIcon,
  PencilIcon,
  OrderDishes,
  PlusIcon,
  MinusIcon,
} from "./style";

import Dish from "../../assets/dish.png";

import { Button } from "../Button";

export function CardFood({ data, addItemsOnCart, imgDish, ...rest }) {
  const { user } = useAuth();
  const [numberItem, setNumberItem] = useState(1);
  const [price, setPrice] = useState(data.price);
  const [image, setImage] = useState(null);
  const initialPrice = data.price;

  console.log(imgDish);
  const navigate = useNavigate();

  function increasedItem() {
    setNumberItem((prevState) => prevState + 1);
    setPrice((prevState) => prevState + initialPrice);
  }

  function decreasedItem() {
    if (numberItem === 1) {
      return;
    }
    setNumberItem((prevState) => prevState - 1);
    setPrice((prevState) => prevState - initialPrice);
  }

  function handleNavigateDetails() {
    navigate(`/details/${data.id}`);
  }

  function handleNavigateUpdate() {
    navigate(`/update/${data.id}`);
  }

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <PencilIcon onClick={handleNavigateUpdate} />
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <HeartIcon />}

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
      <div id="price">{`R$ ${price}`}</div>

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
