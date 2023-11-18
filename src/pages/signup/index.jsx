import { Container } from "./style";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
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
            />
          </div>

          <div className="inputs-register">
            <span>E-mail</span>
            <Input
              type="email"
              title="E-mail"
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </div>

          <div className="inputs-register">
            <span>Senha</span>
            <Input
              type="password"
              title="Senha"
              placeholder="No mínimo 6 caracteres"
            />
          </div>

          <Button name="Criar conta" />
          <ButtonText title="Já tenho uma conta" />
        </form>
      </section>
    </Container>
  );
}
