import { Container, ListIcon, ReceiptIcon, SignOutIcon } from "./style";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ receipts, onOpenMenu }) {
  return (
    <Container>
      <ListIcon onClick={onOpenMenu} />

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
          <Button name={`Pedidos (${receipts})`} icon />
        </div>

        <div id="signout">
          <SignOutIcon />
        </div>
      </div>
    </Container>
  );
}
