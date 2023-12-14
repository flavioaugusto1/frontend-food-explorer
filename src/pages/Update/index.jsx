import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
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
  const [data, setData] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  function handleBackNavigate() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/dishes/details/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchDetails();
  }, []);

  return (
    <Container>
      <Header receipts="0" onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <div id="backPage">
          <BackButtonIcon onClick={handleBackNavigate} />
          <ButtonText title="voltar" onClick={handleBackNavigate} />
        </div>

        <h1>Editar prato</h1>

        <Form>
          <div id="image" className="label-style">
            <label htmlFor="logo">Imagem do prato</label>
            <Input type="file" name="logo" id="logo" />
          </div>

          <div id="name-input" className="label-style">
            <label htmlFor="name" id="name">
              Nome
            </label>
            <Input
              type="text"
              name="name"
              value={data.name}
              id="name"
              placeholder="Ex.: Salada Ceasar"
            />
          </div>

          {data.category && (
            <div id="category" className="label-style">
              <label htmlFor="category">Categoria</label>
              <SelectButton className="select" data={data.category} />
            </div>
          )}

          <div id="ingredients" className="label-style">
            <label htmlFor="ingredients">Ingredientes</label>

            {data.ingredients && (
              <div className="ingredients">
                {data.ingredients.map((ingredient) => (
                  <IngredientItem key={ingredient.id} value={ingredient.name} />
                ))}

                <IngredientItem isNew name="Adicionar" />
              </div>
            )}
          </div>

          <div id="description" className="label-style">
            <label htmlFor="description">Descrição</label>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              data={data.description}
            />
          </div>

          <div id="price" className="label-style">
            <label htmlFor="price">Preço</label>
            <Input
              type="text"
              name="price"
              id="price"
              placeholder="R$ 00,00"
              value={data.price}
            />
          </div>

          <div id="buttons">
            <Button name="Excluir prato" className="buttonDelete" />
            <Button name="Salvar alterações" />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
