import { Container } from "./style";

export function Input({ title, placeholder, type, ...rest }) {
  return (
    <Container>
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
}
