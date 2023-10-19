import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
`;

export const Wrapper = styled.div`
  margin-top: ${theme.space(4)};

  display: flex;
  align-items: center;
  justify-content: center;
`;
