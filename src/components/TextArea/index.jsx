import { Container } from "./style";

export function TextArea({ placeholder, data }) {
  return <Container placeholder={placeholder} value={data}></Container>;
}
