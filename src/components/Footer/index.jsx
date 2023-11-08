import { Container, HexagonIcon } from "./style";

export function Footer() {
  return (
    <Container>
      <div id="brand">
        <HexagonIcon />
        <span>food explorer</span>
      </div>

      <span id="copyright">© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
