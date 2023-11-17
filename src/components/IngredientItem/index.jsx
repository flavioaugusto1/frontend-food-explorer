import { Container, PlusIcon, CloseIcon } from "./style";

export function IngredientItem({ isNew = false, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Adicionar"
      />

      <button {...rest} type="button">
        {isNew ? <PlusIcon /> : <CloseIcon />}
      </button>
    </Container>
  );
}
