import { ChangeEvent } from "react";
import {
  Label,
  TextArea,
  TextField,
  Wrapper,
} from "../styles/components/Input";
import { InputProps } from "../types/Input";

export default function Input({ label, value, updateForm, area }: InputProps) {
  if (value === undefined) {
    return null;
  }

  return (
    <Wrapper data-testid="Input">
      {area ? (
        <TextArea
          placeholder=" "
          value={value}
          onChange={(e: ChangeEvent) => updateForm(e)}
        />
      ) : (
        <TextField
          placeholder=" "
          value={value}
          onChange={(e: ChangeEvent) => updateForm(e)}
        />
      )}
      <Label>{label.toUpperCase()}</Label>
    </Wrapper>
  );
}
