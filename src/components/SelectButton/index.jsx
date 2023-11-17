import * as Select from "@radix-ui/react-select";
import {
  SelectTrigger,
  SelectViewport,
  SelectContent,
  SelectItem,
  IconDown,
} from "./style";

export function SelectButton() {
  return (
    <Select.Root>
      <SelectTrigger>
        <Select.Value placeholder="Selecione a categoria" />
        <Select.Icon>
          <IconDown />
        </Select.Icon>
      </SelectTrigger>

      <Select.Portal className="SelectPortal">
        <SelectContent position="popper" sideOffset={2}>
          <SelectViewport>
            <SelectItem value="prato_principal">
              <Select.ItemText className="SelectItem">Prato Principal</Select.ItemText>
            </SelectItem>
            <SelectItem value="sobremesa">
              <Select.ItemText>Sobremesa</Select.ItemText>
            </SelectItem>
            <SelectItem value="bebidas">
              <Select.ItemText>Bebidas</Select.ItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}
