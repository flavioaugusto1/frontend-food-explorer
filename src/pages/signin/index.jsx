import { Container, Form } from "./style";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Brand />
      <Form>
        <Input title="E-mail" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button name="Entrar" />
        <ButtonText title="Criar uma conta" />
      </Form>
    </Container>
  );
}
