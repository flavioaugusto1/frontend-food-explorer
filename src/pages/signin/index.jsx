import { Container, Form } from "./style";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <Container>
      <Brand />
      <Form>
        <Input title="E-mail" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input title="Senha" placeholder="No mínimo 6 caracteres" />
      </Form>
    </Container>
  );
}
