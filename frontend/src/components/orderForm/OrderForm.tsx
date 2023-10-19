import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../textArea/TextArea";
import { Container } from "./styles";

const schema = z.object({
  patientsName: z.string().nonempty("Nome da conta é obrigatório"),
  medicalProcedure: z.string().nonempty("Procedimento cirúrgico é obrigatório"),
  hospital: z.string().nonempty("Hospital é obrigatório"),
  doctor: z.string().nonempty("Médico responsável é obrigatório"),
  surgeryDate: z.date(),
  surgicalRoom: z.string().nonempty("Sala cirúrgica é obrigatório"),
});
type FormData = z.infer<typeof schema>;

export function OrderForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleForm = (data: FormData) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <Container onSubmit={handleSubmit(handleForm)}>
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
        helperText={errors.surgeryDate?.message}
      />
      <Input
        {...register("surgicalRoom")}
        placeholder="Informe a sala da cirurgia"
        type="text"
        label="Sala da Cirurgia"
        helperText={errors.surgicalRoom?.message}
      />
      <TextArea placeholder="Observações" label="Observações" />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}
