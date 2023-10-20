import { useEffect, useState } from "react";
import { SurgicalOrdersParams } from "../../@types/surgical-orders";
import { Header } from "../../components/header/Header";
import { OrderCard } from "../../components/ordersCard/OrderCard";
import { SurgicalOrdersService } from "../../services/SurgicalOrdersService";
import { Container, Main } from "./styles";

export function SurgicalOrders({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<SurgicalOrdersParams[]>([]);

  useEffect(() => {
    findAllOrderSurgery();
  }, []);

  const findAllOrderSurgery = async () => {
    const orders = await SurgicalOrdersService.findAllOrderSurgery();
    setData(orders);
  };

  const onEdit = async (code: SurgicalOrdersParams) => {
    const editedOrder = await SurgicalOrdersService.updateOrderSurgery(code);

    return editedOrder;
  };

  const onDelete = async (code: SurgicalOrdersParams) => {
    const deletedOrder = await SurgicalOrdersService.removeOrderSurgery(code);

    return deletedOrder;
  };

  return (
    <Container>
      <Header />
      <Main>
        {children}
        <OrderCard
          data={data}
          setData={setData}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </Main>
    </Container>
  );
}
