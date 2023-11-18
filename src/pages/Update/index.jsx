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

export function Update() {
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

        <h1>Editar prato</h1>

        <Form>
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
            <IngredientItem value="Pimenta do reino" />
            <IngredientItem value="Frango" />
            <IngredientItem value="Sal" />

            <IngredientItem isNew name="Adicionar" />
          </div>

          <label htmlFor="price">Preço</label>
          <Input type="text" name="price" id="price" placeholder="R$ 00,00" />

          <label htmlFor="description">Descrição</label>
          <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

          <div className="buttons">
            <Button name="Excluir prato" className="buttonDelete" />
            <Button name="Salvar alterações" />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
