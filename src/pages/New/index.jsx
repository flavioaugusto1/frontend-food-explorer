import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
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

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, serPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted)
    );
  }

  function handleNavigate() {
    navigate(-1);
  }

  async function handleNewDish() {
    console.log(ingredients);
    try {
      const response = await api.post("/dishes/register", {
        name,
        category,
        description,
        ingredients,
        price,
      });

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header receipts="0" onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Content>
        <div id="backPage">
          <BackButtonIcon onClick={handleNavigate} />
          <ButtonText title="voltar" onClick={handleNavigate} />
        </div>

        <h1>Adicionar prato</h1>

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
              id="name"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div id="category" className="label-style">
            <label htmlFor="category">Categoria</label>
            <SelectButton
              className="select"
              selected={(category) => setCategory(category)}
            />
          </div>

          <div id="ingredients" className="label-style">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredients">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  value={ingredient}
                  removeIngredient={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <IngredientItem
                isNew
                name="Adicionar"
                value={newIngredient}
                isNewIngredient={(e) => setNewIngredient(e.target.value)}
                addNewIngredient={handleAddIngredient}
              />
            </div>
          </div>

          <div id="description" className="label-style">
            <label htmlFor="description">Descrição</label>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div id="price" className="label-style">
            <label htmlFor="price">Preço</label>
            <Input
              type="text"
              name="price"
              id="price"
              placeholder="R$ 00,00"
              onChange={(e) => serPrice(e.target.value)}
            />
          </div>

          <div id="buttons">
            <Button name="Salvar alterações" onClick={handleNewDish} />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
