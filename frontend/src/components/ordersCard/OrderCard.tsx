import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { SurgicalOrders } from "../../models/SurgicalOrders";
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
  data: SurgicalOrders;
  onEdit: () => void;
  onDelete: () => void;
};

export function OrderCard({ data, onEdit, onDelete }: OrderCard) {
  return (
    <>
      <Container>
        <Wrapper>
          <PatientsName>
            <b>Nome do Paciete:</b> Arthur Lopes
          </PatientsName>

          <MedicalProcedure>
            <b>Médico Responsável:</b> Arthur Lopes
          </MedicalProcedure>

          <SurgeryDate>
            <b>Data da cirurgia:</b> 10/10/2020
          </SurgeryDate>

          <Hospital>
            <b>Hospital</b> Mater Dei
          </Hospital>

          <SurgicalRoom>
            <b>Sala da cirurgia:</b> Sala 202
          </SurgicalRoom>

          <Observations>
            <b>Observação: </b> Arthur LopesArthur LopesArthur LopesArthur
            LopesArthur LopesArthur LopesArthur Lopes
          </Observations>

          <EditButton onClick={() => onEdit()}>
            <Pencil2Icon />
          </EditButton>

          <DeleteButton onClick={() => onDelete()}>
            <TrashIcon />
          </DeleteButton>
        </Wrapper>
      </Container>
    </>
  );
}
