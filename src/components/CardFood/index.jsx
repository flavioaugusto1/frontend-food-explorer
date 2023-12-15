import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
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

export function CardFood({
  title,
  price,
  description,
  addItemsOnCart,
  onNavigateDetails,
  onNavigateUpdate,
  ...rest
}) {
  const { user } = useAuth();
  const [numberItem, setNumberItem] = useState(1);

  function increasedItem() {
    setNumberItem((prevState) => prevState + 1);
  }

  function decreasedItem() {
    if (numberItem === 0) {
      return;
    }
    setNumberItem((prevState) => prevState - 1);
  }

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <PencilIcon onClick={onNavigateUpdate} />
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <HeartIcon />}

      <img src={Dish} alt="Imagem de uma salada" onClick={onNavigateDetails} />
      <div id="titleDish" onClick={onNavigateDetails}>
        {title}
      </div>
      <span id="descriptionDish" onClick={onNavigateDetails}>
        {description}
      </span>
      <div id="price">{price}</div>

      {user.role === USER_ROLE.CUSTOMER && (
        <div id="buttons">
          <OrderDishes>
            <MinusIcon onClick={decreasedItem} />
            <span>{numberItem}</span>
            <PlusIcon onClick={increasedItem} />
          </OrderDishes>
          <Button name="incluir" onClick={addItemsOnCart} />
        </div>
      )}
    </Container>
  );
}
