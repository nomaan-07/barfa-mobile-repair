"use client";

import EmptyState from "@/components/ui/EmptyState";
import { AccountOrder } from "@/types/order";
import { ClipboardX } from "lucide-react";
import { useState } from "react";
import AccountOrdersTable from "./AccountOrdersTable";
import AccountOrdersTableControls from "./AccountOrdersTableControls";
import { AccountTableFilterType, AccountTableSortType } from "./types";

// FIXME: Get from db
const fakeOrders: AccountOrder[] = [
  {
    orderCode: "sa-a14-27",
    phoneBrand: "سامسونگ",
    phoneModel: "A14",
    status: "repairing",
    problemTitle: "شارژ کند",
    problemDescription:
      "گوشی با وجود استفاده از شارژر سالم، بسیار کند شارژ می‌شود و در بعضی مواقع درصد باتری برای مدت طولانی تغییری نمی‌کند.",
    createdAt: "2025-09-05",
  },
  {
    orderCode: "ip-13p-26",
    phoneBrand: "آیفون",
    phoneModel: "13 Pro",
    status: "ready",
    problemTitle: "روشن نشدن",
    problemDescription:
      "دستگاه پس از خاموش شدن دیگر روشن نمی‌شود و با اتصال به شارژر نیز هیچ واکنشی نشان نمی‌دهد.",
    createdAt: "2025-09-03",
  },
  {
    orderCode: "xi-rn12-25",
    phoneBrand: "شیائومی",
    phoneModel: "Redmi Note 12",
    status: "picked_up",
    problemTitle: "تعویض باتری",
    problemDescription:
      "باتری دستگاه در مدت کوتاهی تخلیه می‌شود و هنگام استفاده معمولی نیز درصد شارژ به‌سرعت کاهش پیدا می‌کند.",
    createdAt: "2025-08-28",
    pickedUpAt: "2025-08-30",
    paidAmount: 1800000,
  },
  {
    orderCode: "sa-s21-24",
    phoneBrand: "سامسونگ",
    phoneModel: "S21",
    status: "canceled",
    problemTitle: "خرابی صفحه نمایش",
    problemDescription:
      "صفحه نمایش دستگاه دارای خطوط عمودی است و بخشی از تصویر به‌درستی نمایش داده نمی‌شود. مشتری پس از اعلام هزینه درخواست لغو تعمیر را داشته است.",
    createdAt: "2025-08-25",
  },
  {
    orderCode: "ip-11-23",
    phoneBrand: "آیفون",
    phoneModel: "11",
    status: "repairing",
    problemTitle: "مشکل آنتن‌دهی",
    problemDescription:
      "دستگاه در بیشتر مواقع آنتن ندارد و پس از قرار دادن سیم‌کارت، شبکه به‌صورت ناپایدار متصل و قطع می‌شود.",
    createdAt: "2025-09-04",
  },
  {
    orderCode: "hu-nova9-22",
    phoneBrand: "هواوی",
    phoneModel: "Nova 9",
    status: "ready",
    problemTitle: "مشکل شارژ",
    problemDescription:
      "گوشی هنگام اتصال کابل شارژ، گاهی شارژ می‌شود و گاهی اتصال قطع می‌شود. سوکت شارژ نیاز به بررسی و تعمیر دارد.",
    createdAt: "2025-09-01",
  },
  {
    orderCode: "xi-poco-21",
    phoneBrand: "شیائومی",
    phoneModel: "Poco X3",
    status: "picked_up",
    problemTitle: "خرابی سوکت شارژ",
    problemDescription:
      "کابل شارژ به‌درستی داخل سوکت قرار نمی‌گیرد و با کوچک‌ترین حرکت اتصال شارژ قطع می‌شود. سوکت شارژ تعویض شد.",
    createdAt: "2025-08-20",
    pickedUpAt: "2025-08-22",
    paidAmount: 1500000,
  },
  {
    orderCode: "sa-a52-20",
    phoneBrand: "سامسونگ",
    phoneModel: "A52",
    status: "canceled",
    problemTitle: "آب‌خوردگی",
    problemDescription:
      "دستگاه پس از تماس با آب خاموش شده و دیگر روشن نمی‌شود. آثار رطوبت در قسمت داخلی دستگاه مشاهده شده است.",
    createdAt: "2025-08-18",
  },
  {
    orderCode: "ip-12-19",
    phoneBrand: "آیفون",
    phoneModel: "12",
    status: "repairing",
    problemTitle: "خرابی دوربین",
    problemDescription:
      "دوربین اصلی هنگام باز شدن تصویر تار نشان می‌دهد و فوکوس به‌درستی انجام نمی‌شود. دوربین در حال بررسی و تعمیر است.",
    createdAt: "2025-09-06",
  },
  {
    orderCode: "sa-s22-18",
    phoneBrand: "سامسونگ",
    phoneModel: "S22",
    status: "ready",
    problemTitle: "ضعف باتری",
    problemDescription:
      "ظرفیت باتری دستگاه کاهش پیدا کرده و گوشی با استفاده معمولی نیاز به شارژ مجدد در طول روز دارد. باتری تعویض شده و دستگاه آماده تحویل است.",
    createdAt: "2025-09-02",
  },
  {
    orderCode: "xi-11t-17",
    phoneBrand: "شیائومی",
    phoneModel: "11T",
    status: "picked_up",
    problemTitle: "روشن نشدن",
    problemDescription:
      "دستگاه به‌صورت ناگهانی خاموش شده و هیچ واکنشی به دکمه پاور یا اتصال شارژر نداشته است. مشکل برطرف و دستگاه تست کامل شده است.",
    createdAt: "2025-08-15",
    pickedUpAt: "2025-08-18",
    paidAmount: 3500000,
  },
  {
    orderCode: "ip-xr-16",
    phoneBrand: "آیفون",
    phoneModel: "XR",
    status: "canceled",
    problemTitle: "مشکل تصویر",
    problemDescription:
      "تصویر صفحه نمایش گاهی قطع می‌شود و صفحه برای چند ثانیه کاملاً سیاه می‌شود. پس از بررسی اولیه، مشتری تصمیم گرفت فعلاً تعمیر انجام نشود.",
    createdAt: "2025-08-12",
  },
] as const;

function AccountOrders() {
  const [statusFilter, setStatusFilter] =
    useState<AccountTableFilterType>("all");
  const [sortOrder, setSortOrder] = useState<AccountTableSortType>("newest");

  function resetControls() {
    setStatusFilter("all");
    setSortOrder("newest");
  }

  const displayedOrders = fakeOrders
    .filter((order) => statusFilter === "all" || order.status === statusFilter)
    .toSorted((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const hasActiveControls = statusFilter !== "all" || sortOrder !== "newest";

  return (
    <>
      <AccountOrdersTableControls
        sortOrder={sortOrder}
        onSortOrder={setSortOrder}
        statusFilter={statusFilter}
        onStatusFilter={setStatusFilter}
        onReset={resetControls}
        hasActiveControls={hasActiveControls}
      />
      {displayedOrders.length > 0 ? (
        <AccountOrdersTable orders={displayedOrders} />
      ) : (
        <EmptyState
          icon={ClipboardX}
          message="هیچ سفارشی با این مشخصات یافت نشد"
        />
      )}
    </>
  );
}

export default AccountOrders;
