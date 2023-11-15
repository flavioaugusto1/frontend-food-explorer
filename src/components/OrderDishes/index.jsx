import { Container, MinusIcon, PlusIcon } from "./style";

export function OrderDishes({ numberOfDishes, onAddItems }) {
  return (
    <Container>
      <MinusIcon />
      <span>{numberOfDishes}</span>
      <PlusIcon onClick={onAddItems} />
    </Container>
  );
}
