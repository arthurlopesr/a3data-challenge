import { lighten } from "polished";
import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  padding: ${theme.space(3)} ${theme.space(3)};
  border: 1px solid var(--gray-gray-5, #adb5bd);
  border-radius: ${theme.borderRadius("md")};
  width: 1200px;

  &:focus-within {
    border-color: ${theme.color("primary")};
    outline: ${lighten(0.6, "#081C73")} 2px solid;
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

export const InputContainer = styled.input`
  border: none;
  width: auto;
  ${theme.breakpoint("xs")} {
    width: 100%;
  }

  ${theme.breakpoint("xl")} {
    width: 100%;
  }
  ${theme.breakpoint("lg")} {
    width: 100%;
  }

  ${theme.breakpoint("2xl")} {
    width: 100%;
  }
`;

export const LabelContainer = styled.div`
  max-width: 1200px;
  display: flex;
  text-align: left;
  flex-direction: column;

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

export const Label = styled.label`
  margin-top: ${theme.space(3)};
  margin-bottom: ${theme.space(1)};
  font-size: ${theme.space(4)};
  color: "#606060";
`;
