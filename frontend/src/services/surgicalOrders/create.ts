import axios from "axios";

export interface SurgicalOrdersParams {
  surgicalRoom: string;
  medicalProcedure: string;
  doctor: string;
  patient: string;
  hospital: string;
  surgeryDate: string;
  observations: string;
}

async function createOrderSurgery(params: SurgicalOrdersParams) {
  const { data } = await axios.post(
    "http://localhost:3001/surgical-orders",
    params
  );

  return data;
}

export const createOrderSurgeryService = {
  createOrderSurgery,
};
