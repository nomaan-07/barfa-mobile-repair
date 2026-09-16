import EmptyState from "@/components/ui/EmptyState";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountActiveOrder } from "@/types/order";
import { WrenchOff } from "lucide-react";
import AccountActiveOrderCard from "./AccountActiveOrderCard";

// FIXME: get data from server
const activeOrders = [
  {
    orderCode: "sa-a14-27",
    phoneBrandFa: "سامسونگ",
    phoneModel: "A14",
    status: "repairing",
    issueDescription: "کند شارژ میشه و خاموش میشه وقتی به ۲۰ درصد میرسه",
  },
  {
    orderCode: "ip-13-42",
    phoneBrandFa: "آیفون",
    phoneModel: "13",
    status: "ready",
    issueDescription: "تعویض باتری به‌دلیل خالی شدن سریع شارژ",
  },
  {
    orderCode: "xi-rn12-18",
    phoneBrandFa: "شیائومی",
    phoneModel: "Redmi Note 12",
    status: "repairing",
    issueDescription: "صفحه‌نمایش روشن نمیشه ولی گوشی ویبره می‌زنه",
  },
  {
    orderCode: "hw-y9-31",
    phoneBrandFa: "هواوی",
    phoneModel: "Y9",
    status: "ready",
    issueDescription: "خرابی سوکت شارژ و قطع و وصل شدن هنگام شارژ",
  },
] satisfies AccountActiveOrder[];

function AccountActiveOrders() {
  const repairingOrders = activeOrders.filter(
    (order) => order.status === "repairing",
  );

  const readyOrders = activeOrders.filter((order) => order.status === "ready");

  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle className="font-semibold sm:text-xl">
          وضعیت سفارش‌های شما
        </CardTitle>
      </CardHeader>
      <CardContent>
        {activeOrders.length > 0 ? (
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
        ) : (
          <EmptyState icon={WrenchOff} message="سفارش فعالی ندارید" />
        )}
      </CardContent>
    </Card>
  );
}

export default AccountActiveOrders;
