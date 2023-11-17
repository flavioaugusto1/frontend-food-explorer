import { Container,  } from "./style";

export function IngredientItem({ isNew = false, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input isNew={isNew} type="text" value={value} readOnly={!isNew}/>
    </Container>
  );
}
