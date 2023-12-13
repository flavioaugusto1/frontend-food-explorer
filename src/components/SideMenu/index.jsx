import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  CloseIcon,
  SearchIcon,
  MenuList,
} from "./style";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";

export function SideMenu({ menuIsOpen, onCloseMenu, signOutUser }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/new");
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <CloseIcon onClick={onCloseMenu} />
        <h1>Menu</h1>
      </Header>

      <Content>
        <div id="search">
          <SearchIcon />
          <Input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <MenuList>
          {[USER_ROLE.ADMIN].includes(user.role) && (
            <li>
              <ButtonText title="Novo prato" onClick={handleNavigate} />
            </li>
          )}
          <li>
            <ButtonText title="Sair" onClick={signOutUser} />
          </li>
        </MenuList>
      </Content>
    </Container>
  );
}
