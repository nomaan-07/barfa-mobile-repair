import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountActiveOrderCard from "./AccountActiveOrderCard";
import { ActiveOrderStatus } from "./AccountActiveOrderCard/types";

interface ActiveOrder {
  orderCode: string;
  model: string;
  status: ActiveOrderStatus;
  problem: string;
}

// FIXME: get data from server
const activeOrders = [
  {
    orderCode: "sa-a14-27",
    model: "سامسونگ A14",
    status: "repairing",
    problem: "کند شارژ میشه و خاموش میشه وقتی به ۲۰ درصد میرسه",
  },
  {
    orderCode: "ip-13-42",
    model: "آیفون 13",
    status: "ready",
    problem: "تعویض باتری به‌دلیل خالی شدن سریع شارژ",
  },
  {
    orderCode: "xi-rn12-18",
    model: "شیائومی Redmi Note 12",
    status: "repairing",
    problem: "صفحه‌نمایش روشن نمیشه ولی گوشی ویبره می‌زنه",
  },
  {
    orderCode: "hw-y9-31",
    model: "هواوی Y9",
    status: "ready",
    problem: "خرابی سوکت شارژ و قطع و وصل شدن هنگام شارژ",
  },
] satisfies ActiveOrder[];

function AccountActiveOrders() {
  const repairingOrders = activeOrders.filter(
    (order) => order.status === "repairing",
  );

  const readyOrders = activeOrders.filter((order) => order.status === "ready");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="sm:text-xl">وضعیت تعمیرات شما</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger className="cursor-pointer" value="all">
              همه
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="repairing">
              در حال تعمیر
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="ready">
              آماده تحویل
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="divide-y">
            {activeOrders.map((order) => (
              <AccountActiveOrderCard key={order.orderCode} {...order} />
            ))}
          </TabsContent>
          <TabsContent value="repairing" className="divide-y">
            {repairingOrders.map((order) => (
              <AccountActiveOrderCard key={order.orderCode} {...order} />
            ))}
          </TabsContent>
          <TabsContent value="ready" className="divide-y">
            {readyOrders.map((order) => (
              <AccountActiveOrderCard key={order.orderCode} {...order} />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default AccountActiveOrders;
