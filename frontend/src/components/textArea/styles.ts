import styled from "styled-components";
import { theme } from "../../theme";

export const TextAreaContainer = styled.textarea`
  display: flex;
  border-radius: ${theme.borderRadius("md")};
  border: 1px solid var(--gray-gray-5, #adb5bd);
  padding: ${theme.space(3)} ${theme.space(5)};
  margin-top: ${theme.space(5)};
  color: ${theme.color("grey800")};
  width: 1200px;
  overflow: hidden;
  resize: none;

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
