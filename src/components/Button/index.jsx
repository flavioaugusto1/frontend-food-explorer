import { Container } from "./style";

export function Button({name, ...rest}) {
  return(
    <Container {...rest}>
      {name}
    </Container>
  )
}