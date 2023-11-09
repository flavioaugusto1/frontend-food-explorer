import { Container, PlusIcon, MinusIcon, HeartIcon } from "./style";
import Dish from "../../assets/dish.png";

import { Button } from "../Button";

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
      <div id="numberOfDishes">
        <MinusIcon />
        <span>{numberOfDishes}</span>
        <PlusIcon onClick={onAddItems} />
      </div>

      <Button name="incluir" onClick={addReceiptItems} />
    </Container>
  );
}
