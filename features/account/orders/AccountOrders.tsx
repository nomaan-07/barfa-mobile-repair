"use client";

import EmptyState from "@/components/ui/EmptyState";
import { DEFAULT_ORDER_STATUS_FILTER } from "@/constants/orderStatuses";
import { DEFAULT_DATE_SORT } from "@/constants/sorts";
import { StatusFilter } from "@/types/filter";
import { AccountOrder } from "@/types/order";
import { DateSort } from "@/types/sort";
import { ClipboardX } from "lucide-react";
import { useState } from "react";
import AccountOrdersTable from "./AccountOrdersTable";
import AccountOrdersTableControls from "./AccountOrdersTableControls";

// FIXME: Get from db
const orders: AccountOrder[] = [
  {
    orderCode: "sa-a14-27",
    phoneBrandFa: "سامسونگ",
    phoneModel: "A14",
    status: "repairing",
    issueTitle: "شارژ کند",
    issueDescription:
      "گوشی با وجود استفاده از شارژر سالم، بسیار کند شارژ می‌شود و در بعضی مواقع درصد باتری برای مدت طولانی تغییری نمی‌کند.",
    receivedAt: "2025-09-05",
  },
  {
    orderCode: "ip-13p-26",
    phoneBrandFa: "آیفون",
    phoneModel: "13 Pro",
    status: "ready",
    issueTitle: "روشن نشدن",
    issueDescription:
      "دستگاه پس از خاموش شدن دیگر روشن نمی‌شود و با اتصال به شارژر نیز هیچ واکنشی نشان نمی‌دهد.",
    receivedAt: "2025-09-03",
  },
  {
    orderCode: "xi-rn12-25",
    phoneBrandFa: "شیائومی",
    phoneModel: "Redmi Note 12",
    status: "picked_up",
    issueTitle: "تعویض باتری",
    issueDescription:
      "باتری دستگاه در مدت کوتاهی تخلیه می‌شود و هنگام استفاده معمولی نیز درصد شارژ به‌سرعت کاهش پیدا می‌کند.",
    receivedAt: "2025-08-28",
    returnedAt: "2025-08-30",
    paidAmount: 1800000,
  },
  {
    orderCode: "sa-s21-24",
    phoneBrandFa: "سامسونگ",
    phoneModel: "S21",
    status: "canceled",
    issueTitle: "خرابی صفحه نمایش",
    issueDescription:
      "صفحه نمایش دستگاه دارای خطوط عمودی است و بخشی از تصویر به‌درستی نمایش داده نمی‌شود. مشتری پس از اعلام هزینه درخواست لغو تعمیر را داشته است.",
    receivedAt: "2025-08-25",
  },
  {
    orderCode: "ip-11-23",
    phoneBrandFa: "آیفون",
    phoneModel: "11",
    status: "repairing",
    issueTitle: "مشکل آنتن‌دهی",
    issueDescription:
      "دستگاه در بیشتر مواقع آنتن ندارد و پس از قرار دادن سیم‌کارت، شبکه به‌صورت ناپایدار متصل و قطع می‌شود.",
    receivedAt: "2025-09-04",
  },
  {
    orderCode: "hu-nova9-22",
    phoneBrandFa: "هواوی",
    phoneModel: "Nova 9",
    status: "ready",
    issueTitle: "مشکل شارژ",
    issueDescription:
      "گوشی هنگام اتصال کابل شارژ، گاهی شارژ می‌شود و گاهی اتصال قطع می‌شود. سوکت شارژ نیاز به بررسی و تعمیر دارد.",
    receivedAt: "2025-09-01",
  },
  {
    orderCode: "xi-poco-21",
    phoneBrandFa: "شیائومی",
    phoneModel: "Poco X3",
    status: "picked_up",
    issueTitle: "خرابی سوکت شارژ",
    issueDescription:
      "کابل شارژ به‌درستی داخل سوکت قرار نمی‌گیرد و با کوچک‌ترین حرکت اتصال شارژ قطع می‌شود. سوکت شارژ تعویض شد.",
    receivedAt: "2025-08-20",
    returnedAt: "2025-08-22",
    paidAmount: 1500000,
  },
  {
    orderCode: "sa-a52-20",
    phoneBrandFa: "سامسونگ",
    phoneModel: "A52",
    status: "canceled",
    issueTitle: "آب‌خوردگی",
    issueDescription:
      "دستگاه پس از تماس با آب خاموش شده و دیگر روشن نمی‌شود. آثار رطوبت در قسمت داخلی دستگاه مشاهده شده است.",
    receivedAt: "2025-08-18",
  },
  {
    orderCode: "ip-12-19",
    phoneBrandFa: "آیفون",
    phoneModel: "12",
    status: "repairing",
    issueTitle: "خرابی دوربین",
    issueDescription:
      "دوربین اصلی هنگام باز شدن تصویر تار نشان می‌دهد و فوکوس به‌درستی انجام نمی‌شود. دوربین در حال بررسی و تعمیر است.",
    receivedAt: "2025-09-06",
  },
  {
    orderCode: "sa-s22-18",
    phoneBrandFa: "سامسونگ",
    phoneModel: "S22",
    status: "ready",
    issueTitle: "ضعف باتری",
    issueDescription:
      "ظرفیت باتری دستگاه کاهش پیدا کرده و گوشی با استفاده معمولی نیاز به شارژ مجدد در طول روز دارد. باتری تعویض شده و دستگاه آماده تحویل است.",
    receivedAt: "2025-09-02",
  },
  {
    orderCode: "xi-11t-17",
    phoneBrandFa: "شیائومی",
    phoneModel: "11T",
    status: "picked_up",
    issueTitle: "روشن نشدن",
    issueDescription:
      "دستگاه به‌صورت ناگهانی خاموش شده و هیچ واکنشی به دکمه پاور یا اتصال شارژر نداشته است. مشکل برطرف و دستگاه تست کامل شده است.",
    receivedAt: "2025-08-15",
    returnedAt: "2025-08-18",
    paidAmount: 3500000,
  },
  {
    orderCode: "ip-xr-16",
    phoneBrandFa: "آیفون",
    phoneModel: "XR",
    status: "canceled",
    issueTitle: "مشکل تصویر",
    issueDescription:
      "تصویر صفحه نمایش گاهی قطع می‌شود و صفحه برای چند ثانیه کاملاً سیاه می‌شود. پس از بررسی اولیه، مشتری تصمیم گرفت فعلاً تعمیر انجام نشود.",
    receivedAt: "2025-08-12",
  },
];

function AccountOrders() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(
    DEFAULT_ORDER_STATUS_FILTER,
  );
  const [dateSort, setDateSort] = useState<DateSort>(DEFAULT_DATE_SORT);

  function resetControls() {
    setStatusFilter(DEFAULT_ORDER_STATUS_FILTER);
    setDateSort(DEFAULT_DATE_SORT);
  }

  const displayedOrders = orders
    .filter(
      (order) =>
        statusFilter === DEFAULT_ORDER_STATUS_FILTER ||
        order.status === statusFilter,
    )
    .toSorted((a, b) => {
      const dateA = new Date(a.receivedAt).getTime();
      const dateB = new Date(b.receivedAt).getTime();

      return dateSort === DEFAULT_DATE_SORT ? dateB - dateA : dateA - dateB;
    });

  const hasActiveControls =
    statusFilter !== DEFAULT_ORDER_STATUS_FILTER ||
    dateSort !== DEFAULT_DATE_SORT;

  return orders.length > 0 ? (
    <>
      <AccountOrdersTableControls
        dateSort={dateSort}
        onDateSort={setDateSort}
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
  ) : (
    <EmptyState icon={ClipboardX} message="هیچ سفارشی ندارید" />
  );
}

export default AccountOrders;
