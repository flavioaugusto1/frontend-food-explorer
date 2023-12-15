import { Container, MinusIcon, PlusIcon } from "./style";

export function OrderDishes({ numberOfDishes, onAddItems, onDecreaseItem }) {
  return (
    <Container>
      <MinusIcon onClick={onDecreaseItem} />
      <span>{numberOfDishes}</span>
      <PlusIcon onClick={onAddItems} />
    </Container>
  );
}
