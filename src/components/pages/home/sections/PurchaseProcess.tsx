"use client";

import { useState } from "react";
import Image from "next/image";

// components
import PurchaseProcessCard from "../components/PurchaseProcessCard";
import PurchaseProcessCategoryBtn from "../components/PurchaseProcessCategoryBtn";

// data
import PurchaseProcessData from "@/content/home/PurchaseProcess.json";

const PurchaseProcess: React.FC = () => {
  const [PurchaseProcessCategory, setPurchaseProcessCategory] =
    useState<PurchaseProcessCategoryType>("On-site purchase");

  const changeCategory = (category: PurchaseProcessCategoryType) => {
    setPurchaseProcessCategory(category);
    return undefined;
  };

  const purchaseCategoryData = [
    {
      category: "On-site purchase" as PurchaseProcessCategoryType,
      label: "出張買取",
    },
    {
      category: "Home delivery purchase" as PurchaseProcessCategoryType,
      label: "宅配買取",
    },
    {
      category: "Bring-in purchase" as PurchaseProcessCategoryType,
      label: "持込買取",
    },
  ];

  return (
    <section
      id="purchase-process"
      className="relative w-full py-[50px] lg:py-[120px] text-center px-4"
    >
      <Image
        className=" absolute -z-10 top-0 left-0 object-cover"
        fill
        src={"/images/home-page/flow-bg.png"}
        alt="hero-background-hadis"
        loading="lazy"
      />

      <h2 className="font-black text-3xl lg:text-6xl text-[#D51A16]">
        カンタン買取の流れ
      </h2>

      <div className="flex items-center justify-center gap-2 pt-[40px] lg:pt-[50px]">
        {purchaseCategoryData.map((item, index) => (
          <PurchaseProcessCategoryBtn
            key={index}
            category={item.category}
            activeCategory={PurchaseProcessCategory}
            label={item.label}
            changeCategory={changeCategory}
          />
        ))}
      </div>

      <div className="mx-auto flex flex-col justify-start space-y-4 lg:space-y-10 px-7 py-10 lg:px-24 lg:py-20 border-2 border-[#B81122] mt-8  bg-[#FFFFFF99] max-w-[1120px]">
        <h3 className="text-[#D51A16] text-left font-black">
          {PurchaseProcessData[PurchaseProcessCategory].label}
        </h3>
        {PurchaseProcessData[PurchaseProcessCategory].items.map((item) => (
          <PurchaseProcessCard
            key={item.id}
            data={item}
            steps={PurchaseProcessData[PurchaseProcessCategory].items.length}
          />
        ))}
      </div>
    </section>
  );
};

export default PurchaseProcess;
