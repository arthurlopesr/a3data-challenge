import { ComponentProps } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ ...props }: ButtonProps) {
  return <ButtonContainer {...props} />;
}
