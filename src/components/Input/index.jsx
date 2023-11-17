import { Container } from "./style";

export function Input({ title, placeholder, type }) {
  return (
    <Container>
      <input type={type} placeholder={placeholder} />
    </Container>
  );
}
