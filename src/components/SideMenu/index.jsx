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

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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
          <li>
            <ButtonText title="Novo prato" />
          </li>
          <li>
            <ButtonText title="Sair" />
          </li>
        </MenuList>
      </Content>

    </Container>
  );
}
