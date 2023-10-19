import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
`;

export const Main = styled.main`
  padding: ${theme.space(12)} ${theme.space(12)};

  ${theme.breakpoint("lg")} {
    padding: ${theme.space(12)} ${theme.space(40)};
  }

  ${theme.breakpoint("2xl")} {
    padding: ${theme.space(12)} ${theme.space(50)};
  }
`;
