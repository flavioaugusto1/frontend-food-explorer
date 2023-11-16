import { Container, Content, BackButtonIcon } from "./style";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import { Footer } from "../../components/Footer";

export function New() {
  return (
    <Container>
      <Header receipts="0" />

      <Content>
        <div id="backPage">
          <BackButtonIcon />
          <ButtonText title="voltar" />
        </div>

        <h1>Novo prato</h1>

        <form>
          <label htmlFor="logo">Imagem do prato</label>
          <Input type="file" name="logo" id="logo" />

          <label htmlFor="name">Nome</label>
          <Input type="text" name="name" id="name" />

          <label>Ingredientes</label>
          <SelectButton />
        </form>
      </Content>

      <Footer />
    </Container>
  );
}
