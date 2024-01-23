import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
    navigate("/");
  }

  function handleNavigate() {
    navigate("/register");
  }

  return (
    <Container>
      <Brand size={47} />

      <section>
        <h1>Faça login</h1>

        <form>
          <div className="inputs-login">
            <span>E-mail</span>
            <Input
              title="E-mail"
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputs-login">
            <span>Senha</span>
            <Input
              title="Senha"
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button name="Entrar" onClick={handleSignIn} />
          <ButtonText title="Criar uma conta" onClick={handleNavigate} />
        </form>
      </section>
    </Container>
  );
}