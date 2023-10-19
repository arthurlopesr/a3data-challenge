import { Header } from "../../components/header/Header";
import { OrderForm } from "../../components/orderForm/OrderForm";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <OrderForm />
    </Container>
  );
}
