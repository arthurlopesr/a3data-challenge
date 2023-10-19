import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../textArea/TextArea";
import { Container } from "./styles";

export function OrderForm() {
  return (
    <Container action="">
      <Input placeholder="Nome do Paciente" type="text" />
      <Input placeholder="Procedimento" type="text" />
      <Input placeholder="Hospital" type="text" />
      <Input placeholder="Médico Responsável" type="text" />
      <Input placeholder="Data" type="date" />
      <Input placeholder="Sala" type="text" />
      <TextArea placeholder="Observação" />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}
