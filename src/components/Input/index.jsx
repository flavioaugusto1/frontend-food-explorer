import { Container } from "./style";

export function Input({ title, placeholder }) {
  return (
    <Container>
      <p>
        {title}
      </p>

      <input type="text" placeholder={placeholder}/>
        
    </Container>
  );
}
