import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  border-radius: ${theme.borderRadius("md")};
  border: 1px solid var(--gray-gray-5, #adb5bd);
  padding: ${theme.space(3)} ${theme.space(5)};
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

export const TextAreaContainer = styled.textarea<{ hasError: boolean }>`
  border: none;
  width: 1200px;

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

  ${(hasError) =>
    hasError &&
    css`
      border-color: ${theme.color("error")};
    `}
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

export const HelperText = styled.p`
  color: ${theme.color("error")};
  font-size: ${theme.space(3)};
  margin-top: ${theme.space(2)};
`;

export const HelperTextContainer = styled.div`
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
