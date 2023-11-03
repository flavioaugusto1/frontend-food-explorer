import { Container } from "./style";
import { Hexagon } from "@phosphor-icons/react";

export function Brand() {
  return (
    <Container>
      <Hexagon color="#065E7C" weight="fill" size={43} />
      <h1>food explorer</h1>
    </Container>
  );
}
