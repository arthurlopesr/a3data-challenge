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

export const Input = styled.input`
  all: unset;
  flex: 1;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space(1)};
  width: 1200px;

  .Input {
    width: 100px;
  }
`;
