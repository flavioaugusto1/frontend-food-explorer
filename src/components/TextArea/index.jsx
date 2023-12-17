import { Container } from "./style";

export function TextArea({ placeholder, data, ...rest }) {
  return (
    <Container placeholder={placeholder} value={data} {...rest}></Container>
  );
}
