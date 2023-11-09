import { Container, ListIcon, ReceiptIcon, SignOutIcon } from "./style";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ receipts }) {
  return (
    <Container>
      <ListIcon />
      <Brand />
      <div id="receipt">
        <span>{receipts}</span>
        <ReceiptIcon />
      </div>

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
