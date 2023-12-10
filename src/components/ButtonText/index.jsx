import { Container } from "./style";

export function ButtonText({ title, ...rest }){
 return(
  <Container {...rest}>
    {title}
  </Container>
 )
}