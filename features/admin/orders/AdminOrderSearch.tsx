import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideEraser, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function AdminOrderSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  useEffect(() => {
    const currentQuery = searchParams.get("query") ?? "";

    if (query === currentQuery) return;

    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (query) params.set("query", query);
      else params.delete("query");

      replace(`${pathname}?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pathname, replace, searchParams, query]);

  return (
    <div className="text-muted-foreground focus-within:border-ring dark:bg-input/30 flex h-8 w-full items-center justify-between overflow-hidden rounded-lg border pr-2.5 sm:w-54">
      <SearchIcon strokeWidth={1.5} />
      <Input
        placeholder="جستجو..."
        className="border-none bg-transparent! focus-visible:ring-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <Button size="icon" variant="ghost" onClick={() => setQuery("")}>
          <LucideEraser />
        </Button>
      )}
    </div>
  );
}

export default AdminOrderSearch;
