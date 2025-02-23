"use client";
import data from "@/content/home/purchasedItems.json";
import Image from "next/image";
import PurchaseItemsCard from "../components/PurchaseItemsCard";
import PurchaseItemsCategoryCard from "../components/PurchaseItemsCategoryCard";
import { useFilterItems } from "@/hooks/useFilterItems";

const PurchasedItems = () => {
  const { filteredItems, selectedCategory, setSelectedCategory } =
    useFilterItems();
  return (
    <section
      id="purchased-items"
      className="relative py-[50px] md:py-[80px] lg:py-[120px] px-5 md:px-[50px] lg:px-[80px]"
      aria-labelledby="purchased-items-heading"
    >
      <Image
        src="/images/home-page/bg-items.jpg"
        alt="banner-right-bg"
        fill
        loading="lazy"
        className="object-cover opacity-10 -z-10"
      />
      {/* overlay */}
      <div className="absolute h-full w-full left-0 top-0 bg-[#FFE0E3] -z-20"></div>
      <h2 className="text-[30px] md:text-[50px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        買取品目一覧
      </h2>
      {/* filter */}
      <div className="mt-[40px] md:mt-[45px] lg:mt-[50px] mb-[24px] md:mb-[28px] lg:mb-[32px] w-full flex flex-wrap justify-center gap-2">
        {data.filter.map((filterItem) => (
          <PurchaseItemsCategoryCard
            key={filterItem.id}
            title={filterItem.title}
            activeCategory={selectedCategory}
            changeCategory={setSelectedCategory}
          />
        ))}
        <div id="scroll-to-items" className="w-0 ml-[-7px]"></div>
      </div>
      {/* items */}
      <div className="flex flex-wrap justify-between md:justify-center gap-[17px] lg:gap-8">
        {filteredItems.map((item) => (
          <div className="w-[47%] md:w-[30%] lg:w-[22%]" key={item.id}>
            <PurchaseItemsCard
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchasedItems;
