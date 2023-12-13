import { Container, ListIcon, ReceiptIcon, SignOutIcon } from "./style";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ receipts, onOpenMenu }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <ListIcon onClick={onOpenMenu} />

      <Brand id="brand"  />

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
          <SignOutIcon onClick={handleSignOut} />
        </div>
      </div>
    </Container>
  );
}
