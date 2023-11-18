import { Container } from "./style";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
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
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </div>

          <div className="inputs-login">
            <span>Senha</span>
            <Input
              title="Senha"
              placeholder="No mínimo 6 caracteres"
            />
          </div>

          <Button name="Entrar" />
          <ButtonText title="Criar uma conta" />
        </form>
      </section>
    </Container>
  );
}
