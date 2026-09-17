import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { LucideEraser, SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function AdminOrderSearch() {
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  useEffect(() => {
    const currentQuery = searchParams.get("query") ?? "";

    if (query === currentQuery) return;

    const timeout = setTimeout(() => {
      updateSearchParams({ query: query || null });
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, searchParams, updateSearchParams]);

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
