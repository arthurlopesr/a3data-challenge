import { forwardRef, useId } from "react";
import {
  Container,
  HelperText,
  HelperTextContainer,
  Label,
  LabelContainer,
  TextAreaContainer,
} from "./styles";

type TextAreaProps = {
  label: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, helperText, ...rest }, ref) => {
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
          <TextAreaContainer hasError={true} ref={ref} {...rest} />
        </Container>

        <HelperTextContainer>
          {hasError && <HelperText>{helperText}</HelperText>}
        </HelperTextContainer>
      </>
    );
  }
);
