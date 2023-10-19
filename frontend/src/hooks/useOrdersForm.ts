import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { httpClient } from "../services/httpClient";

const schema = z.object({
  patient: z.string().nonempty("Nome da conta é obrigatório"),
  medicalProcedure: z.string().nonempty("Procedimento cirúrgico é obrigatório"),
  hospital: z.string().nonempty("Hospital é obrigatório"),
  doctor: z.string().nonempty("Médico responsável é obrigatório"),
  surgeryDate: z
    .string({
      errorMap: () => {
        return {
          message: "Data de agendamento é obrigatório",
        };
      },
    })
    .nonempty("Data de agendamento é obrigatório"),
  surgicalRoom: z.string().nonempty("Sala cirúrgica é obrigatório"),
  observations: z.string().nonempty("Observações é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function useOrderForm() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpClient.post("/surgical-orders", {
      ...data,
      surgeryDate: new Date(data.surgeryDate).toISOString(),
    });
  });

  return {
    handleSubmit,
    register,
    errors,
    selectedDate,
    setSelectedDate,
  };
}
