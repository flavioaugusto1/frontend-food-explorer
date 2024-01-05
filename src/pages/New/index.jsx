import { useState } from "react";
import { api } from "../../services/api";

import { toastNotify } from "../../services/notifyStatus";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { Container, Content, Form, BackButtonIcon, UploadIcon } from "./style";

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
  const [newIngredient, setNewIngredient] = useState(null);

  const [logo, setLogo] = useState(null);
  const [logoNameUpload, setLogoNameUpload] = useState("Selecione a imagem");

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

  async function handleNewDish(logoFile) {
    if (
      !logoFile ||
      !name ||
      !category ||
      !ingredients ||
      !price ||
      !description
    ) {
      toastNotify.error(
        "Você deixou campos em branco. Por gentileza preencher os campos faltantes."
      );
      return;
    }

    try {
      if (logoFile) {
        const logoFileForm = new FormData();
        logoFileForm.append("image", logoFile);

        const { data } = await api.post("/dishes/register", {
          name,
          category,
          description,
          ingredients,
          price,
        });

        const dish_id = data.id;

        logoFileForm.append("id", dish_id);
        await api.patch(`/dishes/image/${dish_id}`, logoFileForm);

        toastNotify.success("Prato cadastrado com sucesso");

        navigate("/");
        return;
      }

      const response = await api.post("/dishes/register", {
        name,
        category,
        description,
        ingredients,
        price,
      });

      toastNotify.success("Prato cadastrado com sucesso");

      navigate("/");
    } catch (error) {
      toastNotify.error("Não foi possível cadastrado o prato.");
    }
  }

  function handleChangeLogo(event) {
    const file = event.target.files[0];
    setLogo(file);

    const logoName = file.name;
    setLogoNameUpload(logoName);
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
            <span>Imagem do prato</span>
            <div className="upload-image">
              <label htmlFor="logo">
                <UploadIcon />
                {logoNameUpload}
              </label>
              <Input
                type="file"
                name="logo"
                id="logo"
                onChange={handleChangeLogo}
              />
            </div>
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
            <Button
              name="Salvar alterações"
              onClick={() => handleNewDish(logo)}
            />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
