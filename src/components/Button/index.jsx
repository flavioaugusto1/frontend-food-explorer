import { Container, ReceiptIcon } from "./style";

export function Button({ name, icon = false, ...rest }) {
  return (
    <Container {...rest} type="button">
      {icon && <ReceiptIcon />}
      {name}
    </Container>
  );
}
