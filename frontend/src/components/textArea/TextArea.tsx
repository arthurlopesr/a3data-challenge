import { ComponentProps } from "react";
import { TextAreaContainer } from "./styles";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <TextAreaContainer {...props} />;
}
