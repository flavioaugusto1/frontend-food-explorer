import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { toastNotify } from "../../services/notifyStatus";
import "react-toastify/dist/ReactToastify.css";

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

export function Update() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [logo, setLogo] = useState(null);
  const [logoNameUpload, setLogoNameUpload] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  function handleBackNavigate() {
    navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted)
    );
  }

  async function handleUpdateDish() {
    try {
      if (logo) {
        const uploadFileForm = new FormData();
        uploadFileForm.append("image", logo);

        const response = await api.put(`/dishes/update/${id}`, {
          name,
          category,
          ingredients,
          price,
          description,
        });

        uploadFileForm.append("id", id);
        await api.patch(`/dishes/image/${id}`, uploadFileForm);

        toastNotify.success("Prato atualizado com sucesso!");
        navigate("/");
        return;
      }

      const response = await api.put(`/dishes/update/${id}`, {
        name,
        category,
        ingredients,
        price,
        description,
      });

      toastNotify.success("Prato atualizado com sucesso!");

      navigate("/");
    } catch (error) {
      toastNotify.error("Não foi possível atualizar o prato.");
    }
  }

  function handleChangeLogo(event) {
    const file = event.target.files[0];
    setLogo(file);

    const logoName = file.name;
    setLogoNameUpload(logoName);
  }

  async function handleDeleteDish() {
    try {
      const response = await api.delete(`/dishes/delete/${id}`);
      toastNotify.success("Prato deletado com sucesso!");
      navigate("/");
    } catch (error) {
      toastNotify.error("Não foi possível deletar o prato.");
    }
  }

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await api.get(`/dishes/details/${id}`);
        const ingredients = response.data.ingredients.map(
          (ingredient) => ingredient.name
        );
        setName(response.data.name);
        setCategory(response.data.category);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setIngredients(ingredients);
        setLogoNameUpload(response.data.image);
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
              value={name}
              id="name"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {category && (
            <div id="category" className="label-style">
              <label htmlFor="category">Categoria</label>
              <SelectButton
                className="select"
                data={category}
                selected={(category) => setCategory(category)}
              />
            </div>
          )}

          <div id="ingredients" className="label-style">
            <label htmlFor="ingredients">Ingredientes</label>

            {ingredients && (
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
            )}
          </div>

          <div id="description" className="label-style">
            <label htmlFor="description">Descrição</label>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              data={description}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div id="buttons">
            <Button
              name="Excluir prato"
              className="buttonDelete"
              onClick={handleDeleteDish}
            />
            <Button name="Salvar alterações" onClick={handleUpdateDish} />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
