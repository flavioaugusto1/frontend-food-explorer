import { Container, ReceiptIcon } from "./style";

export function Button({ name, icon = false, ...rest }) {
  return (
    <Container {...rest}>
      {icon && <ReceiptIcon />}
      {name}
    </Container>
  );
}
