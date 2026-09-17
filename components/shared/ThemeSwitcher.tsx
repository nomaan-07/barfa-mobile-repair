"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const themes = [
  {
    value: "light",
    label: "روشن",
  },
  {
    value: "dark",
    label: "تیره",
  },
  {
    value: "system",
    label: "پیش‌فرض سیستم",
  },
];

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon">
            <Sun className="dark:hidden" />
            <Moon className="hidden dark:block" />
            <span className="sr-only">تغییر تم</span>
          </Button>
        }
      />

      <DropdownMenuContent align="end">
        {themes.map(({ value, label }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeSwitcher;
