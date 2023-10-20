import { SurgicalOrdersParams } from "../@types/surgical-orders";
import { httpClient } from "./httpClient";

type SurgicalOrdersResponse = Array<SurgicalOrdersParams>;

export class SurgicalOrdersService {
  static async findAllOrderSurgery() {
    const { data } = await httpClient.get<SurgicalOrdersResponse>(
      `/surgical-orders`
    );
    return data;
  }

  static async createOrderSurgery(data: SurgicalOrdersParams) {
    await httpClient.post("/surgical-orders", {
      ...data,
      surgeryDate: new Date(data.surgeryDate).toISOString(),
    });
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
