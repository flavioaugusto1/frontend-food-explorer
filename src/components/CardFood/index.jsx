import { Container, HeartIcon } from "./style";
import Dish from "../../assets/dish.png";

import { Button } from "../Button";
import { OrderDishes } from "../OrderDishes";

export function CardFood({
  title,
  price,
  numberOfDishes,
  onAddItems,
  addReceiptItems,
  ...rest
}) {
  return (
    <Container>
      <HeartIcon />
      <img src={Dish} alt="Imagem de uma salada" />
      <div id="titleDish">{title}</div>
      <div id="price">{price}</div>
      <OrderDishes numberOfDishes="01" />

      <Button name="incluir" onClick={addReceiptItems} />
    </Container>
  );
}
