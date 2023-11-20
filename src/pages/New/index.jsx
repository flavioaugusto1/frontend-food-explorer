import { useState } from "react";
import { Container, Content, Form, BackButtonIcon } from "./style";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import { IngredientItem } from "../../components/IngredientItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
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

        <h1>Adicionar prato</h1>

        <Form>
        <div id="image" className="label-style">
            <label htmlFor="logo">Imagem do prato</label>
            <Input type="file" name="logo" id="logo" />
          </div>

          <div id="name-input" className="label-style">
            <label htmlFor="name" id="name">Nome</label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Ex.: Salada Ceasar"
            />
          </div>

          <div id="category" className="label-style">
            <label htmlFor="category">Categoria</label>
            <SelectButton className="select" />
          </div>

          <div id="ingredients" className="label-style">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredients">
              <IngredientItem value="Pimenta do reino" />

              <IngredientItem isNew name="Adicionar" />
            </div>
          </div>

          <div id="description" className="label-style">
            <label htmlFor="description">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </div>

          <div id="price" className="label-style">
            <label htmlFor="price">Preço</label>
            <Input type="text" name="price" id="price" placeholder="R$ 00,00" />
          </div>

          <div id="buttons">
            <Button name="Salvar alterações" />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
