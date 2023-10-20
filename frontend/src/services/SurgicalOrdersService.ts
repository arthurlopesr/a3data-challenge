import { AxiosError } from "axios";
import { SurgicalOrdersParams } from "../@types/surgical-orders";
import { httpClient } from "./httpClient";

type SurgicalOrdersResponse = Array<SurgicalOrdersParams>;

export class SurgicalOrdersService {
  static async findAllOrderSurgery() {
    try {
      const { data } = await httpClient.get<SurgicalOrdersResponse>(
        `/surgical-orders`
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        alert("Verifique as se API está em execução");
      }
    }
  }

  static async createOrderSurgery(data: SurgicalOrdersParams) {
    try {
      await httpClient.post("/surgical-orders", {
        ...data,
        surgeryDate: new Date(data.surgeryDate).toISOString(),
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.status === 400 &&
          alert("A observação deve conter no minimo 10 caracteres");
        error.response?.status === 409 &&
          alert("Essa sala já está reservada para essa data");
      }
    }
  }

  static async updateOrderSurgery({ code, ...params }: SurgicalOrdersParams) {
    const { data } = await httpClient.put(`/surgical-orders/${code}`, params);

    return data;
  }

  static async removeOrderSurgery(data: SurgicalOrdersParams) {
    await httpClient.post("/surgical-orders", {
      ...data,
      surgeryDate: new Date(data.surgeryDate).toISOString(),
    });
  }
}
