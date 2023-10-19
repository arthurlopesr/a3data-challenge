import { forwardRef, useId } from "react";
import {
  Container,
  HelperText,
  HelperTextContainer,
  InputContainer,
  Label,
  LabelContainer,
} from "./styles";

type InputProps = {
  label: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, helperText, ...rest }, ref) => {
    const labelId = useId();
    const hasError = helperText;

    return (
      <>
        {label && (
          <LabelContainer>
            <Label htmlFor={labelId}>{label}</Label>
          </LabelContainer>
        )}
        <Container>
          <InputContainer
            id={labelId}
            type={type}
            name={name}
            {...rest}
            ref={ref}
            hasError={true}
          />
        </Container>

        <HelperTextContainer>
          {hasError && <HelperText>{helperText}</HelperText>}
        </HelperTextContainer>
      </>
    );
  }
);
