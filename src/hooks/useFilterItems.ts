import { useMemo, useState } from "react";
import data from "@/content/home/purchasedItems.json";
export const useFilterItems = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    data.filter[0].title || ""
  );

  const filteredItems = useMemo(() => {
    return selectedCategory
      ? data.items.filter((item) => item.category === selectedCategory)
      : data.items;
  }, [selectedCategory]);

  return { selectedCategory, setSelectedCategory, filteredItems };
};
