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
  onNavigate,
  ...rest
}) {
  const { user } = useAuth();

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <PencilIcon onClick={onNavigate} />
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <HeartIcon />}

      <img src={Dish} alt="Imagem de uma salada" onClick={onNavigate} />
      <div id="titleDish" onClick={onNavigate}>
        {title}
      </div>
      <span id="descriptionDish" onClick={onNavigate}>
        {description}
      </span>
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
