import { ChangeEvent } from "react";
import { useOrderForm } from "../../hooks/useOrdersForm";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../textArea/TextArea";
import { Container } from "./styles";

export function OrderForm() {
  const {
    errors,
    handleSubmit,
    register,
    selectedDate,
    setSelectedDate,
    setIsoDate,
  } = useOrderForm();

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    const dateObject = new Date(newDate);

    if (!isNaN(dateObject.getTime())) {
      const isoDateString = dateObject.toISOString();
      setIsoDate(isoDateString);
      setSelectedDate(newDate);
    } else {
      console.error("Data inválida");
    }
    setSelectedDate(newDate);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        {...register("patientsName")}
        placeholder="Informe o nome do paciente"
        type="text"
        label="Nome do Paciente"
        helperText={errors.patientsName?.message}
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
