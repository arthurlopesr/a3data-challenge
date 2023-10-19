import { useId } from "react";
import { Container, InputContainer, Label, LabelContainer } from "./styles";

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, name, type, ...rest }: InputProps) {
  const labelId = useId();

  return (
    <>
      {label && (
        <LabelContainer>
          <Label htmlFor={labelId}>{label}</Label>
        </LabelContainer>
      )}
      <Container>
        <InputContainer id={labelId} type={type} name={name} {...rest} />
      </Container>
    </>
  );
}
