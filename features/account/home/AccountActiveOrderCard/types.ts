import { OrderStatus } from "@/types/order";

export type ActiveOrderStatus = Extract<OrderStatus, "repairing" | "ready">;
