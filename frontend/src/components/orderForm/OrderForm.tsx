import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../textArea/TextArea";
import { Container } from "./styles";

export function OrderForm() {
  return (
    <Container action="">
      <Input
        placeholder="Informe o nome do paciente"
        type="text"
        label="Nome do Paciente"
      />
      <Input
        placeholder="Informe o procedimento cirugico"
        type="text"
        label="Procedimento"
      />
      <Input placeholder="Informe o hospital" type="text" label="Hospital" />
      <Input
        placeholder="Informe o medico responsável"
        type="text"
        label="Médico Responsável"
      />
      <Input type="date" label="Data de Agendamento" />
      <Input
        placeholder="Informe a sala da cirurgia"
        type="text"
        label="Sala da Cirurgia"
      />
      <TextArea placeholder="Observação" />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}
