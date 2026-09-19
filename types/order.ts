export type OrderStatus = "repairing" | "ready" | "picked_up" | "canceled";

export type ActiveOrderStatus = Extract<OrderStatus, "repairing" | "ready">;

export type Order = {
  createdAt: string;
  orderCode: string;
  customerId: string;
  phoneBrandFa: string;
  phoneModel: string;
  issueTitle: string;
  issueDescription: string;
  status: OrderStatus;
  suggestedPrice: number | null;
  partsCost: number | null;
  finalPrice: number | null;
  paidAmount: number | null;
  timeSpent: number | null;
  receivedAt: string;
  deadLine: string | null;
  finishedAt: string | null;
  returnedAt: string | null;
  receivedB: string | null;
  repairedBy: string | null;
  possibleSolution: string | null;
  actualSolution: string | null;
  repairDetails: string | null;
  customerPhone: string | null;
};

export type AccountActiveOrder = Pick<
  Order,
  "orderCode" | "phoneModel" | "phoneBrandFa" | "issueDescription"
> & { status: ActiveOrderStatus };

export type AccountOrder = Pick<
  Order,
  | "orderCode"
  | "phoneBrandFa"
  | "phoneModel"
  | "issueTitle"
  | "issueDescription"
  | "status"
  | "receivedAt"
  | "returnedAt"
  | "paidAmount"
>;

export type AdminOrder = Pick<
  Order,
  | "orderCode"
  | "phoneBrandFa"
  | "phoneModel"
  | "issueTitle"
  | "status"
  | "receivedAt"
  | "returnedAt"
  | "paidAmount"
  | "customerPhone"
>;
