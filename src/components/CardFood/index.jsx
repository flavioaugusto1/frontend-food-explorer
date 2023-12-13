import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Container, HeartIcon, PencilIcon } from "./style";
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
  const { user } = useAuth();

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && <PencilIcon />}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <HeartIcon />}
      <img src={Dish} alt="Imagem de uma salada" />
      <div id="titleDish">{title}</div>
      <span id="descriptionDish">{description}</span>
      <div id="price">{price}</div>

      {user.role === USER_ROLE.CUSTOMER && (
        <div id="buttons">
          <OrderDishes numberOfDishes="01" />
          <Button name="incluir" onClick={addReceiptItems} />
        </div>
      )}
    </Container>
  );
}
