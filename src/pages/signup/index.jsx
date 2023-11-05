import { Container } from "./style";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Brand />
      <section>
        <h1>Crie sua conta</h1>
        <form>
          <Input
            type="text"
            title="Seu nome"
            placeholder="Exemplo: Maria da Silva"
          />
          <Input
            type="email"
            title="E-mail"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            type="password"
            title="Senha"
            placeholder="No mínimo 6 caracteres"
          />

          <Button name="Criar conta" />
          <ButtonText title="Já tenho uma conta" />
        </form>
      </section>
    </Container>
  );
}
