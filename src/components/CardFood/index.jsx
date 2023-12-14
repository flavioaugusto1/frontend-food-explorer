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
  onNavigateDetails,
  onNavigateUpdate,
  ...rest
}) {
  const { user } = useAuth();

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
          <OrderDishes numberOfDishes="01" />
          <Button name="incluir" onClick={addReceiptItems} />
        </div>
      )}
    </Container>
  );
}
