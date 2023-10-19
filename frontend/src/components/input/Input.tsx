import { ComponentProps } from "react";
import { Wrapper } from "../../pages/Home/styles";
import { Container } from "./styles";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <Wrapper>
      <Container {...props} />
    </Wrapper>
  );
}
