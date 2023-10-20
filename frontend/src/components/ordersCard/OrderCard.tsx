import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { SurgicalOrdersParams } from "../../@types/surgical-orders";
import {
  Container,
  DeleteButton,
  EditButton,
  Hospital,
  MedicalProcedure,
  Observations,
  PatientsName,
  SurgeryDate,
  SurgicalRoom,
  Wrapper,
} from "./styles";

type OrderCard = {
  data: SurgicalOrdersParams[];
  onEdit: (code: string) => Promise<void>;
  onDelete: (code: string) => Promise<void>;
  setData: (data: SurgicalOrdersParams[]) => void;
};

export function OrderCard({ data, onEdit, onDelete }: OrderCard) {
  console.log("DATAAAAAA", data);

  const handleEdit = async (code: string) => {
    await onEdit(code);
  };
  const handleDelete = async (code: string) => {
    await onDelete(code);
  };

  return (
    <>
      {data.map((order) => (
        <Container>
          <Wrapper>
            <PatientsName>
              <b>Nome do Paciete:</b> {order.patient}
            </PatientsName>

            <MedicalProcedure>
              <b>Médico Responsável:</b> {order.doctor}
            </MedicalProcedure>

            <SurgeryDate>
              <b>Data da cirurgia:</b> {new Date(order.surgeryDate).toString()}
            </SurgeryDate>

            <Hospital>
              <b>Hospital</b> {order.hospital}
            </Hospital>

            <SurgicalRoom>
              <b>Sala da cirurgia:</b> {order.surgicalRoom}
            </SurgicalRoom>

            <Observations>
              <b>Observação: </b> {order.observations}
            </Observations>

            <EditButton onClick={() => handleEdit(order.code)}>
              <Pencil2Icon />
            </EditButton>

            <DeleteButton onClick={() => handleDelete(order.code)}>
              <TrashIcon />
            </DeleteButton>
          </Wrapper>
        </Container>
      ))}
    </>
  );
}
