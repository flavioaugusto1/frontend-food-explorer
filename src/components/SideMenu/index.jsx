import { Container, Header, Content, CloseIcon } from "./style";

import { Input } from "../Input";

export function SideMenu() {
  return (
    <Container>
      <Header>
        <CloseIcon />
        <h1>Menu</h1>
      </Header>

      <Content>
        <div id="search">
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
      </Content>
    </Container>
  );
}
