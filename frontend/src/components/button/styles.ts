import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonContainer = styled.button`
  background-color: ${theme.color("deepPink")};
  cursor: pointer;
  width: 1200px;
  height: ${theme.space(10)};
  border-radius: ${theme.borderRadius("md")};
  border: none;
  margin-top: ${theme.space(5)};
  font-size: ${theme.space(4)};
  color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${theme.color("lightPink")};
  }

  ${theme.breakpoint("xs")} {
    width: ${theme.space(50)};
  }

  ${theme.breakpoint("xl")} {
    width: 900px;
  }
  ${theme.breakpoint("lg")} {
    width: 900px;
  }

  ${theme.breakpoint("2xl")} {
    width: 1200px;
  }
`;
