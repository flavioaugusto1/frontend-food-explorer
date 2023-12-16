import { Container, ListIcon, ReceiptIcon, SignOutIcon } from "./style";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ receipts, onOpenMenu, searchDish }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleNewDish() {
    navigate("/new");
  }

  return (
    <Container>
      <ListIcon onClick={onOpenMenu} />

      <Brand id="brand" />

      <div id="receipt">
        {[USER_ROLE.CUSTOMER].includes(user.role) && (
          <>
            <span>{receipts}</span>
            <ReceiptIcon />
          </>
        )}
      </div>

      <div id="input">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          onChange={searchDish}
        />
      </div>

      <div id="wrapButton">
        {[USER_ROLE.CUSTOMER].includes(user.role) && (
          <div id="button">
            <Button name={`Pedidos (${receipts})`} icon />
          </div>
        )}

        {[USER_ROLE.ADMIN].includes(user.role) && (
          <div id="button">
            <Button name="Novo prato" onClick={handleNewDish} />
          </div>
        )}

        <div id="signout">
          <SignOutIcon onClick={handleSignOut} />
        </div>
      </div>
    </Container>
  );
}
