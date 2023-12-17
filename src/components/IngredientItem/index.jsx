import { Container, PlusIcon, CloseIcon } from "./style";

export function IngredientItem({
  isNew = false,
  value,
  isNewIngredient,
  addNewIngredient,
  removeIngredient,
  ...rest
}) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Adicionar"
        onChange={isNewIngredient}
      />

      <button {...rest} type="button">
        {isNew ? (
          <PlusIcon onClick={addNewIngredient} />
        ) : (
          <CloseIcon onClick={removeIngredient} />
        )}
      </button>
    </Container>
  );
}
