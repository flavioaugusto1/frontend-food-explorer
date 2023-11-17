import { useState } from "react";
import { Container, Content, BackButtonIcon } from "./style";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import { IngredientItem } from "../../components/IngredientItem";
import { Footer } from "../../components/Footer";

export function New() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Header receipts="0" onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
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
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Ex.: Salada Ceasar"
          />

          <label htmlFor="category">Categoria</label>
          <SelectButton className="select" />

          <label htmlFor="ingredients">Ingredients</label>
          <div className="ingredients">
            <IngredientItem name="Pimenta do reino" />
            <IngredientItem name="Frango" />
            <IngredientItem name="Sal" />
            <IngredientItem isNew name="Adicionar" />
          </div>
        </form>
      </Content>

      <Footer />
    </Container>
  );
}
