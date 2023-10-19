import { ChangeEvent } from "react";
import { useOrderForm } from "../../hooks/useOrdersForm";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../textArea/TextArea";
import { Container } from "./styles";

export function OrderForm() {
  const { errors, handleSubmit, register, setSelectedDate, selectedDate } =
    useOrderForm();

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        {...register("patient")}
        placeholder="Informe o nome do paciente"
        type="text"
        label="Nome do Paciente"
        helperText={errors.patient?.message}
      />
      <Input
        {...register("medicalProcedure")}
        placeholder="Informe o procedimento cirugico"
        type="text"
        label="Procedimento"
        helperText={errors.medicalProcedure?.message}
      />
      <Input
        {...register("hospital")}
        placeholder="Informe o hospital"
        type="text"
        label="Hospital"
        helperText={errors.hospital?.message}
      />
      <Input
        {...register("doctor")}
        placeholder="Informe o medico responsável"
        type="text"
        label="Médico Responsável"
        helperText={errors.doctor?.message}
      />
      <Input
        {...register("surgeryDate")}
        type="date"
        label="Data de Agendamento"
        value={selectedDate}
        onChange={handleDataChange}
        helperText={errors.surgeryDate?.message}
      />
      <Input
        {...register("surgicalRoom")}
        placeholder="Informe a sala da cirurgia"
        type="text"
        label="Sala da Cirurgia"
        helperText={errors.surgicalRoom?.message}
      />
      <TextArea
        placeholder="Observações"
        {...register("observations")}
        label="Observações"
      />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}
