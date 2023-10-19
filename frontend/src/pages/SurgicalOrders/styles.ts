import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Cria 3 colunas iguais */
  gap: 20px; /* Espaçamento entre as colunas */
  gap: ${theme.space(4)};
  width: 100%;

  ${theme.breakpoint("lg")} {
    padding: ${theme.space(12)} ${theme.space(40)};
    grid-template-columns: repeat(3, 1fr);
  }

  ${theme.breakpoint("lg")} {
    padding: ${theme.space(12)} ${theme.space(40)};
    grid-template-columns: repeat(3, 1fr);
  }
`;
