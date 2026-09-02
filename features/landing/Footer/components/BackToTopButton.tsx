"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

function BackToTopButton() {
  return (
    <Button
      variant="outline"
      className="cursor-pointer"
      size="lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      بازگشت به بالا
      <ChevronUp className="size-5" />
    </Button>
  );
}

export default BackToTopButton;
