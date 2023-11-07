import { Container } from "./style";

export function Input({ title, placeholder, type }) {
  return (
    <Container>
      <p>{title}</p>

      <input type={type} placeholder={placeholder} />
    </Container>
  );
}
