import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { api } from "../../services/api";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleCreateUser() {
    try {
      const response = await api.post("/register", { name, email, password });

      alert("Usuário cadastrado com sucesso");
      navigate("/");
      return;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o cadastro");
      }
    }
  }

  function handleNavigate() {
    navigate("/");
  }

  return (
    <Container>
      <Brand size={47} />
      <section>
        <h1>Crie sua conta</h1>
        <form>
          <div className="inputs-register">
            <span>Seu nome</span>
            <Input
              type="text"
              title="Seu nome"
              placeholder="Exemplo: Maria da Silva"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="inputs-register">
            <span>E-mail</span>
            <Input
              type="email"
              title="E-mail"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputs-register">
            <span>Senha</span>
            <Input
              type="password"
              title="Senha"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button name="Criar conta" onClick={handleCreateUser} />
          <ButtonText title="Já tenho uma conta" onClick={handleNavigate} />
        </form>
      </section>
    </Container>
  );
}
