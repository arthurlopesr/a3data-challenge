import { Header } from "../../components/header/Header";
import { OrderCard } from "../../components/ordersCard/OrderCard";
import { Container, Main } from "./styles";

export function SurgicalOrders({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
        <OrderCard />
      </Main>
    </Container>
  );
}
