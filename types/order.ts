export type OrderStatus = "repairing" | "ready" | "picked_up" | "canceled";

export type AccountOrder = {
  orderCode: string;
  phoneBrand: string;
  phoneModel: string;
  problemTitle: string;
  problemDescription: string;
  status: OrderStatus;
  createdAt: string;
  pickedUpAt?: string;
  paidAmount?: number;
};
