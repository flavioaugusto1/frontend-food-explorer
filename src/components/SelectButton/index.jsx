import * as Select from "@radix-ui/react-select";
import { Container, IconDown, IconUp } from "./style";

export function SelectButton() {
  return (
    <Container>
      <Select.Root>
        <Select.Trigger className="SelectTrigger">
          <Select.Value placeholder="Selecione o ingrediente" />
          <Select.Icon>
            <IconDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal className="SelectPortal">
          <Select.Content className="SelectContent">
            <Select.ScrollUpButton className="SelectScrollButton ">
              <IconUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              <Select.Item value="refeição" className="SelectItem">
                <Select.ItemText className="SelectItem">
                  Refeição
                </Select.ItemText>
              </Select.Item>
              <Select.Item value="prato_principal" className="SelectItem">
                <Select.ItemText>Prato Principal</Select.ItemText>
              </Select.Item>
              <Select.Item value="sobremesa" className="SelectItem">
                <Select.ItemText>Sobremesas</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </Container>
  );
}
