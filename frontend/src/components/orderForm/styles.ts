import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: ${theme.borderRadius("md")};
  padding: ${theme.space(1)};
  color: ${theme.color("textColor")};

  :focus-within {
    outline: 2px solid #fff;
  }
`;
