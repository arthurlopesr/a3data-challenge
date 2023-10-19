import { Header } from "../../components/header/Header";
import { Container, Main } from "./styles";

export function SurgicalOrders({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}
