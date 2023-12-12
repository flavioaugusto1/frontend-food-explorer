import { Container, HeartIcon } from "./style";
import Dish from "../../assets/dish.png";

import { Button } from "../Button";
import { OrderDishes } from "../OrderDishes";

export function CardFood({
  title,
  price,
  description,
  numberOfDishes,
  onAddItems,
  addReceiptItems,
  ...rest
}) {
  return (
    <Container {...rest}>
      <HeartIcon />
      <img src={Dish} alt="Imagem de uma salada" />
      <div id="titleDish">{title}</div>
      <span id="descriptionDish">{description}</span>
      <div id="price">{price}</div>

      <div id="buttons">
        <OrderDishes numberOfDishes="01" />
        <Button name="incluir" onClick={addReceiptItems} />
      </div>
    </Container>
  );
}
