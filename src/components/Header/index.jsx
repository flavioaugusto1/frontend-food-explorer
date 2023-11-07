import { Container, ListIcon, ReceiptIcon, SignOutIcon } from "./style";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <ListIcon />
      <Brand />
      <ReceiptIcon />

      <div id="input">
        <Input placeholder="Busque por pratos ou ingredientes" />
      </div>

      <div id="wrapButton">
        <div id="button">
          <Button name={`Pedidos(0)`} icon />
        </div>

        <div id="signout">
          <SignOutIcon />
        </div>
      </div>
    </Container>
  );
}
