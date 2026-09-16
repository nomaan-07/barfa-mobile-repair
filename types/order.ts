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
  suggestedPrice?: number;
  partsCost?: number;
  finalPrice?: number;
  paidAmount?: number;
  timeSpent?: number;
  receivedAt: string;
  deadLine?: string;
  finishedAt?: string;
  returnedAt?: string;
  receivedBy: string;
  repairedBy?: string;
  possibleSolution?: string;
  actualSolution?: string;
  repairDetails?: string;
  customerPhone?: string;
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
